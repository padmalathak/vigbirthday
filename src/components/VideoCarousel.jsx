import React, { useEffect, useState } from "react";
import { hightlightsSlides } from "../constants";
import { useRef } from "react";

function VideoCarousel() {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });
  const [loadedData, setLoadedData] = useState([]);
  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;
    if (span[videoId]) {
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {},
        onComplete: () => {},
      });
    }
  }, [videoId, startPlay]);

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((slides, i) => {
          return (
            <div key={slides.id} id="slider" className="sm:pr-20 pr-10">
              <div className="video-carousel_container">
                <div className="w-full h-full bg-black overflow-hidden flex-center rounded-3xl">
                  <video
                    id="video"
                    playsInline={true}
                    preload="auto"
                    muted
                    ref={(el) => {
                      videoRef.current[i] = el;
                    }}
                    onPlay={() => {
                      setVideo((prevVide) => ({
                        ...prevVide,
                        isPlaying: true,
                      }));
                    }}
                  >
                    <source src={slides.video} type="video/mp4"></source>
                  </video>
                </div>
                <div className="absolute top-12 left-[5%]">
                  {slides.textLists.map((text, id) => (
                    <p key={id} className="md:text-2xl text-xl font-medium">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="relative flex-center mt-10">
        <div className="py-5 px-7 bg-gray-300 backdrop-blur rounded-full"></div>
      </div>
    </>
  );
}

export default VideoCarousel;
