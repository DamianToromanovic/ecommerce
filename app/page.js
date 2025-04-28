import Hero from "./components/Hero.js";
import TopCategories from "./components/TopCategories.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import ProductCarousel from "./components/ProductCarousel.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopCategories />
      <ProductCarousel />
      <Footer />
    </>
  );
}
