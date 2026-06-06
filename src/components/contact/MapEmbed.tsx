import { motion } from 'framer-motion'
import { clinicInfo } from '../../data/clinicInfo'

export default function MapEmbed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12 overflow-hidden rounded-2xl shadow-md"
    >
      <iframe
        title="Mothers Grace Dental Clinic Location"
        src={clinicInfo.mapEmbedUrl}
        width="100%"
        height="400"
        className="border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>
  )
}
