"use client";

import type { ReactNode } from "react";

import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { MoodProvider } from "@/components/providers/MoodProvider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <MoodProvider>{children}</MoodProvider>
    </LanguageProvider>
  );
}
