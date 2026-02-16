import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySections from "@/components/StorySections";
import MoodMap from "@/components/MoodMap";
import TodayOpenStatus from "@/components/TodayOpenStatus";
import MenuPreview from "@/components/MenuPreview";
import Gallery from "@/components/Gallery";
import ReservationBlock from "@/components/ReservationBlock";
import MapBlock from "@/components/MapBlock";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StorySections />
        <MoodMap />
        <TodayOpenStatus />
        <MenuPreview />
        <Gallery />
        <ReservationBlock />
        <MapBlock />
      </main>
      <Footer />
    </>
  );
}
