import Hero from '@/components/Hero'
import StorySections from '@/components/StorySections'
import TodayOpenStatus from '@/components/TodayOpenStatus'
import MoodMap from '@/components/MoodMap'
import MenuPreview from '@/components/MenuPreview'
import Gallery from '@/components/Gallery'
import ReservationBlock from '@/components/ReservationBlock'
import MapBlock from '@/components/MapBlock'

export default function Home() {
  return (
    <>
      <Hero />
      <StorySections />
      <TodayOpenStatus />
      <MoodMap />
      <MenuPreview />
      <Gallery />
      <ReservationBlock />
      <MapBlock />
    </>
  )
}
