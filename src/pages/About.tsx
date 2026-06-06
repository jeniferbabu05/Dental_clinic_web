import { useEffect } from 'react'
import type { ComponentType } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, CheckCircle } from 'lucide-react'
import * as Icons from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'
import { clinicInfo } from '../data/clinicInfo'
import { ROUTES } from '../constants/routes'

export default function About() {
  useEffect(() => {
    document.title = clinicInfo.pageTitles.about
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
              <span className="text-white">About</span>
            </nav>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">About Us</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">{clinicInfo.tagline}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle title={clinicInfo.story.title} align="left" />
              {clinicInfo.story.paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex h-80 items-center justify-center rounded-2xl bg-primary/10"
            >
              <span className="text-[100px]">🦷</span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Values" subtitle="The principles that guide everything we do" />
          <div className="grid gap-6 md:grid-cols-3">
            {clinicInfo.values.map((value, index) => {
              const IconComponent = Icons[value.icon as keyof typeof Icons] as ComponentType<{
                className?: string
              }>
              const Icon = IconComponent || Icons.Star

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl bg-white p-8 shadow-md transition-shadow hover:shadow-xl"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-dark">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Milestones" subtitle="Key moments in our journey" />
          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-primary/20 md:left-1/2 md:block" />
            {clinicInfo.milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-8 flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="hidden w-1/2 md:block" />
                <div className="absolute left-4 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-primary md:left-1/2 md:block" />
                <div className={`w-full pl-12 md:w-1/2 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="rounded-2xl bg-white p-6 shadow-md">
                    <span className="text-sm font-bold text-primary">{milestone.year}</span>
                    <h3 className="mt-1 font-heading text-lg font-semibold text-dark">{milestone.title}</h3>
                    <p className="mt-2 text-sm text-muted">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Trust Us"
            subtitle="Reasons families across Chennai choose Mothers Grace"
            light
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clinicInfo.whyTrustUs.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-3 rounded-xl bg-white/5 p-4"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <p className="text-sm text-white/80">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
