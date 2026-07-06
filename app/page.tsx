import Hero from "@/components/Hero";
import StoryStrip from "@/components/StoryStrip";
import Gallery from "@/components/Gallery";
import Rooms from "@/components/Rooms";
import Packages from "@/components/Packages";
import Amenities from "@/components/Amenities";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

export default function Home() {
  return (
    <main>
      <Hero />
      <StoryStrip />
      <Gallery />
      <Rooms />
      <Packages />
      <Amenities />
      <Footer />
      <Cart />
    </main>
  );
}
