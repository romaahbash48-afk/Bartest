import { GalleryGrid } from "@/components/GalleryGrid";
import { Hero } from "@/components/Hero";
import { MapBlock } from "@/components/MapBlock";
import { MenuPreview } from "@/components/MenuPreview";
import { MoodMap } from "@/components/MoodMap";
import { ReservationBlock } from "@/components/ReservationBlock";
import { StorySections } from "@/components/StorySections";
import { TodayOpenStatus } from "@/components/TodayOpenStatus";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StorySections />
      <MoodMap />
      <TodayOpenStatus />
      <MenuPreview />
      <GalleryGrid />
      <ReservationBlock />
      <MapBlock />
    </>
  );
}
