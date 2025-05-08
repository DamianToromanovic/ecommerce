import Footer from "./components/Footer";
import ProductCarousel from "./components/ProductCarousel";
import Hero from "./components/Hero";
import ServiceSection from "./components/ServiceSection";
import BrandLogos from "./components/BrandLogos";
import WillkommenBanner from "./components/WillkommenBanner";
import TopCategories from "./components/TopCategories";
export default function Home() {
  return (
    <>
      <main>
       
        <Hero />
        <BrandLogos />
        <TopCategories />
        <ServiceSection />
        <ProductCarousel />
        <WillkommenBanner />
        <Footer></Footer>
      </main>
    </>
  );
}
