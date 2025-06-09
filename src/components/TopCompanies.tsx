import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Text,
  Image,
  Badge,
  useColorModeValue,
  HStack,
  VStack,
  Icon,
} from "@chakra-ui/react"
import { FiStar } from "react-icons/fi"
import { Link } from "react-router-dom"
import type { Company } from "../types"

// Mock data for top companies
const topCompanies: Company[] = [
  {
    id: "1",
    name: "BetStar",
    logo: "/placeholder.svg?height=60&width=60",
    rating: 4.8,
    reviews: 1245,
    verified: true,
    country: "Brazil",
    summary: "Leading online betting platform with excellent customer service.",
  },
  {
    id: "2",
    name: "LuckyPlay",
    logo: "/placeholder.svg?height=60&width=60",
    rating: 4.7,
    reviews: 987,
    verified: true,
    country: "Portugal",
    summary: "Popular casino games and sports betting platform.",
  },
  {
    id: "3",
    name: "WinnersBet",
    logo: "/placeholder.svg?height=60&width=60",
    rating: 4.6,
    reviews: 1102,
    verified: true,
    country: "Brazil",
    summary: "Trusted platform with competitive odds.",
  },
  {
    id: "4",
    name: "BetKing",
    logo: "/placeholder.svg?height=60&width=60",
    rating: 4.5,
    reviews: 876,
    verified: false,
    country: "USA",
    summary: "Premium betting experience with VIP programs.",
  },
  {
    id: "5",
    name: "GoldBet",
    logo: "/placeholder.svg?height=60&width=60",
    rating: 4.4,
    reviews: 754,
    verified: true,
    country: "Brazil",
    summary: "Established betting company with solid reputation.",
  },
]

export const TopCompanies = () => {
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const badgeBg = useColorModeValue("green.100", "green.800")
  const badgeColor = useColorModeValue("green.800", "green.100")
  const textColor = useColorModeValue("gray.600", "gray.400")

  const StarRating = ({ rating }: { rating: number }) => {
    const filledColor = useColorModeValue("yellow.400", "yellow.300")
    const emptyColor = useColorModeValue("gray.300", "gray.600")

    return (
      <HStack spacing={1}>
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            as={FiStar}
            color={i < Math.floor(rating) ? filledColor : emptyColor}
            fill={i < Math.floor(rating) ? filledColor : "none"}
            boxSize={4}
          />
        ))}
        <Text fontWeight="bold" ml={1}>
          {rating.toFixed(1)}
        </Text>
      </HStack>
    )
  }

  return (
    <Box py={8} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW="container.xl">
        <Heading as="h2" size="lg" mb={6}>
          Top Rated Betting Companies
        </Heading>

        {/* Desktop view - horizontal */}
        <SimpleGrid columns={{ base: 1, md: 5 }} spacing={4} display={{ base: "none", md: "grid" }}>
          {topCompanies.map((company, index) => (
            <Link key={company.id} to={`/company/${company.id}`}>
              <Box
                bg={bgColor}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                borderWidth="1px"
                borderColor={borderColor}
                p={4}
                position="relative"
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{ transform: "translateY(-4px)" }}
              >
                <Flex direction="column" align="center">
                  <Box position="absolute" top={2} right={2}>
                    <Badge colorScheme="green" fontSize="0.8em" borderRadius="full" px={2}>
                      #{index + 1}
                    </Badge>
                  </Box>
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    boxSize="60px"
                    objectFit="contain"
                    mb={3}
                  />
                  <Text fontWeight="bold" fontSize="md" noOfLines={1} textAlign="center">
                    {company.name}
                  </Text>
                  <StarRating rating={company.rating} />
                  <HStack mt={2} fontSize="sm">
                    <Text color={textColor}>{company.reviews} reviews</Text>
                    {company.verified && (
                      <Badge bg={badgeBg} color={badgeColor} fontSize="xs" borderRadius="full" px={2}>
                        Verified
                      </Badge>
                    )}
                  </HStack>
                </Flex>
              </Box>
            </Link>
          ))}
        </SimpleGrid>

        {/* Mobile view - vertical */}
        <VStack spacing={4} display={{ base: "flex", md: "none" }}>
          {topCompanies.map((company, index) => (
            <Link key={company.id} to={`/company/${company.id}`} style={{ width: "100%" }}>
              <Flex
                bg={bgColor}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                borderWidth="1px"
                borderColor={borderColor}
                p={4}
                w="100%"
                position="relative"
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{ transform: "translateY(-4px)" }}
              >
                <Box position="absolute" top={2} right={2}>
                  <Badge colorScheme="green" fontSize="0.8em" borderRadius="full" px={2}>
                    #{index + 1}
                  </Badge>
                </Box>
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  boxSize="50px"
                  objectFit="contain"
                  mr={4}
                />
                <VStack align="start" spacing={1}>
                  <Text fontWeight="bold" fontSize="md">
                    {company.name}
                  </Text>
                  <StarRating rating={company.rating} />
                  <HStack mt={1} fontSize="sm">
                    <Text color={textColor}>{company.reviews} reviews</Text>
                    {company.verified && (
                      <Badge bg={badgeBg} color={badgeColor} fontSize="xs" borderRadius="full" px={2}>
                        Verified
                      </Badge>
                    )}
                  </HStack>
                </VStack>
              </Flex>
            </Link>
          ))}
        </VStack>
      </Container>
    </Box>
  )
}
