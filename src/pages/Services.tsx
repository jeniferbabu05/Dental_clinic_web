import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import ServiceCard from '../components/services/ServiceCard'
import { services } from '../data/services'
import { clinicInfo } from '../data/clinicInfo'
import { ROUTES } from '../constants/routes'
import type { ServiceCategory } from '../types/service.types'

const categories: Array<ServiceCategory | 'All'> = [
  'All',
  'General',
  'Cosmetic',
  'Orthodontics',
  'Pediatric',
]

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'All'>('All')

  useEffect(() => {
    document.title = clinicInfo.pageTitles.services
  }, [])

  const filteredServices =
    activeCategory === 'All'
      ? services
      : services.filter((s) => s.category === activeCategory)

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-secondary py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="mb-4 flex items-center gap-2 text-sm text-white/80">
              <Link to={ROUTES.HOME} className="hover:text-white">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Services</span>
            </nav>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">Our Services</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Comprehensive dental solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-muted shadow-md hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  )
}
