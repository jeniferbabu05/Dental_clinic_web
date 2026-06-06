import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import type { Service } from '../../types/service.types'

interface ServiceCardProps {
  service: Service
  index?: number
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const IconComponent = Icons[service.icon as keyof typeof Icons] as ComponentType<{
    className?: string
  }>
  const Icon = IconComponent || Icons.Circle

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group rounded-2xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
      </div>
      <span className="mb-2 inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
        {service.category}
      </span>
      <h3 className="font-heading text-xl font-semibold text-dark">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
      <p className="mt-4 text-sm font-medium text-primary">Duration: {service.duration}</p>
    </motion.div>
  )
}
