'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { moods, MoodId, Mood } from '@/content/moods'

interface MoodContextType {
  selectedMood: Mood | null
  setSelectedMood: (moodId: MoodId | null) => void
}

const MoodContext = createContext<MoodContextType | undefined>(undefined)

export function MoodProvider({ children }: { children: ReactNode }) {
  const [selectedMood, setSelectedMoodState] = useState<Mood | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load mood from localStorage
    const savedMoodId = localStorage.getItem('selectedMood') as MoodId | null
    if (savedMoodId) {
      const mood = moods.find(m => m.id === savedMoodId)
      if (mood) {
        setSelectedMoodState(mood)
        applyMoodTheme(mood)
      }
    }
  }, [])

  const applyMoodTheme = (mood: Mood | null) => {
    if (mood) {
      document.documentElement.style.setProperty('--accent', mood.accentColor)
      document.documentElement.style.setProperty('--accent2', mood.accent2Color)
      document.documentElement.style.setProperty('--glow', mood.glowColor)
      document.body.setAttribute('data-mood', mood.id)
    } else {
      document.documentElement.style.setProperty('--accent', '#B8774E')
      document.documentElement.style.setProperty('--accent2', '#C9A46A')
      document.documentElement.style.setProperty('--glow', 'rgba(184, 119, 78, 0.3)')
      document.body.removeAttribute('data-mood')
    }
  }

  const setSelectedMood = (moodId: MoodId | null) => {
    const mood = moodId ? moods.find(m => m.id === moodId) || null : null
    setSelectedMoodState(mood)
    applyMoodTheme(mood)
    
    if (mounted) {
      if (moodId) {
        localStorage.setItem('selectedMood', moodId)
      } else {
        localStorage.removeItem('selectedMood')
      }
    }
  }

  return (
    <MoodContext.Provider value={{ selectedMood, setSelectedMood }}>
      {children}
    </MoodContext.Provider>
  )
}

export function useMood() {
  const context = useContext(MoodContext)
  if (context === undefined) {
    throw new Error('useMood must be used within a MoodProvider')
  }
  return context
}
