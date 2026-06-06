import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { clinicInfo } from '../../data/clinicInfo'

export default function ContactInfo() {
  const items = [
    { icon: MapPin, label: 'Address', value: clinicInfo.address },
    { icon: Phone, label: 'Phone', value: clinicInfo.phone },
    { icon: Mail, label: 'Email', value: clinicInfo.email },
    { icon: Clock, label: 'Hours', value: `${clinicInfo.hours.weekdays}\n${clinicInfo.hours.sunday}` },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h2 className="font-heading text-2xl font-bold text-dark">Get in Touch</h2>
        <p className="mt-2 text-muted">
          We&apos;d love to hear from you. Reach out for appointments, inquiries, or emergency care.
        </p>
      </div>
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="flex gap-4 rounded-2xl bg-white p-5 shadow-md"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <item.icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-dark">{item.label}</p>
            <p className="mt-1 whitespace-pre-line text-sm text-muted">{item.value}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
