import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, User, Award } from 'lucide-react'
import TeamCard from '../components/team/TeamCard'
import SectionTitle from '../components/ui/SectionTitle'
import { leadDoctor, otherTeamMembers } from '../data/team'
import { clinicInfo } from '../data/clinicInfo'
import { ROUTES } from '../constants/routes'

export default function Team() {
  useEffect(() => {
    document.title = clinicInfo.pageTitles.team
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
              <span className="text-white">Team</span>
            </nav>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">Meet Our Team</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              Experienced specialists dedicated to your smile
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl bg-white shadow-md"
          >
            <div className="grid lg:grid-cols-2">
              <div className="flex h-80 items-center justify-center bg-primary/10 lg:h-auto">
                <User className="h-32 w-32 text-primary/30" />
              </div>
              <div className="p-8 md:p-12">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1 text-sm font-medium text-accent">
                  <Award className="h-4 w-4" />
                  Lead Dentist
                </div>
                <h2 className="font-heading text-3xl font-bold text-dark">{leadDoctor.name}</h2>
                <p className="mt-1 text-lg font-medium text-primary">{leadDoctor.role}</p>
                <p className="mt-1 text-sm text-muted">{leadDoctor.qualification}</p>
                <p className="mt-1 text-sm text-secondary">{leadDoctor.specialization}</p>
                <p className="mt-4 leading-relaxed text-muted">{leadDoctor.bio}</p>
                <p className="mt-4 text-sm font-semibold text-dark">{leadDoctor.experience} of experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Specialists" subtitle="A team of experts across every dental discipline" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherTeamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
