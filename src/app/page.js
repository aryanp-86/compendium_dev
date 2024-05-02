"use client";
import { useEffect } from "react";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import HeroSection from "./Components/HeroSection";
import Learning from "./Components/Learning";
import Strategies from "./Components/Strategies";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({ scroller: ".newMain" });
    const tl1 = gsap.timeline();
    tl1
      .fromTo(".nav-link",
        { y: -500, opacity: 0.5 },
        { duration: 0.8, y: 0, opacity: 1 }
      )
      .fromTo(".svg1",
        { z: -500, opacity: 0.1 },
        { duration: 0.8, z: 0, opacity: 1 }
      )
      .fromTo(".svg2",
        { z: -800, opacity: 0 },
        { duration: 0.8, z: 0, opacity: 1 }
      )
      .fromTo(".notification",
        { y: -500, opacity: 0.5 },
        { duration: 0.6, y: 0, opacity: 1 }
      )
      .fromTo(".heading1",
        { y: 500, opacity: 0.5 },
        { duration: 0.7, y: 0, opacity: 1 }
      )
      .fromTo(".paragraph1",
        { y: 500, opacity: 0.5 },
        { duration: 0.7, y: 0, opacity: 1 }
      )
      .fromTo(".button1",
        { opacity: 0 },
        { opacity: 1 }
      )
      .fromTo(
        ".img1",
        { y: -500, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".gallery",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
        }
      )
      .fromTo(
        ".img2",
        { z: -500, opacity: 0.2 },
        {
          z: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".gallery",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
        }
      )
      .fromTo(
        ".img3",
        { y: 500, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".gallery",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
        }
      )
      .fromTo(
        ".svg3",
        { x: -500, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".banner",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
        }
      )
      .fromTo(
        ".banner1",
        { y: -200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".banner",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
        }
      )
      .fromTo(
        ".banner2",
        { y: 75, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".banner",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
        }
      )
      .fromTo(
        ".banner3",
        { z: 500, opacity: 0 },
        {
          z: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".banner",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
        }
      )
      .fromTo(
        ".learning1",
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".learning",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
        }
      )
      .fromTo(
        ".learning2",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".learning",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
        }
      )
      .fromTo(
        ".learning3",
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".learning",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
        }
      )
      .fromTo(
        ".block1",
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".learning",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
        }
      )
      .fromTo(
        ".block2",
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".learning",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
        }
      )
      .fromTo(
        ".block3",
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".learning",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
        }
      )
      .fromTo(
        ".svg4",
        { z: -500, opacity: 0 },
        {
          z: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".strategy",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
        }
      )
      .fromTo(
        ".strategy1",
        { y: -200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".strategy",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
        }
      )
      .fromTo(
        ".strategy2",
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".strategy",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
        }
      )
      .fromTo(
        ".boxl",
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".strategy",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
        }
      )
      .fromTo(
        ".boxc",
        { z: -200, opacity: 0 },
        {
          z: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".strategy",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
        }
      )
      .fromTo(
        ".boxr",
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".strategy",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
        }
      )




  }, [])

  return (
    <div className="prime overflow-x-clip w-full h-full">
      <HeroSection />
      <Gallery />
      <Banner />
      <Learning />
      <Strategies />
      <Footer />
    </div>
  );
}
