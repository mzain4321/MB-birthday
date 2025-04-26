"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';

export default function Page() {
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleGiftClick = () => {
    setIsGiftOpen(true);
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 5000);
  };

  const balloonColors = ['🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈'];

  return (
    <div className="min-h-screen bg-gradient-to-b bg-[#004c94] flex flex-col items-center justify-center overflow-hidden relative">
      <Head>
        <title>Happy Birthday Monkey Baja!</title>
      </Head>

      {showFireworks && (
        <>
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={500}
          />
          <div className="fixed inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 5
                }}
              >
                ✨
              </motion.div>
            ))}
          </div>
        </>
      )}

      <motion.h1 
        className="text-5xl md:text-6xl font-bold text-purple-300 mb-12 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Happy Birthday Monkey Baja! 🐒🎉
      </motion.h1>

      {!isGiftOpen && (
        <motion.div
          className="relative cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={handleGiftClick}
        >
          <div className="w-40 h-32 bg-blue-500 rounded-md shadow-lg">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 rounded-full"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-16 bg-blue-400 rounded-full"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
            Click Me!
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {isGiftOpen && (
          <>
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
              {balloonColors.map((color, i) => (
                <motion.div
                  key={i}
                  className="absolute text-4xl"
                  style={{
                    left: `${10 + (i * 10)}%`,
                    bottom: '-50px'
                  }}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ 
                    y: [-50, -windowSize.height],
                    opacity: [0, 1, 0.8, 0],
                    x: [0, Math.random() * 100 - 50]
                  }}
                  transition={{
                    duration: 8,
                    delay: i * 0.5,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  {color}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col items-center z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src="/cake.png"
                alt="Birthday Flowers"
                className="w-42 h-42 object-contain mb-4"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ 
                  y: { duration: 0.8, repeat: Infinity, repeatType: "reverse" }
                }}
              />

              <div className="bg-[#1b558c] bg-opacity-90 p-8 rounded-lg shadow-xl max-w-md mx-4 text-center border-2 border-purple-300 relative z-10">
                {/* Animated Heading */}
                <motion.h2 
                  className="text-3xl font-bold text-purple-300 mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                >
                  For My Dearest Sister Monkey Baja
                </motion.h2>

                {/* Monkey Image Hover Rotate */}
                <motion.img 
                  src="mainpic.jpg"
                  alt="Monkey"
                  className="w-74 h-78 object-contain mx-auto mb-8"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                />

                {/* Paragraph 1 - Fade In from Left */}
                <motion.p 
                  className="text-xl mb-4 text-white"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  On your special day, I wish you endless joy, laughter that never fades, 
                  and all the happiness in the world! 🎂
                </motion.p>

                {/* Paragraph 2 - Fade In from Right */}
                <motion.p 
                  className="text-xl mb-4 text-blue-200"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  May your year be filled with adventure, love, and plenty of bananas! 🍌
                </motion.p>

                {/* Ending Text - Bounce In */}
                <motion.p 
                  className="text-2xl font-semibold text-[#ffcc00]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1.5 }}
                >
                  Love you more than words can say! 💛🐒💙
                </motion.p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
