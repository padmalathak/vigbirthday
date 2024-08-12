import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

function Highlights() {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      delay: 2,
    });
  });
  return (
    <section id="highlights" className="bg-zinc h-full w-screen common-padding">
      <div className="screen-max-width">
        <div className="mb-12 w-full item-end justfiy-between">
          <h1 id="title" className="section-heading">
            Celebrating Vignesh
          </h1>
        </div>
      </div>
      Highlights
    </section>
  );
}

export default Highlights;
