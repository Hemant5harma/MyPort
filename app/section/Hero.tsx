"use client"

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'


const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const animation = useAnimation()

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  useEffect(() => {
    animation.start({
      x: mousePosition.x - 400,
      y: mousePosition.y - 400,
      transition: { type: 'spring', damping: 30, stiffness: 200 }
    })
  }, [mousePosition, animation])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity"
      animate={animation}
    >
      <div className="absolute left-0 top-0 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 blur-3xl" />
    </motion.div>
  )
}

export default function EnhancedCursorResponsiveHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white">
      <CursorEffect />
      <div className="relative z-40 text-center px-4">
        <motion.img
          src='/images/memoji-computer.png'
          alt="Avatar"
          className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="inline-flex items-center bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
          <span className="text-sm">Available for new projects</span>
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Building Exceptional User Experiences
        </motion.h1>
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I specialize in transforming designs into functional, high-performing web applications. Let&apos;s discuss your next project.
        </motion.p>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.button
            className="bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work ↓
          </motion.button>
          <motion.button
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            👋 Let&apos;s Connect
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}