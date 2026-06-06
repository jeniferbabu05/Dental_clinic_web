import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Shield } from 'lucide-react'
import Button from '../ui/Button'
import { clinicInfo } from '../../data/clinicInfo'
import { ROUTES } from '../../constants/routes'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary py-24 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white"
            >
              <Shield className="h-4 w-4" />
              Trusted by 15,000+ patients
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
            >
              {clinicInfo.tagline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-lg leading-relaxed text-white/90"
            >
              {clinicInfo.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to={ROUTES.CONTACT}>
                <Button variant="primary" size="lg" className="bg-accent text-dark hover:bg-accent/90">
                  Book Appointment
                </Button>
              </Link>
              <Link to={ROUTES.SERVICES}>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex items-center justify-center"
          >
            <div className="flex h-72 w-72 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm md:h-96 md:w-96">
              <span className="text-[120px] md:text-[160px]">🦷</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
