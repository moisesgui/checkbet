import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react"
import type { Company } from "../types"
import { RankingCards } from "./RankingCards"

// Mock data for top companies
const topCompanies: Company[] = [
  {
    id: "1",
    name: "BetStar",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=BetStar&backgroundColor=0284c7&textColor=ffffff",
    rating: 4.8,
    reviews: 1245,
    verified: true,
    country: "Brasil",
    summary: "Plataforma líder de apostas online com excelente atendimento ao cliente.",
  },
  {
    id: "2",
    name: "LuckyPlay",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=LuckyPlay&backgroundColor=059669&textColor=ffffff",
    rating: 4.7,
    reviews: 987,
    verified: true,
    country: "Portugal",
    summary: "Plataforma popular de jogos de cassino e apostas esportivas.",
  },
  {
    id: "3",
    name: "WinnersBet",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=WinnersBet&backgroundColor=dc2626&textColor=ffffff",
    rating: 4.6,
    reviews: 1102,
    verified: true,
    country: "Brasil",
    summary: "Plataforma confiável com odds competitivas.",
  },
  {
    id: "4",
    name: "BetKing",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=BetKing&backgroundColor=7c3aed&textColor=ffffff",
    rating: 4.5,
    reviews: 876,
    verified: false,
    country: "EUA",
    summary: "Experiência premium de apostas com programas VIP.",
  },
  {
    id: "5",
    name: "GoldBet",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=GoldBet&backgroundColor=f59e0b&textColor=ffffff",
    rating: 4.4,
    reviews: 754,
    verified: true,
    country: "Brasil",
    summary: "Empresa de apostas estabelecida com sólida reputação.",
  },
]

export const TopCompanies = () => {
  return (
    <Box py={8} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW="container.xl">
        <Heading as="h2" size="lg" mb={6}>
          Ranking de Empresas mais confiáveis
        </Heading>

        {/* Desktop view - horizontal */}
        <SimpleGrid columns={{ base: 1, md: 5 }} spacing={4} display={{ base: "none", md: "grid" }}>
          <RankingCards companies={topCompanies} />
        </SimpleGrid>

        {/* Mobile view - vertical */}
        <Box display={{ base: "block", md: "none" }}>
          <RankingCards companies={topCompanies} isMobile />
        </Box>
      </Container>
    </Box>
  )
}
