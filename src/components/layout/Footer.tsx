import { Link } from 'react-router-dom'
import { Share2, Camera, MessageCircle, Play, MapPin, Phone, Mail } from 'lucide-react'
import { clinicInfo } from '../../data/clinicInfo'
import { topServices } from '../../data/services'
import { NAV_LINKS, ROUTES } from '../../constants/routes'

export default function Footer() {
  const socialLinks = [
    { icon: Share2, href: clinicInfo.social.facebook, label: 'Facebook' },
    { icon: Camera, href: clinicInfo.social.instagram, label: 'Instagram' },
    { icon: MessageCircle, href: clinicInfo.social.twitter, label: 'Twitter' },
    { icon: Play, href: clinicInfo.social.youtube, label: 'YouTube' },
  ]

  return (
    <>
      <footer className="bg-dark py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🦷</span>
                <span className="font-heading text-lg font-bold">{clinicInfo.name}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {clinicInfo.description}
              </p>
              <div className="mt-6 flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/70 transition-colors hover:text-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold">Our Services</h3>
              <ul className="mt-4 space-y-2">
                {topServices.map((service) => (
                  <li key={service.id}>
                    <Link
                      to={ROUTES.SERVICES}
                      className="text-sm text-white/70 transition-colors hover:text-secondary"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold">Contact Info</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex gap-3 text-sm text-white/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  {clinicInfo.address}
                </li>
                <li className="flex gap-3 text-sm text-white/70">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  {clinicInfo.phone}
                </li>
                <li className="flex gap-3 text-sm text-white/70">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  {clinicInfo.email}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
            © 2024 {clinicInfo.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}
