import React, { useEffect, useState } from 'react';

const Landing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(3600);
  const [flash, setFlash] = useState(false);
  const [whiteFlash, setWhiteFlash] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) {
          if (prev % 60 === 0) {
            setFlash(true);
            setTimeout(() => setFlash(false), 500);
          }
          return prev - 1;
        }
        return 0;
      });
    }, 1000);

    const audio = new Audio('/path-to-ticking-sound.mp3');
    audio.loop = true;
    audio.play().catch((error) => console.error('Audio playback failed:', error));

    return () => {
      clearInterval(timer);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWhiteFlash(true);
    setTimeout(() => setWhiteFlash(false), 1000);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between bg-brand-black text-brand-white ${flash ? 'flash-red' : ''} ${whiteFlash ? 'flash-white' : ''}`}>
      <header className="flex justify-between items-center p-6 border-b border-brand-white/20">
        <div className="text-4xl font-extrabold tracking-widest text-brand-red animate-pulse">STNSTR</div>
        <nav className="flex space-x-6 text-lg">
          <a href="#about" className="hover:text-brand-red transition-colors duration-200">About</a>
          <a href="#drops" className="hover:text-brand-red transition-colors duration-200">Drops</a>
          <a href="#contact" className="hover:text-brand-red transition-colors duration-200">Contact</a>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center px-4 py-32 animate-fade-in">
        <h1 className="text-7xl font-extrabold tracking-tight mb-6 text-brand-red">
          Run the Streets, <br /> Own Your Style.
        </h1>
        <p className="text-2xl text-brand-white/80 mb-10 animate-fade-in-delay">
          The most exclusive streetwear. Once it drops, it's gone.
        </p>
        <div className="flex space-x-6">
          <a href="#signup" className="px-8 py-4 bg-brand-red text-brand-black font-bold rounded-lg hover:bg-brand-white transition-all duration-300">
            Sign Up for Updates
          </a>
          <a href="#about" className="px-8 py-4 border border-brand-white font-bold rounded-lg hover:bg-brand-white hover:text-brand-black transition-all duration-300">
            Learn More
          </a>
        </div>
      </section>

      <section className="py-16 text-center bg-brand-red">
        <h2 className="text-5xl font-bold mb-8 text-brand-black">Next Drop In:</h2>
        <div className="text-brand-white text-7xl font-mono tracking-wider animate-pulse">
          {formatTime(timeLeft)}
        </div>
      </section>

      <section id="signup" className="py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Stay in the Loop</h2>
        <p className="text-brand-white/80 mb-8">Sign up to get notified for the next exclusive drop.</p>
        <form className="flex justify-center" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-l-lg bg-brand-white/10 text-brand-white border border-brand-white/20 focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-brand-red text-brand-black font-bold rounded-r-lg hover:bg-brand-white transition-all duration-300"
          >
            Notify Me
          </button>
        </form>
      </section>

      <footer className="py-8 text-center text-sm text-brand-white/60 border-t border-brand-white/20">
        <p>&copy; {new Date().getFullYear()} Stolen Street. All Rights Reserved.</p>
      </footer>

      <style jsx>{`
        .flash-red {
          animation: flash 500ms;
        }
        .flash-white {
          animation: whiteFlash 1s;
        }
        @keyframes flash {
          0% { background-color: #ea384c; }
          100% { background-color: #000000; }
        }
        @keyframes whiteFlash {
          0% {
            background-color: #FFFFFF;
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            background-color: #000000;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Landing;