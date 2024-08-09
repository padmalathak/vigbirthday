import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Hero() {
  useGSAP(() => {}, []);
  return (
    <section className="w-full nav-height bg-black relaive">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title">Happy Birthday Vignesh</p>
      </div>
    </section>
  );
}

export default Hero;
