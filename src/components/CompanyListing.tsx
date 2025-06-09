import { useState } from "react"
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Text,
  IconButton,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react"
import { FiFilter } from "react-icons/fi"
import type { Company } from "../types"
import { CompanyCard } from "./CompanyCard"
import { FilterSectionBar } from "./FilterSectionBar"

// Mock data for companies
const companies: Company[] = [
  {
    id: "1",
    name: "BetStar",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=BetStar&backgroundColor=4f46e5&textColor=ffffff",
    rating: 4.8,
    reviews: 1245,
    verified: true,
    country: "Brasil",
    summary: "Plataforma líder de apostas online com excelente atendimento ao cliente e pagamentos rápidos.",
  },
  {
    id: "2",
    name: "LuckyPlay",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=LuckyPlay&backgroundColor=059669&textColor=ffffff",
    rating: 4.7,
    reviews: 987,
    verified: true,
    country: "Portugal",
    summary: "Jogos de cassino e apostas esportivas populares com ótimos bônus para novos jogadores.",
  },
  {
    id: "3",
    name: "WinnersBet",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=WinnersBet&backgroundColor=dc2626&textColor=ffffff",
    rating: 4.6,
    reviews: 1102,
    verified: true,
    country: "Brasil",
    summary: "Plataforma confiável com ampla variedade de opções de apostas e odds competitivas.",
  },
  {
    id: "4",
    name: "BetKing",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=BetKing&backgroundColor=7c3aed&textColor=ffffff",
    rating: 4.5,
    reviews: 876,
    verified: false,
    country: "EUA",
    summary: "Experiência premium de apostas com programas VIP exclusivos e promoções.",
  },
  {
    id: "5",
    name: "GoldBet",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=GoldBet&backgroundColor=f59e0b&textColor=ffffff",
    rating: 4.4,
    reviews: 754,
    verified: true,
    country: "Brasil",
    summary: "Empresa de apostas estabelecida com sólida reputação e plataforma confiável.",
  },
  {
    id: "6",
    name: "BetWinner",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=BetWinner&backgroundColor=0284c7&textColor=ffffff",
    rating: 3.9,
    reviews: 623,
    verified: false,
    country: "Portugal",
    summary: "Plataforma de apostas em crescimento com odds competitivas e diversos mercados de apostas.",
  },
]

export const CompanyListing = () => {
  const { isOpen, onToggle } = useDisclosure()
  const [filters, setFilters] = useState({
    rating: "all",
    status: "all",
    country: "all",
  })
  
  const filteredCompanies = companies.filter((company) => {
    return (
      (filters.rating === "all" || company.rating >= Number.parseInt(filters.rating)) &&
      (filters.status === "all" ||
        (filters.status === "verified" && company.verified) ||
        (filters.status === "unverified" && !company.verified)) &&
      (filters.country === "all" || company.country === filters.country)
    )
  })

  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" mb={6}>
          <Heading as="h2" size="lg">
            Busque por uma empresa
          </Heading>
          <IconButton
            aria-label="Filter"
            variant="outline"
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
          >
            <FiFilter />
          </IconButton>
        </Flex>

        <Box display={{ base: "none", md: "block" }}>
          <FilterSectionBar filters={filters} setFilters={setFilters} />
        </Box>

        <Collapse in={isOpen} animateOpacity>
          <FilterSectionBar filters={filters} setFilters={setFilters} isMobile />
        </Collapse>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {filteredCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </SimpleGrid>

        {filteredCompanies.length === 0 && (
          <Box textAlign="center" py={10}>
            <Text>Nenhuma empresa corresponde aos seus critérios de filtro.</Text>
          </Box>
        )}
      </Container>
    </Box>
  )
}
