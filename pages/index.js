import Head from "next/head";
import Hero from "../components/hero";
import Services from "../components/services";
import Testimonials from "../components/testimonials";
import AboutUs from "../components/aboutUs";
import Contact from "../components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <AboutUs />
      <Contact />
    </>
  );
}
