"use client";

import { useRef, useEffect } from "react";

let currentlyPlayingAudio: HTMLAudioElement | null = null;

const AudioPlayer = ({ src }: { src: string }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => {
      if (currentlyPlayingAudio && currentlyPlayingAudio !== audio) {
        currentlyPlayingAudio.pause();
        currentlyPlayingAudio.currentTime = 0;
      }
      currentlyPlayingAudio = audio;
    };

    audio.addEventListener("play", handlePlay);
    return () => {
      audio.removeEventListener("play", handlePlay);
    };
  }, []);

  return <audio ref={audioRef} controls className="w-full mt-2" src={src} />;
};

export default AudioPlayer;