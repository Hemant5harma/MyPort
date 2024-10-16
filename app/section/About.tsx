'use client'

import { motion } from 'framer-motion'



export default function AboutMe() {
  const skills = [
    { name: 'React', image: "/images/React_(web_framework)-Logo.wine.svg" },

    { name: 'TypeScript', image: "/images/ts-logo-256.svg" },
    { name: 'AWS', image: "/images/Amazon_Web_Services-Logo.wine.svg" },
    { name: 'Python', image: "/images/Python_(programming_language)-Logo.wine.svg" },

    { name: 'Git', image: "/images/GitHub-Logo.wine.svg" },

    { name: 'Docker', image: "/images/Docker_(software)-Logo.wine.svg" },
    { name: 'Kubernetes', image: "/images/Kubernetes-Logo.wine.svg" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">A Glimpse Into My World</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Certification</h3>
            <div className="flex items-center space-x-4">
              <img src="/images/red-hat.png" alt="Book Cover" className="w-36 h-30 object-cover rounded-lg shadow-md" />
              <p className="text-lg text-gray-300">Red Hat Certified System Administrator (RHCSA)</p>
            </div>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">My Toolbox</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-24 h-24 mb-1">
                    <img src={skill.image} alt={`${skill.name}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-300">{ }</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">Beyond the Code</h3>
          <div className="flex flex-wrap gap-3">
            {['Travel', 'Photography', 'Cooking', 'Hiking', 'Music'].map((interest, index) => (
              <motion.span
                key={index}
                className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}