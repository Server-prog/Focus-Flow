import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { Howl } from 'howler';
import { toast } from 'react-toastify';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(1 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [hasPlayedSound, setHasPlayedSound] = useState(false);

  const sound = new Howl({
    src: ['public/sounds/som2.mp3'],
    volume: 1.0,
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    if (seconds === 0 && !hasPlayedSound) {
      sound.play();
      toast.info('Rest time is over !', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'dark',
      });
      setHasPlayedSound(true);
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds, hasPlayedSound]);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="text-center space-y-4">
      <div className=''>
        <h1 className="text-4xl font-bold">Pomodoro</h1>
        <hr className='mt-3 border border-black dark:border-white' />
      </div>
      <h2 className="text-2xl font-bold">Resting</h2>
      <div className="text-4xl font-mochiy">{formatTime(seconds)}</div>
      <button
        onClick={() => {
          setIsRunning(!isRunning);
          if (seconds === 0) {
            setSeconds(5 * 60);
            setHasPlayedSound(false);
          }
        }}
        className=" flex ml-[100px] text-black dark:text-white px-4 py-2 rounded gap-2"
      >
        {isRunning ? (
          <>
            <Pause size={20} />
          </>
        ) : (
          <>
            <Play size={20} />
          </>
        )}
      </button>
    </div>
  );
};

export default Timer;
