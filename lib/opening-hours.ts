import type { DayKey, OpeningHoursEntry } from "@/content/site";

const MINUTES_IN_DAY = 24 * 60;
const MINUTES_IN_WEEK = 7 * MINUTES_IN_DAY;

const DAY_BY_INDEX: DayKey[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const INDEX_BY_DAY: Record<DayKey, number> = {
  mon: 0,
  tue: 1,
  wed: 2,
  thu: 3,
  fri: 4,
  sat: 5,
  sun: 6
};

const WEEKDAY_LABEL_TO_INDEX: Record<string, number> = {
  mon: 0,
  tue: 1,
  wed: 2,
  thu: 3,
  fri: 4,
  sat: 5,
  sun: 6
};

interface Interval {
  day: DayKey;
  open: string;
  close: string;
  start: number;
  end: number;
}

export interface OpenStatus {
  berlinTime: string;
  isOpen: boolean;
  currentInterval: {
    day: DayKey;
    open: string;
    close: string;
  } | null;
  nextOpening: {
    day: DayKey;
    time: string;
  };
}

function parseClockToMinutes(clock: string): number {
  const [hourText, minuteText] = clock.split(":");
  const hour = Number(hourText);
  const minute = Number(minuteText);

  if (
    Number.isNaN(hour) ||
    Number.isNaN(minute) ||
    hour < 0 ||
    hour > 23 ||
    minute < 0 ||
    minute > 59
  ) {
    throw new Error(`Invalid time value: ${clock}`);
  }

  return hour * 60 + minute;
}

function toClock(totalMinutes: number): string {
  const minuteOfDay = ((totalMinutes % MINUTES_IN_DAY) + MINUTES_IN_DAY) % MINUTES_IN_DAY;
  const hour = Math.floor(minuteOfDay / 60);
  const minute = minuteOfDay % 60;

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function toDayTime(totalMinutes: number): { day: DayKey; time: string } {
  const normalized = ((totalMinutes % MINUTES_IN_WEEK) + MINUTES_IN_WEEK) % MINUTES_IN_WEEK;
  const dayIndex = Math.floor(normalized / MINUTES_IN_DAY);

  return {
    day: DAY_BY_INDEX[dayIndex] ?? "mon",
    time: toClock(normalized)
  };
}

function getBerlinWeekMinute(date: Date): { weekMinute: number; berlinTime: string } {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Berlin",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

  const parts = formatter.formatToParts(date);
  const weekday = parts.find((part) => part.type === "weekday")?.value.slice(0, 3).toLowerCase();
  const hourPart = parts.find((part) => part.type === "hour")?.value ?? "00";
  const minutePart = parts.find((part) => part.type === "minute")?.value ?? "00";
  const dayIndex = WEEKDAY_LABEL_TO_INDEX[weekday ?? "mon"] ?? 0;
  const hour = Number(hourPart) % 24;
  const minute = Number(minutePart) % 60;
  const weekMinute = dayIndex * MINUTES_IN_DAY + hour * 60 + minute;

  return {
    weekMinute,
    berlinTime: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`
  };
}

function buildIntervals(hours: Record<DayKey, OpeningHoursEntry>): Interval[] {
  const intervals: Interval[] = [];

  for (const day of DAY_BY_INDEX) {
    const entry = hours[day];
    const openMinutes = parseClockToMinutes(entry.open);
    const closeMinutes = parseClockToMinutes(entry.close);
    const dayIndex = INDEX_BY_DAY[day];
    const start = dayIndex * MINUTES_IN_DAY + openMinutes;
    const crossesMidnight = closeMinutes <= openMinutes;
    const endDayOffset = crossesMidnight ? 1 : 0;
    const end = (dayIndex + endDayOffset) * MINUTES_IN_DAY + closeMinutes;

    intervals.push({
      day,
      open: entry.open,
      close: entry.close,
      start,
      end
    });
  }

  return intervals.sort((a, b) => a.start - b.start);
}

export function getOpenStatus(hours: Record<DayKey, OpeningHoursEntry>, now = new Date()): OpenStatus {
  const intervals = buildIntervals(hours);
  const { weekMinute, berlinTime } = getBerlinWeekMinute(now);

  const currentInterval = intervals.find(
    (interval) => weekMinute >= interval.start && weekMinute < interval.end
  );

  let nextInterval = intervals.find((interval) => interval.start > weekMinute);
  if (!nextInterval) {
    nextInterval = intervals[0];
  }

  const nextStart =
    nextInterval.start > weekMinute ? nextInterval.start : nextInterval.start + MINUTES_IN_WEEK;
  const nextOpening = toDayTime(nextStart);

  return {
    berlinTime,
    isOpen: Boolean(currentInterval),
    currentInterval: currentInterval
      ? {
          day: currentInterval.day,
          open: currentInterval.open,
          close: currentInterval.close
        }
      : null,
    nextOpening
  };
}
