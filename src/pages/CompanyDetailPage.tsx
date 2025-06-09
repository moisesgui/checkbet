"use client"

import { useParams } from "react-router-dom"
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Image,
  Badge,
  useColorModeValue,
  HStack,
  VStack,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react"
import { FiStar, FiMapPin, FiCalendar, FiUsers, FiShield, FiAlertTriangle } from "react-icons/fi"
import { CommentSection } from "../components/CommentSection"
import type { Company } from "../types"

// Mock company data
const companies: Company[] = [
  {
    id: "1",
    name: "BetStar",
    logo: "/placeholder.svg?height=120&width=120",
    rating: 4.8,
    reviews: 1245,
    verified: true,
    country: "Brazil",
    summary: "Leading online betting platform with excellent customer service.",
    foundedYear: 2015,
    employees: "100-500",
    headquarters: "São Paulo, Brazil",
    website: "https://betstar.example.com",
    description:
      "BetStar is a leading online betting platform offering a wide range of sports betting options, casino games, and live betting experiences. With a focus on customer satisfaction and security, BetStar has established itself as one of the most trusted betting platforms in Brazil.",
    legalInfo: {
      registrationNumber: "12.345.678/0001-90",
      licenseNumber: "BET-BR-2023-45678",
      licenseAuthority: "Brazilian Gaming Commission",
      licenseStatus: "Active",
      licenseExpiry: "2025-12-31",
    },
  },
]

export const CompanyDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  
  // All hooks must be called at the top level
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const textColor = useColorModeValue("gray.700", "gray.300")
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400")
  const filledStarColor = useColorModeValue("yellow.400", "yellow.300")
  const emptyStarColor = useColorModeValue("gray.300", "gray.600")
  const infoBoxBg = useColorModeValue("blue.50", "blue.900")

  // Find the company by ID
  const company = companies.find((c) => c.id === id) || companies[0]

  // If no company is found, show an error message
  if (!company) {
    return (
      <Box py={8}>
        <Container maxW="container.xl">
          <Box
            bg={bgColor}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            borderWidth="1px"
            borderColor={borderColor}
            p={6}
          >
            <Heading as="h1" size="xl" color="red.500">
              Company Not Found
            </Heading>
            <Text mt={4}>The requested company could not be found.</Text>
          </Box>
        </Container>
      </Box>
    )
  }

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <HStack spacing={1}>
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            as={FiStar}
            color={i < Math.floor(rating) ? filledStarColor : emptyStarColor}
            fill={i < Math.floor(rating) ? filledStarColor : "none"}
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
      <Badge colorScheme={verified ? "green" : "gray"} fontSize="sm" borderRadius="full" px={3} py={1}>
        {verified ? "Verified" : "Unverified"}
      </Badge>
    )
  }

  return (
    <Box py={8}>
      <Container maxW="container.xl">
        {/* Company header */}
        <Box
          bg={bgColor}
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          borderWidth="1px"
          borderColor={borderColor}
          mb={8}
        >
          <Flex p={6} direction={{ base: "column", md: "row" }} align={{ base: "center", md: "start" }} gap={6}>
            <Image
              src={company.logo || "/placeholder.svg"}
              alt={company.name}
              boxSize={{ base: "100px", md: "120px" }}
              objectFit="contain"
            />

            <VStack align={{ base: "center", md: "start" }} spacing={2} flex={1}>
              <Heading as="h1" size="xl">
                {company.name}
              </Heading>

              <HStack>
                <StarRating rating={company.rating} />
                <Text color={secondaryTextColor}>({company.reviews} reviews)</Text>
              </HStack>

              <HStack spacing={4} mt={2}>
                <StatusBadge verified={company.verified} />
                <HStack>
                  <Icon as={FiMapPin} boxSize={4} />
                  <Text>{company.country}</Text>
                </HStack>
              </HStack>

              <Text mt={4} color={textColor}>
                {company.description}
              </Text>
            </VStack>
          </Flex>
        </Box>

        {/* Company details tabs */}
        <Tabs colorScheme="brand" isLazy>
          <TabList overflowX="auto" overflowY="hidden" py={2}>
            <Tab>Overview</Tab>
            <Tab>Legal Information</Tab>
            <Tab>Reviews</Tab>
          </TabList>

          <TabPanels>
            {/* Overview Tab */}
            <TabPanel>
              <Box
                bg={bgColor}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                borderWidth="1px"
                borderColor={borderColor}
                p={6}
              >
                <Heading as="h3" size="md" mb={6}>
                  Company Information
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                  <Stat>
                    <StatLabel>Founded</StatLabel>
                    <StatNumber>{company.foundedYear}</StatNumber>
                    <StatHelpText>
                      <HStack>
                        <Icon as={FiCalendar} boxSize={4} />
                        <Text>{new Date().getFullYear() - company.foundedYear!} years ago</Text>
                      </HStack>
                    </StatHelpText>
                  </Stat>

                  <Stat>
                    <StatLabel>Headquarters</StatLabel>
                    <StatNumber>{company.headquarters?.split(",")[0]}</StatNumber>
                    <StatHelpText>
                      <HStack>
                        <Icon as={FiMapPin} boxSize={4} />
                        <Text>{company.headquarters?.split(",")[1]}</Text>
                      </HStack>
                    </StatHelpText>
                  </Stat>

                  <Stat>
                    <StatLabel>Employees</StatLabel>
                    <StatNumber>{company.employees}</StatNumber>
                    <StatHelpText>
                      <HStack>
                        <Icon as={FiUsers} boxSize={4} />
                        <Text>Team size</Text>
                      </HStack>
                    </StatHelpText>
                  </Stat>

                  <Stat>
                    <StatLabel>Verification Status</StatLabel>
                    <StatNumber>
                      <StatusBadge verified={company.verified} />
                    </StatNumber>
                    <StatHelpText>
                      <HStack>
                        <Icon
                          as={company.verified ? FiShield : FiAlertTriangle}
                          boxSize={4}
                          color={company.verified ? "green.500" : "orange.500"}
                        />
                        <Text>{company.verified ? "Fully verified" : "Not verified"}</Text>
                      </HStack>
                    </StatHelpText>
                  </Stat>
                </SimpleGrid>

                <Divider my={6} borderColor={borderColor} />

                <Heading as="h3" size="md" mb={4}>
                  About {company.name}
                </Heading>

                <Text color={textColor}>{company.description}</Text>

                <Text mt={4} color={textColor}>
                  Visit their website:{" "}
                  <Box as="span" color="brand.500">
                    {company.website}
                  </Box>
                </Text>
              </Box>
            </TabPanel>

            {/* Legal Information Tab */}
            <TabPanel>
              <Box
                bg={bgColor}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                borderWidth="1px"
                borderColor={borderColor}
                p={6}
              >
                <Heading as="h3" size="md" mb={6}>
                  Legal Information
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                  <VStack align="start" spacing={2}>
                    <Text fontWeight="bold">Registration Number</Text>
                    <Text>{company.legalInfo?.registrationNumber}</Text>
                  </VStack>

                  <VStack align="start" spacing={2}>
                    <Text fontWeight="bold">License Number</Text>
                    <Text>{company.legalInfo?.licenseNumber}</Text>
                  </VStack>

                  <VStack align="start" spacing={2}>
                    <Text fontWeight="bold">License Authority</Text>
                    <Text>{company.legalInfo?.licenseAuthority}</Text>
                  </VStack>

                  <VStack align="start" spacing={2}>
                    <Text fontWeight="bold">License Status</Text>
                    <Badge
                      colorScheme={company.legalInfo?.licenseStatus === "Active" ? "green" : "red"}
                      borderRadius="full"
                      px={2}
                    >
                      {company.legalInfo?.licenseStatus}
                    </Badge>
                  </VStack>

                  <VStack align="start" spacing={2}>
                    <Text fontWeight="bold">License Expiry</Text>
                    <Text>
                      {company.legalInfo?.licenseExpiry &&
                        new Date(company.legalInfo.licenseExpiry).toLocaleDateString()}
                    </Text>
                  </VStack>
                </SimpleGrid>

                <Box mt={8} p={4} bg={infoBoxBg} borderRadius="md">
                  <Text fontSize="sm">
                    This information has been verified by our legal team. For more detailed information or to report any
                    discrepancies, please contact our support team.
                  </Text>
                </Box>
              </Box>
            </TabPanel>

            {/* Reviews Tab */}
            <TabPanel px={0}>
              <CommentSection companyId={company.id} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  )
}
