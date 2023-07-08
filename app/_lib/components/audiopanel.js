'use client';

import { useState, useRef, useEffect } from "react";

import { BsFillPauseCircleFill, BsFillPlayCircleFill } from 'react-icons/bs';

export default function AudioPanel () {
    const audioRef = useRef();
    const [playing, setPlaying] = useState(false);
  
    let audio_name = "Sherali Jorayev Ozbegim";
  
    useEffect(() => {
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }, [playing]);
  
    return (
      <div className='w-fit h-fit flex justify-end left-10 transition-all'>
          <div className={`flex items-center space-x-3 w-fit rounded-full py-1 px-2 ${playing ? "pr-1" : "pr-4"} relative text-amber-700 text-lg text-right bg-amber-100`}>
            {playing ? (
              <>
                <div className='flex space-x-1 items-center rounded-full'>
                  <BsFillPauseCircleFill onClick={() => setPlaying(false)} className='w-5 h-5' />
                  {/* <BiSolidSkipNextCircle className='w-6 h-6' /> */}
                </div>
                <p className='text-sm xl:text-base'>{audio_name}</p>
                <div className="playing">
                  <span className="playing__bar playing__bar1"></span>
                  <span className="playing__bar playing__bar2"></span>
                  <span className="playing__bar playing__bar3"></span>
                </div>
              </>
            ) : (
              <>
                <div className='flex space-x-1 items-center rounded-full'>
                  <BsFillPlayCircleFill onClick={() => setPlaying(true)} className='w-5 h-5' />
                </div>
                <p className='text-lg'>Play music</p>
              </>
            )}
            <audio ref={audioRef} src='/audio.mp3' preload="none" />
          </div>
      </div>
    );
  }