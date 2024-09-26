// components/AboutMe.js
'use client'
import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">A Glimpse Into My World</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">My Reads</h3>
            <img src="/book-cover.jpg" alt="Book Cover" className="w-32 h-48 object-cover rounded-lg mb-4" />
            <p>Atomic Habits by James Clear</p>
          </motion.div>
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">My Toolbox</h3>
            <div className="grid grid-cols-3 gap-4">
              {/* Add tool icons here */}
            </div>
          </motion.div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Beyond the Code</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Travel</span>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Photography</span>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Cooking</span>
            {/* Add more interests */}
          </div>
        </div>
      </div>
    </section>
  )
}