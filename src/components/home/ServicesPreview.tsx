import type { ComponentType } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { services } from '../../data/services'
import { ROUTES } from '../../constants/routes'

const previewServices = services.slice(0, 6)

export default function ServicesPreview() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive dental care for every member of your family"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewServices.map((service, index) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as ComponentType<{
              className?: string
            }>
            const Icon = IconComponent || Icons.Circle

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-dark">{service.title}</h3>
                <p className="mt-2 text-sm text-muted line-clamp-2">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link to={ROUTES.SERVICES}>
            <Button variant="primary" size="md">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
