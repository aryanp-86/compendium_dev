import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import HeroSection from "./Components/HeroSection";
import Learning from "./Components/Learning";
import Strategies from "./Components/Strategies";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Gallery />
      <Banner />
      <Learning />
      <Strategies />
      <Footer />
    </>
  );
}
