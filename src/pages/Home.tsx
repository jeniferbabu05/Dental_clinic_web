import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroSection from '../components/home/HeroSection'
import StatsStrip from '../components/home/StatsStrip'
import ServicesPreview from '../components/home/ServicesPreview'
import WhyChooseUs from '../components/home/WhyChooseUs'
import TestimonialsSection from '../components/home/TestimonialsSection'
import Button from '../components/ui/Button'
import { clinicInfo } from '../data/clinicInfo'
import { ROUTES } from '../constants/routes'

export default function Home() {
  useEffect(() => {
    document.title = clinicInfo.pageTitles.home
  }, [])

  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ServicesPreview />
      <WhyChooseUs />
      <TestimonialsSection />
      <section className="bg-gradient-to-r from-primary to-secondary py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              {clinicInfo.appointmentCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              {clinicInfo.appointmentCta.subtitle}
            </p>
            <Link to={ROUTES.CONTACT} className="mt-8 inline-block">
              <Button variant="primary" size="lg" className="bg-accent text-dark hover:bg-accent/90">
                {clinicInfo.appointmentCta.buttonText}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
