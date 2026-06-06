export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  TEAM: '/team',
  CONTACT: '/contact',
} as const

export const NAV_LINKS = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'About', path: ROUTES.ABOUT },
  { label: 'Services', path: ROUTES.SERVICES },
  { label: 'Team', path: ROUTES.TEAM },
  { label: 'Contact', path: ROUTES.CONTACT },
] as const
