'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import ResumeSection from './Resume';

const TypingHeader: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Welcome to My Portfolio';

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <header className="w-full py-1 px-4 mt-6"> {/* Adjusted padding and margin */}
      <div className="h-10 bg-transparent rounded-lg flex items-center justify-center"> {/* Adjusted height and background color */}
        <h1 className="text-lg font-semibold text-white"> {/* Reduced text size */}
          {text}
          <span className="animate-blink">|</span>
        </h1>
      </div>
    </header>
  );
};

const useSSRMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animation = useAnimation();
  const isMobile = useSSRMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (isMobile) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    animation.start({
      x: mousePosition.x - 400,
      y: mousePosition.y - 400,
      transition: { type: 'spring', damping: 30, stiffness: 200 },
    });
  }, [mousePosition, animation, isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity"
      animate={animation}
    >
      <div className="absolute left-0 top-0 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-blue-400/20 to-blue-500/20 blur-3xl" />
    </motion.div>
  );
};

const ResumeComponent = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      className="fixed inset-0 bg-gray-900 z-50 overflow-y-auto"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 bg-white text-gray-900 p-2 rounded-full hover:bg-opacity-90 transition-colors"
        aria-label="Close resume"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <ResumeSection />
    </motion.div>
  );
};

export default function HeroWithTypingHeader() {
  const [showResume, setShowResume] = useState(false);
  const isMobile = useSSRMediaQuery('(max-width: 768px)');

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <TypingHeader />
      <section className="flex-grow flex items-center justify-center overflow-hidden relative">
        <CursorEffect />
        <div className="relative z-40 text-center px-4 sm:px-6 lg:px-8">
          <motion.img
            src='/images/memoji-computer.png'
            alt="Hemant Sharma"
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full border-2 border-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="inline-flex items-center bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            <span className="text-xs sm:text-sm">Available for Freelance Projects</span>
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I Build Scalable Systems and Blockchain Solutions
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            As a DevOps Engineer with expertise in web development, blockchain, and cloud computing, I focus on delivering scalable and secure solutions to optimize operational efficiency. Let&apos;s collaborate on building impactful projects.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.a
              href="#portfolio"
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors w-full sm:w-auto"
              whileHover={isMobile ? {} : { scale: 1.05 }}
              whileTap={isMobile ? {} : { scale: 0.95 }}
            >
              Explore My Work ↓
            </motion.a>
            <motion.button
              className="bg-transparent border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors w-full sm:w-auto"
              whileHover={isMobile ? {} : { scale: 1.05 }}
              whileTap={isMobile ? {} : { scale: 0.95 }}
              onClick={() => setShowResume(true)}
            >
              View Resume
            </motion.button>
          </motion.div>
        </div>
        <AnimatePresence>
          {showResume && <ResumeComponent onClose={() => setShowResume(false)} />}
        </AnimatePresence>
      </section>
    </div>
  );
}
