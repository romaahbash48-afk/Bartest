'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import type { MoodId } from '@/content/moods';
import { moods, defaultMood } from '@/content/moods';

const STORAGE_KEY = 'bar-henrietta-mood';

const MoodContext = createContext<{
  moodId: MoodId;
  setMoodId: (id: MoodId) => void;
  mood: (typeof moods)[0];
} | null>(null);

export function MoodProvider({ children }: { children: React.ReactNode }) {
  const [moodId, setMoodIdState] = useState<MoodId>(defaultMood);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as MoodId | null;
    if (stored && moods.some((m) => m.id === stored)) {
      setMoodIdState(stored);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && typeof document !== 'undefined') {
      document.body.setAttribute('data-mood', moodId);
    }
  }, [moodId, mounted]);

  const setMoodId = (id: MoodId) => {
    setMoodIdState(id);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, id);
    }
  };

  const mood = moods.find((m) => m.id === moodId) ?? moods[0];

  return (
    <MoodContext.Provider value={{ moodId, setMoodId, mood }}>
      {children}
    </MoodContext.Provider>
  );
}

export function useMood() {
  const ctx = useContext(MoodContext);
  if (!ctx) throw new Error('useMood must be used within MoodProvider');
  return ctx;
}
