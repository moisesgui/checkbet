import type { Company, Review } from "../types"

// Mock API service - replace with real API calls
export const api = {
  // Companies
  getCompanies: async (): Promise<Company[]> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return mock data
    return []
  },

  getCompany: async (id: string): Promise<Company | null> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    // Mock data using the id parameter
    return {
      id,
      name: `Company ${id}`,
      logo: "/placeholder.svg?height=120&width=120",
      rating: 4.5,
      reviews: 0,
      verified: true,
      country: "Brazil",
      summary: `Description for company ${id}`,
      description: `Detailed description for company ${id}`,
      foundedYear: 2020,
      employees: "50-100",
      headquarters: "São Paulo, Brazil",
      website: `https://company${id}.example.com`,
      legalInfo: {
        registrationNumber: "12.345.678/0001-90",
        licenseNumber: "BET-BR-2023-45678",
        licenseAuthority: "Brazilian Gaming Commission",
        licenseStatus: "Active",
        licenseExpiry: "2025-12-31"
      }
    }
  },

  // Reviews
  getReviews: async (companyId: string): Promise<Review[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    // Mock data using the companyId parameter
    return [
      {
        id: '1',
        user: 'John Doe',
        avatar: '/placeholder.svg?height=40&width=40',
        rating: 5,
        date: new Date().toISOString(),
        comment: `Great company ${companyId}!`,
        helpful: 10,
        unhelpful: 2
      }
    ]
  },

  submitReview: async (
    companyId: string,
    review: Omit<Review, "id" | "date" | "helpful" | "unhelpful">,
  ): Promise<Review> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      ...review,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString(),
      helpful: 0,
      unhelpful: 0,
    }
  },

  // Search
  searchCompanies: async (query: string): Promise<Company[]> => {
    console.log('Searching companies with query:', query)
    await new Promise((resolve) => setTimeout(resolve, 500))
    return []
  },
}
