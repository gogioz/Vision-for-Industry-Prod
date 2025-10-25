"use client";
import { useRef, useEffect } from "react";

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Autoplay with sound may be blocked by browsers — 
    // so start muted, and unmute on click or interaction.
    video.play().catch(() => {
      console.log("Autoplay with sound blocked, waiting for user interaction.");
    });
  }, []);

  const handlePlayWithSound = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play();
    }
  };

  return (
    <div className="w-screen mt-32 lg:flex lg:justify-center lg:items-center 2xl:mt-36">
      <div className="w-full flex justify-center items-center lg:rounded-xl overflow-hidden">
        <video
          ref={videoRef}
          className="w-full lg:w-[80%] xl:w-[60%] h-auto lg:rounded-xl"
          loop
          autoPlay
          playsInline
          muted // starts muted to allow autoplay; unmuted on click
          onClick={handlePlayWithSound}
        >
          <source src="/Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
