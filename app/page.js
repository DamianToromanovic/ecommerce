import Hero from "./components/Hero.js";
import TopCategories from "./components/TopCategories.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopCategories />
      <Footer />
    </>
  );
}
