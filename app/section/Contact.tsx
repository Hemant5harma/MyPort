'use client'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-800 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Let&apos;s create something amazing together</h2>
        <motion.button 
          className="bg-green-500 text-white px-8 py-3 rounded-full text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.button>
      </div>
    </section>
  )
}