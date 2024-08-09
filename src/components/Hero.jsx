import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
function Hero() {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const [uiProps, setUIProps] = useState({
    showConfetti: false,
  });

  const handleVideoSrc = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  const handleBtnClick = () => {
    if (uiProps.showConfetti) {
      setUIProps({
        showConfetti: false,
      });
    } else {
      setUIProps({
        showConfetti: true,
      });
    }
  };
  useGSAP(() => {
    gsap.to("#Hero", {
      opacity: 1,
      delay: 2,
    });

    gsap.to("#cta", {
      opacity: 1,
      delay: 2,
      y: -50,
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
      {uiProps.showConfetti && <Confetti />}
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
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#" className="btn">
          <button onClick={handleBtnClick}>Celebrate</button>
        </a>
        <p className="font-normal text-xl">
          You are the best in the whole wide world
        </p>
      </div>
    </section>
  );
}

export default Hero;
