import { motion } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <img 
          src="https://picsum.photos/536/354" 
          alt="Hero Placeholder" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center glass py-16 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(90deg, #ff2a2a, #ff6b6b)'}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="block">WHERE VISIONS BECOME</span>
            <span className="block mt-2">CINEMATIC REALITY</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Bold video production & brand storytelling for music, events, and industry leaders.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a 
              href="#portfolio" 
              className="btn-primary inline-flex items-center group"
            >
              <FiPlay className="mr-2 group-hover:animate-pulse" />
              WATCH OUR REEL
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scrolling Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-2">
          <motion.div 
            className="w-2 h-2 bg-white rounded-full"
            animate={{ y: [0, 8] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  )
}