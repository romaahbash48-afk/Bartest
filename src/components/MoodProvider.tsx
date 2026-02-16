"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { moods, type Mood } from "@content/moods";

interface MoodContextValue {
  selectedMood: Mood | null;
  selectMood: (id: string) => void;
  clearMood: () => void;
}

const MoodContext = createContext<MoodContextValue>({
  selectedMood: null,
  selectMood: () => {},
  clearMood: () => {},
});

export function MoodProvider({ children }: { children: ReactNode }) {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("henrietta-mood");
    if (stored) {
      const found = moods.find((m) => m.id === stored);
      if (found) {
        setSelectedMood(found);
        applyMoodColors(found);
      }
    }
  }, []);

  const selectMood = useCallback((id: string) => {
    const found = moods.find((m) => m.id === id);
    if (found) {
      setSelectedMood(found);
      localStorage.setItem("henrietta-mood", id);
      applyMoodColors(found);
    }
  }, []);

  const clearMood = useCallback(() => {
    setSelectedMood(null);
    localStorage.removeItem("henrietta-mood");
    resetMoodColors();
  }, []);

  return (
    <MoodContext.Provider value={{ selectedMood, selectMood, clearMood }}>
      {children}
    </MoodContext.Provider>
  );
}

function applyMoodColors(mood: Mood) {
  const root = document.documentElement;
  root.style.setProperty("--accent", mood.accent);
  root.style.setProperty("--accent2", mood.accent2);
  root.style.setProperty("--glow", mood.glow);
}

function resetMoodColors() {
  const root = document.documentElement;
  root.style.setProperty("--accent", "#b8774e");
  root.style.setProperty("--accent2", "#c9a46a");
  root.style.setProperty("--glow", "rgba(184,119,78,0.15)");
}

export function useMood() {
  return useContext(MoodContext);
}
