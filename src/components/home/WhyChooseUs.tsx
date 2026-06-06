import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { clinicInfo } from '../../data/clinicInfo'

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Choose Us"
          subtitle="Experience the Mothers Grace difference"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clinicInfo.whyChooseUs.map((item, index) => {
            const IconComponent = Icons[item.icon as keyof typeof Icons] as ComponentType<{
              className?: string
            }>
            const Icon = IconComponent || Icons.Star

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-background p-6 text-center shadow-md transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-dark">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
