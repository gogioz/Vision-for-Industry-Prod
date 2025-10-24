"use client";
import { useRef, useEffect } from "react";

export default function Home() {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play(); // play when visible
          } else {
            video.pause(); // pause when out of view
          }
        });
      },
      { threshold: 0.5 } // triggers when at least 50% visible
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);
  const handlePlayWithSound = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play();
    }
  };

  return (
    <div className="w-screen mt-32 lg:flex lg:justify-center lg:items-center  2xl:mt-36">
      <div className="w-full flex justify-center items-center lg:rounded-xl overflow-hidden ">
        <video
          ref={videoRef}
          className="w-full lg:w-[80%] xl:w-[70%] h-auto lg:rounded-xl"
          loop
          autoPlay
          playsInline
          muted
          onClick={handlePlayWithSound}
        >
          <source src="/Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
