'use client';
import { PauseCircleIcon, PlayCircleIcon } from 'lucide-react';
import { FunctionComponent, VideoHTMLAttributes, useRef, useState } from 'react';

type VideoProps = VideoHTMLAttributes<HTMLVideoElement>;

const Video: FunctionComponent<VideoProps> = ({
  src,
  width,
  height,
  playsInline,
  autoPlay,
  muted,
  loop,
  poster,
  className,
}) => {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(true);

  const playVideo = () => {
    if (vidRef.current) {
      vidRef.current.play();
    }
    setVideoPlaying(true);
  };

  const pauseVideo = () => {
    if (vidRef.current) {
      vidRef.current.pause();
    }
    setVideoPlaying(false);
  };

  return (
    <>
      <div className="video">
        <video
          ref={vidRef}
          preload="auto"
          width={width}
          height={height}
          playsInline={playsInline}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          poster={poster}
          className={className}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <button
        className="absolute bottom-14 right-8 z-10 hidden cursor-pointer border-none bg-transparent text-white outline-none md:block"
        onClick={videoPlaying ? pauseVideo : playVideo}
      >
        <span>
          {videoPlaying ? (
            <PauseCircleIcon height={40} width={40} className="text-[42px]" />
          ) : (
            <PlayCircleIcon height={40} width={40} className="text-[42px]" />
          )}
        </span>
        <span className="sr-only">{`Video ${videoPlaying ? 'Paused' : 'Playing'}. Click to ${
          videoPlaying ? 'Play' : 'Pause'
        }`}</span>
      </button>
    </>
  );
};

export default Video;
