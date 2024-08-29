import {
  CustomerReviews,
  Hero,
  Footer,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
import Nav from "./Components/Nav.jsx";
import GoTop from "./Components/GoTop.jsx";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.querySelector(".goTopBtn");
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const ratio = Math.min(scrollY / (viewportHeight * 0.1), 1); // Calculate ratio based on scroll position

      // Update btn background color
      btn.style.opacity = ratio;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className="relative sm:padding-a md:px-0 lg:padding-a">
        <Nav />
        <section className="goTopBtn opacity-0">
          <GoTop />
        </section>
        <section className="sm:padding-x">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="padding-">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
      </main>
      <section className="bg-black padding-a padding-t pb-8">
        <Footer />
      </section>
    </>
  );
}
