import { motion } from 'framer-motion'
import { FiFilm, FiCalendar, FiMusic, FiMic } from 'react-icons/fi'

export default function Services() {
  const services = [
    {
      icon: <FiFilm size={48} />,
      title: 'Commercial Filmmaking',
      description: 'From concept to screen - ads that convert and engage your audience.'
    },
    {
      icon: <FiCalendar size={48} />,
      title: 'Event Documentary',
      description: 'Immortalize moments with cinematic coverage that tells your event\'s story.'
    },
    {
      icon: <FiMusic size={48} />,
      title: 'Music Visuals',
      description: 'Rhythm-driven narratives for artists that amplify your musical message.'
    },
    {
      icon: <FiMic size={48} />,
      title: 'Brand Transformation',
      description: 'Elevate your identity through VFX & animation that captivates.'
    }
  ]

  return (
    <section id="services" className="py-20 bg-dark-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 cinematic-border inline-block pb-4">
            YOUR STORY, OUR CRAFT
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            We transform your vision into cinematic masterpieces that captivate audiences
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 p-8 border border-gray-800 hover:border-red-500 transition-all duration-300 group"
            >
              <div className="text-red-500 mb-6 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl mb-3 group-hover:text-red-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}