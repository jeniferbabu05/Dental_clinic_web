import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'
import { NAV_LINKS, ROUTES } from '../../constants/routes'
import { clinicInfo } from '../../data/clinicInfo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const handleBookAppointment = () => {
    setMobileOpen(false)
    navigate(ROUTES.CONTACT)
  }

  const isActive = (path: string) => {
    if (path === ROUTES.HOME) return location.pathname === ROUTES.HOME
    return location.pathname.startsWith(path)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to={ROUTES.HOME} className="flex items-center gap-2">
            <span className="text-2xl">🦷</span>
            <span
              className={`font-heading text-lg font-bold md:text-xl ${
                scrolled ? 'text-dark' : 'text-white'
              }`}
            >
              {clinicInfo.name}
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors ${
                  scrolled ? 'text-dark hover:text-primary' : 'text-white/90 hover:text-white'
                } ${isActive(link.path) ? (scrolled ? 'text-primary' : 'text-white') : ''}`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              className="bg-accent text-dark hover:bg-accent/90"
              onClick={handleBookAppointment}
            >
              Book Appointment
            </Button>
          </div>

          <button
            type="button"
            className={`md:hidden ${scrolled ? 'text-dark' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-dark/50 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-white p-6 shadow-xl md:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-heading text-lg font-bold text-dark">{clinicInfo.name}</span>
                <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X className="h-6 w-6 text-dark" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-base font-medium ${
                      isActive(link.path) ? 'text-primary underline' : 'text-dark'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full bg-accent text-dark hover:bg-accent/90"
                  onClick={handleBookAppointment}
                >
                  Book Appointment
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
