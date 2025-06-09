export interface Company {
  id: string
  name: string
  logo: string
  rating: number
  reviews: number
  verified: boolean
  country: string
  summary: string
  foundedYear?: number
  employees?: string
  headquarters?: string
  website?: string
  description?: string
  legalInfo?: {
    registrationNumber: string
    licenseNumber: string
    licenseAuthority: string
    licenseStatus: string
    licenseExpiry: string
  }
}

export interface Review {
  id: string
  user: string
  avatar: string
  rating: number
  date: string
  comment: string
  helpful: number
  unhelpful: number
}

export interface User {
  id: string
  name: string
  email: string
  avatar: string
}
