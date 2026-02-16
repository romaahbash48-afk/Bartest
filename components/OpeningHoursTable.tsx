"use client";

import { dayOrder, siteContent } from "@/content/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface OpeningHoursTableProps {
  className?: string;
}

export function OpeningHoursTable({ className }: OpeningHoursTableProps) {
  const { t } = useLanguage();

  return (
    <table className={`w-full text-left text-sm ${className ?? ""}`}>
      <tbody>
        {dayOrder.map((day) => {
          const slot = siteContent.openingHours[day];
          return (
            <tr key={day} className="border-b border-white/5 last:border-none">
              <th scope="row" className="py-2 pr-4 font-medium text-text-muted">
                {t(`day.${day}` as const)}
              </th>
              <td className="py-2 text-text">
                {slot.open} - {slot.close}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
