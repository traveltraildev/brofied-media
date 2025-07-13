import { motion } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'

export default function Hero() {
  return (
   <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* Video Background */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
    <img
      src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop"
      alt="Cinematic hero"
      className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite_alternate]"
    />
  </div>

  <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="font-heading text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-2xl"
    >
      Where Visions Become
      <span className="block text-brand-red">Cinematic Reality</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .4, duration: .8 }}
      className="mt-6 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
    >
      Bold video production & brand storytelling for music, events, and industry leaders.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: .9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: .8, duration: .6 }}
      className="mt-10"
    >
      <a href="#portfolio" className="btn-primary">
        <FiPlay className="mr-2" />
        Watch our reel
      </a>
    </motion.div>
  </div>

  {/* Scroll hint */}
  <motion.div
    className="absolute bottom-8 left-1/2 -translate-x-1/2"
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
  >
    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
      <div className="w-1 h-3 bg-white rounded-full" />
    </div>
  </motion.div>
</section>
  )
}