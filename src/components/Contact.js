import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiInstagram } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In a real app, you would do:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // })
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-dark-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 cinematic-border inline-block pb-4">
            READY FOR YOUR CLOSE-UP?
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Let&apos;s create your industry-defining story together
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl mb-6">CONTACT INFORMATION</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-red-500 mt-1 mr-4">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Our Studio</h4>
                    <p className="text-gray-300">1014, Sector 62, Noida, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-red-500 mt-1 mr-4">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <p className="text-gray-300">+91 123 456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-red-500 mt-1 mr-4">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <p className="text-gray-300">studio@thebrofiedmedia.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-red-500 mt-1 mr-4">
                    <FiInstagram size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Social</h4>
                    <p className="text-gray-300">
                      <a 
                        href="https://www.instagram.com/thebrofied.media/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-red-500 transition-colors"
                      >
                        @thebrofied.media
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl mb-6">WORKING HOURS</h3>
              <div className="bg-black/50 p-6 border border-gray-800">
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-3">
                  <span>Saturday - Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-black/50 p-8 border border-gray-800">
              <h3 className="text-2xl mb-6">SEND US A MESSAGE</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/30 border border-green-500 text-green-300">
                  Thank you! Your message has been sent. We&apos;ll contact you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/30 border border-red-500 text-red-300">
                  Something went wrong. Please try again later.
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-300">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-red-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-300">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-red-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block mb-2 text-gray-300">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-red-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block mb-2 text-gray-300">Project Type *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-red-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select Project Type</option>
                    <option value="commercial">Commercial Film</option>
                    <option value="event">Event Coverage</option>
                    <option value="music">Music Video</option>
                    <option value="animation">Animation/VFX</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-gray-300">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-red-500 focus:outline-none transition-colors"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 bg-red-500 hover:bg-red-600 transition-colors text-lg uppercase tracking-wider ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}