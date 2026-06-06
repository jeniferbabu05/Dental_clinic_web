import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'
import MapEmbed from '../components/contact/MapEmbed'
import { clinicInfo } from '../data/clinicInfo'
import { ROUTES } from '../constants/routes'

export default function Contact() {
  useEffect(() => {
    document.title = clinicInfo.pageTitles.contact
  }, [])

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
              <span className="text-white">Contact</span>
            </nav>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">Contact Us</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Book an appointment or reach out with any questions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ContactInfo />
            <ContactForm />
          </div>
          <MapEmbed />
        </div>
      </section>
    </>
  )
}
