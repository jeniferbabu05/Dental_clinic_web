export type ServiceCategory = 'General' | 'Cosmetic' | 'Orthodontics' | 'Pediatric'

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  image?: string
  duration: string
  category: ServiceCategory
}
