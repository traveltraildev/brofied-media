import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiFilter, FiX, FiPlay } from 'react-icons/fi'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'events', name: 'Events' },
    { id: 'music', name: 'Music' },
    { id: 'animation', name: 'Animation' },
  ]

  const projects = [
    {
      id: 1,
      title: 'Product Launch',
      category: 'commercial',
      client: 'Manufacturing Client',
      // YouTube placeholder
      videoId: '1xoLd4tyxRQ',
      thumb: 'https://picsum.photos/536/354',
    },
    {
      id: 2,
      title: 'Music Video',
      category: 'music',
      client: 'Independent Artist',
      videoId: '1xoLd4tyxRQ',
      thumb: 'https://picsum.photos/536/354',
    },
    {
      id: 3,
      title: 'Corporate Event',
      category: 'events',
      client: 'Tech Company',
      videoId: '1xoLd4tyxRQ',
      thumb: 'https://picsum.photos/536/354',
    },
    {
      id: 4,
      title: 'Brand Animation',
      category: 'animation',
      client: 'Startup Company',
      videoId: '1xoLd4tyxRQ',
      thumb: 'https://picsum.photos/536/354',
    },
    {
      id: 5,
      title: 'Wedding Film',
      category: 'events',
      client: 'Private Client',
      videoId: '1xoLd4tyxRQ',
      thumb: 'https://picsum.photos/536/354',
    },
    {
      id: 6,
      title: 'Product Commercial',
      category: 'commercial',
      client: 'Consumer Brand',
      videoId: '1xoLd4tyxRQ',
      thumb: 'https://picsum.photos/536/354',
    },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-brand-black">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl md:text-6xl mb-4 cinematic-border inline-block pb-4">
            Projects That Speak Frames
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our portfolio showcases the cinematic excellence we bring to every
            project.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2 text-sm uppercase tracking-widest rounded-full transition-all duration-300 ${
                activeFilter === f.id
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/40'
                  : 'bg-brand-gray-800 text-gray-300 hover:bg-brand-gray-700'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-video overflow-hidden rounded-lg border border-brand-gray-800 hover:border-brand-red transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(p)}
            >
              {/* Thumbnail */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${p.thumb})` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Info */}
              <div className="absolute bottom-0 left-0 p-6 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-heading text-2xl">{p.title}</h3>
                <p className="text-brand-red-light text-sm mt-1">{p.client}</p>
              </div>

              {/* Play icon on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <FiPlay size={60} className="text-white drop-shadow-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative bg-brand-gray-900 max-w-4xl w-full rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                className="absolute top-4 right-4 text-white z-20"
                onClick={() => setSelectedProject(null)}
              >
                <FiX size={28} />
              </button>

              {/* Video */}
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedProject.videoId}?autoplay=1&rel=0`}
                  title={selectedProject.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Details */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-3xl">{selectedProject.title}</h3>
                    <p className="text-brand-red-light mt-1">{selectedProject.client}</p>
                  </div>
                  <span className="bg-brand-gray-800 px-3 py-1 rounded-full text-sm">
                    {filters.find((f) => f.id === selectedProject.category)?.name}
                  </span>
                </div>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}