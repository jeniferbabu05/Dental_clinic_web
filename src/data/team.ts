import type { TeamMember } from '../types/team.types'

export const teamMembers: TeamMember[] = [
  {
    id: 'dr-grace',
    name: 'Dr. Grace Mathew',
    role: 'Founder & Lead Dentist',
    qualification: 'BDS, MDS (Prosthodontics)',
    specialization: 'Cosmetic & Restorative Dentistry',
    image: '',
    bio: 'With over 18 years of experience, Dr. Grace founded Mothers Grace Dental Clinic with a vision to provide compassionate, world-class dental care. She specializes in smile makeovers and complex restorative procedures.',
    experience: '18+ years',
    isLead: true,
  },
  {
    id: 'dr-arun',
    name: 'Dr. Arun Kumar',
    role: 'Senior Orthodontist',
    qualification: 'BDS, MDS (Orthodontics)',
    specialization: 'Braces & Invisalign',
    image: '',
    bio: 'Dr. Arun is passionate about creating beautiful, healthy smiles through advanced orthodontic treatments. He has helped hundreds of patients achieve perfectly aligned teeth.',
    experience: '12+ years',
  },
  {
    id: 'dr-priya',
    name: 'Dr. Priya Nair',
    role: 'Pediatric Dentist',
    qualification: 'BDS, MDS (Pedodontics)',
    specialization: 'Children\'s Dentistry',
    image: '',
    bio: 'Dr. Priya creates a warm, fun environment for children, making dental visits enjoyable. Her gentle approach helps kids develop lifelong healthy oral habits.',
    experience: '10+ years',
  },
  {
    id: 'dr-ramesh',
    name: 'Dr. Ramesh S',
    role: 'Endodontist',
    qualification: 'BDS, MDS (Conservative Dentistry)',
    specialization: 'Root Canal & Pain Management',
    image: '',
    bio: 'Dr. Ramesh is known for his virtually painless root canal procedures. He uses the latest micro-endodontic techniques to save natural teeth with precision.',
    experience: '14+ years',
  },
]

export const leadDoctor = teamMembers.find((m) => m.isLead)!
export const otherTeamMembers = teamMembers.filter((m) => !m.isLead)
