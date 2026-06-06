import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import type { TeamMember } from '../../types/team.types'

interface TeamCardProps {
  member: TeamMember
  index?: number
}

export default function TeamCard({ member, index = 0 }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="flex h-64 items-center justify-center bg-primary/10">
        <User className="h-24 w-24 text-primary/40" />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-dark">{member.name}</h3>
        <p className="text-sm font-medium text-primary">{member.role}</p>
        <p className="mt-1 text-sm text-muted">{member.specialization}</p>
        <p className="mt-2 text-xs text-muted">{member.experience} experience</p>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end bg-dark/90 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="font-heading text-lg font-semibold text-white">{member.name}</h3>
        <p className="mt-1 text-sm text-secondary">{member.qualification}</p>
        <p className="mt-3 text-sm leading-relaxed text-white/80">{member.bio}</p>
      </div>
    </motion.div>
  )
}
