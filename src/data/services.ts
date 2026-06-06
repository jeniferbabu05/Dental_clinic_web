import type { Service } from '../types/service.types'

export const services: Service[] = [
  {
    id: 'dental-checkup',
    title: 'Dental Checkup',
    description:
      'Comprehensive oral examination with digital X-rays to detect issues early and maintain optimal dental health.',
    icon: 'Stethoscope',
    duration: '30 mins',
    category: 'General',
  },
  {
    id: 'teeth-cleaning',
    title: 'Teeth Cleaning',
    description:
      'Professional scaling and polishing to remove plaque, tartar, and stains for a brighter, healthier smile.',
    icon: 'Sparkles',
    duration: '45 mins',
    category: 'General',
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    description:
      'Pain-free root canal therapy using modern techniques to save infected teeth and restore comfort.',
    icon: 'Shield',
    duration: '60-90 mins',
    category: 'General',
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    description:
      'Safe, professional whitening treatments that brighten your smile by several shades in a single visit.',
    icon: 'Sun',
    duration: '60 mins',
    category: 'Cosmetic',
  },
  {
    id: 'dental-veneers',
    title: 'Dental Veneers',
    description:
      'Custom porcelain veneers to correct chips, gaps, and discoloration for a flawless, natural-looking smile.',
    icon: 'Gem',
    duration: '2 visits',
    category: 'Cosmetic',
  },
  {
    id: 'smile-makeover',
    title: 'Smile Makeover',
    description:
      'A complete cosmetic transformation combining multiple treatments tailored to your unique facial features.',
    icon: 'Smile',
    duration: 'Custom plan',
    category: 'Cosmetic',
  },
  {
    id: 'braces',
    title: 'Traditional Braces',
    description:
      'Metal and ceramic braces for effective teeth alignment with regular monitoring and adjustments.',
    icon: 'Braces',
    duration: '12-24 months',
    category: 'Orthodontics',
  },
  {
    id: 'invisalign',
    title: 'Invisalign',
    description:
      'Clear, removable aligners for discreet orthodontic treatment with predictable, comfortable results.',
    icon: 'Layers',
    duration: '6-18 months',
    category: 'Orthodontics',
  },
  {
    id: 'children-dental',
    title: "Children's Dental Care",
    description:
      'Gentle, child-friendly dental visits designed to build healthy habits and positive experiences from an early age.',
    icon: 'Baby',
    duration: '30 mins',
    category: 'Pediatric',
  },
  {
    id: 'fluoride-treatment',
    title: 'Fluoride Treatment',
    description:
      'Professional fluoride application to strengthen enamel and protect young teeth against cavities.',
    icon: 'Droplets',
    duration: '15 mins',
    category: 'Pediatric',
  },
]

export const topServices = services.slice(0, 5)
