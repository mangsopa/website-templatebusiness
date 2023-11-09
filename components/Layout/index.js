"use client";
import Header from "../Header";
import Footer from "../Footer";
import About from "../About";
import Services from "../Service";
import Faq from "../Faq";
import Contact from "../Contact";
import Home from "../Home";

export default function Layout() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
