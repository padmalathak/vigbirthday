import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

function Highlights() {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  });
  return (
    <section id="highlights" className="bg-zinc h-full w-screen common-padding">
      <div className="screen-max-width">
        <div className="mb-4 w-full md:flex flex-end justify-between">
          <h1 id="title" className="section-heading">
            Celebrating Vignesh
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch Cute Vignesh
              <img src={watchImg} alt="watch" className="ml-2"></img>
            </p>
            <p className="link">
              Watch Leelaigal
              <img src={rightImg} alt="right" className="ml-2"></img>
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
}

export default Highlights;
