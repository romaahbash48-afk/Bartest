import { siteConfig } from '@/content/site'

export function getOpenStatus(timezone: string = 'Europe/Berlin') {
  const now = new Date()
  
  // Get current time in Berlin timezone
  const berlinTime = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(now)

  const currentDay = new Date(now.toLocaleString('en-US', { timeZone: timezone })).getDay()
  
  const todayHours = siteConfig.openingHours.find(h => h.day === currentDay)
  
  if (!todayHours) {
    return { isOpen: false, todayHours: null, nextOpening: null }
  }

  const [currentHour, currentMinute] = berlinTime.split(':').map(Number)
  const currentMinutes = currentHour * 60 + currentMinute

  const [openHour, openMinute] = todayHours.open.split(':').map(Number)
  const openMinutes = openHour * 60 + openMinute

  let [closeHour, closeMinute] = todayHours.close.split(':').map(Number)
  let closeMinutes = closeHour * 60 + closeMinute
  
  // If close time is after midnight (like 01:00 or 02:00), add 24 hours
  if (closeHour < openHour) {
    closeMinutes += 24 * 60
  }

  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes

  // Find next opening
  let nextOpening = null
  if (!isOpen) {
    // Check if opening later today
    if (currentMinutes < openMinutes) {
      nextOpening = {
        day: todayHours.name,
        time: todayHours.open,
      }
    } else {
      // Find next day that's open
      for (let i = 1; i <= 7; i++) {
        const nextDay = (currentDay + i) % 7
        const nextDayHours = siteConfig.openingHours.find(h => h.day === nextDay)
        if (nextDayHours) {
          nextOpening = {
            day: nextDayHours.name,
            time: nextDayHours.open,
          }
          break
        }
      }
    }
  }

  return { isOpen, todayHours, nextOpening }
}

export function formatTime(time: string): string {
  return time
}
