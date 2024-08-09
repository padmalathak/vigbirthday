import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";
function Hero() {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrc = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useGSAP(() => {
    gsap.to("#Hero", {
      opacity: 1,
      delay: 1.5,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);

    return () => {
      window.removeEventListener("resize", handleVideoSrc);
    };
  }, []);
  return (
    <section className="w-full nav-height bg-black relaive">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="Hero" className="hero-title max-sm:text-base ">
          Happy Birthday Vignesh !!!
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4"></source>
          </video>
        </div>
      </div>
    </section>
  );
}

export default Hero;
