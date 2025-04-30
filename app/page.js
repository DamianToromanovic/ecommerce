import Hero from "./components/Hero.js";
import TopCategories from "./components/TopCategories.js";
import Footer from "./components/Footer.js";
import ProductCarousel from "./components/ProductCarousel.js";

export default function Home() {
  return (
    <>
      <Hero />
      <TopCategories />
      <ProductCarousel />
      <Footer />
    </>
  );
}
