import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="absolute top-0 left-0 right-0 z-10">
            <nav className="container mx-auto py-6 px-4">
                <ul className="flex justify-center space-x-6">
                    <li><Link href="#home" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                    <li><Link href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
                    <li><Link href="#about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                    <li><Link href="#resume" className="text-gray-300 hover:text-white transition-colors">Resume</Link></li>
                    <li><Link href="#contact" className="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header