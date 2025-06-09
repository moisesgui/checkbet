"use client"

import { useState } from "react"
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Text,
  Image,
  Badge,
  Button,
  HStack,
  VStack,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Collapse,
  Divider,
  Select,
} from "@chakra-ui/react"
import { FiStar, FiFilter } from "react-icons/fi"
import { Link } from "react-router-dom"
import type { Company } from "../types"

// Mock data for companies
const companies: Company[] = [
  {
    id: "1",
    name: "BetStar",
    logo: "/placeholder.svg?height=60&width=60",
    rating: 4.8,
    reviews: 1245,
    verified: true,
    country: "Brazil",
    summary: "Leading online betting platform with excellent customer service and fast payouts.",
  },
  {
    id: "2",
    name: "LuckyPlay",
    logo: "/placeholder.svg?height=60&width=60",
    rating: 4.7,
    reviews: 987,
    verified: true,
    country: "Portugal",
    summary: "Popular casino games and sports betting with great bonuses for new players.",
  },
  {
    id: "3",
    name: "WinnersBet",
    logo: "/placeholder.svg?height=60&width=60",
    rating: 4.6,
    reviews: 1102,
    verified: true,
    country: "Brazil",
    summary: "Trusted platform with a wide range of betting options and competitive odds.",
  },
  {
    id: "4",
    name: "BetKing",
    logo: "/placeholder.svg?height=60&width=60",
    rating: 4.5,
    reviews: 876,
    verified: false,
    country: "USA",
    summary: "Premium betting experience with exclusive VIP programs and promotions.",
  },
  {
    id: "5",
    name: "GoldBet",
    logo: "/placeholder.svg?height=60&width=60",
    rating: 4.4,
    reviews: 754,
    verified: true,
    country: "Brazil",
    summary: "Established betting company with a solid reputation and reliable platform.",
  },
  {
    id: "6",
    name: "BetWinner",
    logo: "/placeholder.svg?height=60&width=60",
    rating: 3.9,
    reviews: 623,
    verified: false,
    country: "Portugal",
    summary: "Growing betting platform with competitive odds and diverse betting markets.",
  },
]

export const CompanyListing = () => {
  const { isOpen, onToggle } = useDisclosure()
  const [filters, setFilters] = useState({
    rating: "all",
    status: "all",
    country: "all",
  })

  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const filledColor = useColorModeValue("yellow.400", "yellow.300")
  const emptyColor = useColorModeValue("gray.300", "gray.600")
  const textColor = useColorModeValue("gray.700", "gray.300")

  // Filter companies based on selected filters
  const filteredCompanies = companies.filter((company) => {
    return (
      (filters.rating === "all" || company.rating >= Number.parseInt(filters.rating)) &&
      (filters.status === "all" ||
        (filters.status === "verified" && company.verified) ||
        (filters.status === "unverified" && !company.verified)) &&
      (filters.country === "all" || company.country === filters.country)
    )
  })

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <HStack gap={1}>
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

  const StatusBadge = ({ verified }: { verified: boolean }) => {
    return (
      <Badge colorScheme={verified ? "green" : "gray"} fontSize="xs" borderRadius="full" px={2}>
        {verified ? "Verified" : "Unverified"}
      </Badge>
    )
  }

  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" mb={6}>
          <Heading as="h2" size="lg">
            All Companies
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

        {/* Filter bar - Desktop */}
        <Flex
          bg={bgColor}
          p={4}
          borderRadius="lg"
          boxShadow="sm"
          mb={6}
          borderWidth="1px"
          borderColor={borderColor}
          display={{ base: "none", md: "flex" }}
          flexWrap="wrap"
          gap={4}
        >
          <Box flex="1" minW="150px">
            <Text fontSize="sm" mb={1} fontWeight="medium">
              Rating
            </Text>
            <Select
              size="sm"
              value={filters.rating}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilters({ ...filters, rating: e.target.value })}
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4+ Stars</option>
              <option value="3">3+ Stars</option>
              <option value="2">2+ Stars</option>
              <option value="1">1+ Star</option>
            </Select>
          </Box>

          <Box flex="1" minW="150px">
            <Text fontSize="sm" mb={1} fontWeight="medium">
              Legal Status
            </Text>
            <Select
              size="sm"
              value={filters.status}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilters({ ...filters, status: e.target.value })}
            >
              <option value="all">All Statuses</option>
              <option value="verified">Verified</option>
              <option value="unverified">Unverified</option>
            </Select>
          </Box>

          <Box flex="1" minW="150px">
            <Text fontSize="sm" mb={1} fontWeight="medium">
              Country
            </Text>
            <Select
              size="sm"
              value={filters.country}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilters({ ...filters, country: e.target.value })}
            >
              <option value="all">All Countries</option>
              <option value="Brazil">Brazil</option>
              <option value="Portugal">Portugal</option>
              <option value="USA">USA</option>
            </Select>
          </Box>
        </Flex>

        {/* Filter bar - Mobile */}
        <Collapse in={isOpen} animateOpacity>
          <Box bg={bgColor} p={4} borderRadius="lg" boxShadow="sm" mb={6} borderWidth="1px" borderColor={borderColor}>
            <VStack gap={4} align="stretch">
              <Box>
                <Text fontSize="sm" mb={1} fontWeight="medium">
                  Rating
                </Text>
                <Select
                  size="sm"
                  value={filters.rating}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilters({ ...filters, rating: e.target.value })}
                >
                  <option value="all">All Ratings</option>
                  <option value="5">5 Stars</option>
                  <option value="4">4+ Stars</option>
                  <option value="3">3+ Stars</option>
                  <option value="2">2+ Stars</option>
                  <option value="1">1+ Star</option>
                </Select>
              </Box>

              <Box>
                <Text fontSize="sm" mb={1} fontWeight="medium">
                  Legal Status
                </Text>
                <Select
                  size="sm"
                  value={filters.status}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilters({ ...filters, status: e.target.value })}
                >
                  <option value="all">All Statuses</option>
                  <option value="verified">Verified</option>
                  <option value="unverified">Unverified</option>
                </Select>
              </Box>

              <Box>
                <Text fontSize="sm" mb={1} fontWeight="medium">
                  Country
                </Text>
                <Select
                  size="sm"
                  value={filters.country}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilters({ ...filters, country: e.target.value })}
                >
                  <option value="all">All Countries</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Portugal">Portugal</option>
                  <option value="USA">USA</option>
                </Select>
              </Box>
            </VStack>
          </Box>
        </Collapse>

        {/* Company grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {filteredCompanies.map((company) => (
            <Box
              key={company.id}
              bg={bgColor}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              borderWidth="1px"
              borderColor={borderColor}
              transition="transform 0.2s"
              _hover={{ transform: "translateY(-4px)" }}
            >
              <Flex p={4} align="center">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  boxSize="60px"
                  objectFit="contain"
                  mr={4}
                />
                <VStack align="start" gap={1}>
                  <Text fontWeight="bold" fontSize="lg">
                    {company.name}
                  </Text>
                  <HStack>
                    <StarRating rating={company.rating} />
                    <Text fontSize="sm" color={emptyColor}>
                      ({company.reviews})
                    </Text>
                  </HStack>
                  <HStack>
                    <StatusBadge verified={company.verified} />
                    <Text fontSize="xs" color={borderColor}>
                      {company.country}
                    </Text>
                  </HStack>
                </VStack>
              </Flex>

              <Divider borderColor={borderColor} />

              <Box p={4}>
                <Text fontSize="sm" mb={4} color={textColor} isTruncated noOfLines={2}>
                  {company.summary}
                </Text>
                <Button as={Link} to={`/company/${company.id}`} size="sm" width="full" colorScheme="brand">
                  View Details
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        {filteredCompanies.length === 0 && (
          <Box textAlign="center" py={10}>
            <Text>No companies match your filter criteria.</Text>
          </Box>
        )}
      </Container>
    </Box>
  )
}
