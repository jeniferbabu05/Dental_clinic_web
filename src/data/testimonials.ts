import type { Testimonial } from '../types/testimonial.types'

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    patientName: 'Lakshmi Venkatesh',
    rating: 5,
    comment:
      'Dr. Grace and her team made my smile makeover journey so comfortable. The results exceeded my expectations — I finally have the confidence to smile freely!',
    service: 'Smile Makeover',
    date: 'January 2024',
  },
  {
    id: 'testimonial-2',
    patientName: 'Rajesh Iyer',
    rating: 5,
    comment:
      'I was terrified of root canals, but Dr. Ramesh made it completely painless. The clinic is modern, clean, and the staff is incredibly caring.',
    service: 'Root Canal Treatment',
    date: 'March 2024',
  },
  {
    id: 'testimonial-3',
    patientName: 'Ananya Krishnan',
    rating: 5,
    comment:
      'My 6-year-old actually looks forward to dental visits now thanks to Dr. Priya! She explains everything in a way kids understand and love.',
    service: "Children's Dental Care",
    date: 'May 2024',
  },
  {
    id: 'testimonial-4',
    patientName: 'Suresh Menon',
    rating: 5,
    comment:
      'Dr. Arun\'s Invisalign treatment straightened my teeth in just 10 months. Professional, transparent pricing, and excellent follow-up care throughout.',
    service: 'Invisalign',
    date: 'August 2024',
  },
]
