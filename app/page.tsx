// Make sure the path is correct; if not, adjust as needed:
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DestinationSection from "./components/DestinationSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DestinationSection />
      <Footer />
    </div>
  );
}
