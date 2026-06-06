export type AppointmentStatus = 'pending' | 'confirmed' | 'cancelled'

export interface Appointment {
  id: string
  patientName: string
  phone: string
  email: string
  serviceId: string
  preferredDate: string
  preferredTime: string
  status: AppointmentStatus
  notes?: string
}
