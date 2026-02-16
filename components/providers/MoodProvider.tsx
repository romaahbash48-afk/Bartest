"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { defaultMoodId, moods, type MoodEntry } from "@/content/moods";

const STORAGE_KEY = "henrietta-mood";

interface MoodContextValue {
  mood: MoodEntry;
  moodId: string;
  setMoodId: (id: string) => void;
  allMoods: MoodEntry[];
}

const MoodContext = createContext<MoodContextValue | null>(null);

function resolveMood(id: string): MoodEntry {
  return moods.find((mood) => mood.id === id) ?? moods[0];
}

export function MoodProvider({ children }: { children: ReactNode }) {
  const [moodId, setMoodIdState] = useState<string>(defaultMoodId);
  const mood = useMemo(() => resolveMood(moodId), [moodId]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return;
    }

    setMoodIdState(resolveMood(stored).id);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", mood.accent);
    root.style.setProperty("--accent2", mood.accent2);
    root.style.setProperty("--glow", mood.glow);
    document.body.dataset.mood = mood.id;
  }, [mood]);

  const setMoodId = useCallback((id: string) => {
    const nextMood = resolveMood(id);
    setMoodIdState(nextMood.id);
    window.localStorage.setItem(STORAGE_KEY, nextMood.id);
  }, []);

  const value = useMemo(
    () => ({
      mood,
      moodId,
      setMoodId,
      allMoods: moods
    }),
    [mood, moodId, setMoodId]
  );

  return <MoodContext.Provider value={value}>{children}</MoodContext.Provider>;
}

export function useMood(): MoodContextValue {
  const context = useContext(MoodContext);
  if (!context) {
    throw new Error("useMood must be used within MoodProvider");
  }

  return context;
}
