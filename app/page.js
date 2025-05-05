import Hero from "./components/Hero.js";
import TopCategories from "./components/TopCategories.js";
import Footer from "./components/Footer.js";
import ProductCarousel from "./components/ProductCarousel.js";
import ServiceSection from "./components/ServiceSection.js";
import WelkommenBanner from "./components/WillkommenBanner.js";

export default function Home() {
  return (
    <>
      <Hero />
      <TopCategories />
      <ServiceSection />
      <ProductCarousel />
      <WelkommenBanner />
      <Footer />
    </>
  );
}
