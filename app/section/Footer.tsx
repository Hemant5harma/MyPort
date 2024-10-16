// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="https://www.linkedin.com/in/hemant5harma" className="text-gray-400 hover:text-white"  target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href='https://www.github.com/hemant5harma' className="text-gray-400 hover:text-white"  target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    )
  }