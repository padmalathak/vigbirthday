import React from "react";
import { hightlightsSlides } from "../constants";

function VideoCarousel() {
  return (
    <div className="flex items-center">
      {hightlightsSlides.map((slides, i) => {
        return (
          <div key={slides.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full bg-black overflow-hidden flex-center rounded-3xl"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VideoCarousel;
