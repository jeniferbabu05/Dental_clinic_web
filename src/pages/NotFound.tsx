import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import { clinicInfo } from '../data/clinicInfo'
import { ROUTES } from '../constants/routes'

export default function NotFound() {
  useEffect(() => {
    document.title = clinicInfo.pageTitles.notFound
  }, [])

  return (
    <section className="flex min-h-[70vh] items-center justify-center py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-lg px-4 text-center"
      >
        <p className="text-8xl font-bold text-primary/20">404</p>
        <h1 className="mt-4 font-heading text-3xl font-bold text-dark">Page Not Found</h1>
        <p className="mt-4 text-muted">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to={ROUTES.HOME} className="mt-8 inline-block">
          <Button variant="primary" size="lg">
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
