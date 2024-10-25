'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function EmailReveal() {
  const [isRevealed, setIsRevealed] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [scratchPercentage, setScratchPercentage] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = '#CCCCCC'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    let isDrawing = false
    let lastX = 0
    let lastY = 0

    const draw = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing) return
      
      const rect = canvas.getBoundingClientRect()
      const x = ('touches' in e ? e.touches[0].clientX : e.clientX) - rect.left
      const y = ('touches' in e ? e.touches[0].clientY : e.clientY) - rect.top

      ctx.globalCompositeOperation = 'destination-out'
      ctx.beginPath()
      ctx.moveTo(lastX, lastY)
      ctx.lineTo(x, y)
      ctx.lineWidth = 40
      ctx.lineCap = 'round'
      ctx.stroke()

      lastX = x
      lastY = y

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const pixelsScratched = imageData.data.filter((_, i) => i % 4 === 3 && imageData.data[i] === 0).length
      const totalPixels = canvas.width * canvas.height
      const newScratchPercentage = (pixelsScratched / totalPixels) * 100

      setScratchPercentage(newScratchPercentage)

      if (newScratchPercentage > 60 && !isRevealed) {
        setIsRevealed(true)
      }
    }

    canvas.addEventListener('mousedown', (e) => {
      isDrawing = true
      const rect = canvas.getBoundingClientRect()
      lastX = e.clientX - rect.left
      lastY = e.clientY - rect.top
    })
    canvas.addEventListener('mousemove', draw)
    canvas.addEventListener('mouseup', () => isDrawing = false)
    canvas.addEventListener('mouseout', () => isDrawing = false)

    canvas.addEventListener('touchstart', (e) => {
      isDrawing = true
      const rect = canvas.getBoundingClientRect()
      lastX = e.touches[0].clientX - rect.left
      lastY = e.touches[0].clientY - rect.top
    })
    canvas.addEventListener('touchmove', draw)
    canvas.addEventListener('touchend', () => isDrawing = false)

    return () => {
      canvas.removeEventListener('mousedown', () => {})
      canvas.removeEventListener('mousemove', draw)
      canvas.removeEventListener('mouseup', () => {})
      canvas.removeEventListener('mouseout', () => {})
      canvas.removeEventListener('touchstart', () => {})
      canvas.removeEventListener('touchmove', draw)
      canvas.removeEventListener('touchend', () => {})
    }
  }, [isRevealed])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-lg shadow-lg text-center"
      >
        <h2 className="text-2xl font-bold mb-4 text-white-800">Ready to start your project?</h2>
        <p className="mb-6 text-white-600">Scratch below to reveal my email address!</p>
        <div className="relative w-72 h-32 mx-auto mb-4">
          <div className="absolute inset-0 flex items-center justify-center bg-grey-800 text-white font-bold text-lg rounded">
            {isRevealed ? 'hemantsharmahare@gmail.com' : 'Keep scratching!'}
          </div>
          <canvas
            ref={canvasRef}
            width={300}
            height={128}
            className="absolute inset-0 cursor-pointer rounded"
          />
        </div>
        <p className="text-sm text-white-500 mb-4">
          {scratchPercentage < 60
            ? `${scratchPercentage.toFixed(0)}% scratched`
            : 'Email revealed!'}
        </p>
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-white-700 mb-4">
              Great! You can now send me an email to discuss your project.
            </p>
            <motion.a
              href="mailto:hemantsharmahare@gmail.com"
              className="inline-block bg-green-800 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Email Now
            </motion.a>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}