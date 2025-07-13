import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiFilter, FiX } from 'react-icons/fi'

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
      image: '/images/portfolio1.jpg'
    },
    { 
      id: 2, 
      title: 'Music Video', 
      category: 'music', 
      client: 'Independent Artist',
      image: '/images/portfolio2.jpg'
    },
    { 
      id: 3, 
      title: 'Corporate Event', 
      category: 'events', 
      client: 'Tech Company',
      image: '/images/portfolio3.jpg'
    },
    { 
      id: 4, 
      title: 'Brand Animation', 
      category: 'animation', 
      client: 'Startup Company',
      image: '/images/portfolio4.jpg'
    },
    { 
      id: 5, 
      title: 'Wedding Film', 
      category: 'events', 
      client: 'Private Client',
      image: '/images/portfolio5.jpg'
    },
    { 
      id: 6, 
      title: 'Product Commercial', 
      category: 'commercial', 
      client: 'Consumer Brand',
      image: '/images/portfolio6.jpg'
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 cinematic-border inline-block pb-4">
            PROJECTS THAT SPEAK FRAMES
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Our portfolio showcases the cinematic excellence we bring to every project
          </p>
        </motion.div>
        
        {/* Portfolio Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 text-lg uppercase tracking-wider transition-colors ${
                activeFilter === filter.id
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video bg-gray-800 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
              </div>
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                <p className="text-red-500">{project.client}</p>
                <div className="mt-4 flex items-center">
                  <span className="text-sm bg-gray-800 px-3 py-1 rounded-full">
                    {filters.find(f => f.id === project.category)?.name}
                  </span>
                  <span className="ml-auto text-sm flex items-center">
                    <FiFilter className="mr-1" /> View Details
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative bg-gray-900 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button 
              className="absolute top-4 right-4 text-white text-2xl z-10"
              onClick={() => setSelectedProject(null)}
            >
              <FiX />
            </button>
            <div className="aspect-video bg-gray-800">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedProject.image})` }}
              ></div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                  <p className="text-red-500 text-lg">{selectedProject.client}</p>
                </div>
                <span className="bg-gray-800 px-4 py-1 rounded-full text-sm">
                  {filters.find(f => f.id === selectedProject.category)?.name}
                </span>
              </div>
              <p className="text-gray-300 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-red-500 hover:bg-red-600 transition-colors">
                  View Full Project
                </button>
                <button className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}