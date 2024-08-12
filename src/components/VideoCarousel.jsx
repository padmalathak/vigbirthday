import React from "react";
import { hightlightsSlides } from "../constants";

function VideoCarousel() {
  return (
    <div className="flex items-center">
      {hightlightsSlides.map((slides, i) => {
        return (
          <div key={slides.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full bg-black overflow-hidden flex-center rounded-3xl">
                <video id="video" playsInline={true} preload="auto" muted>
                  <source src={slides.video} type="video/mp4"></source>
                </video>
              </div>
              <div className="absolute top-12 left-[5%]">
                {slides.textLists.map((text, id) => (
                  <p key={id}>{text}</p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VideoCarousel;
