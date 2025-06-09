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
    logo: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=200&h=200&fit=crop&auto=format",
    rating: 4.8,
    reviews: 1245,
    verified: true,
    country: "Brasil",
    summary: "Plataforma líder de apostas online com excelente atendimento ao cliente.",
    foundedYear: 2015,
    employees: "100-500",
    headquarters: "São Paulo, Brasil",
    website: "https://betstar.example.com",
    description:
      "BetStar é uma plataforma líder de apostas online que oferece uma ampla gama de opções de apostas esportivas, jogos de cassino e experiências de apostas ao vivo. Com foco na satisfação do cliente e segurança, a BetStar se estabeleceu como uma das plataformas de apostas mais confiáveis do Brasil.",
    legalInfo: {
      registrationNumber: "12.345.678/0001-90",
      licenseNumber: "BET-BR-2023-45678",
      licenseAuthority: "Comissão Brasileira de Jogos",
      licenseStatus: "Ativo",
      licenseExpiry: "2025-12-31",
    },
  },
]

export const CompanyDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const textColor = useColorModeValue("gray.700", "gray.300")
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400")
  const filledStarColor = useColorModeValue("yellow.400", "yellow.300")
  const emptyStarColor = useColorModeValue("gray.300", "gray.600")
  const infoBoxBg = useColorModeValue("blue.50", "blue.900")
    
  const company = companies.find((c) => c.id === id) || companies[0]

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
              Empresa Não Encontrada
            </Heading>
            <Text mt={4}>A empresa solicitada não pôde ser encontrada.</Text>
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
        {verified ? "Verificado" : "Não Verificado"}
      </Badge>
    )
  }

  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <Box
          bg={bgColor}
          borderRadius="22px"
          overflow="hidden"
          boxShadow="md"
          borderWidth="1px"
          borderColor={borderColor}
          mb={8}
          transition="transform 0.2s"
          _hover={{ transform: "translateY(-4px)" }}
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

        <Tabs colorScheme="brand" isLazy>
          <TabList overflowX="auto" overflowY="hidden" py={2}>
            <Tab>Visão Geral</Tab>
            <Tab>Informações Legais</Tab>
            <Tab>Avaliações</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box
                bg={bgColor}
                borderRadius="22px"
                overflow="hidden"
                boxShadow="md"
                borderWidth="1px"
                borderColor={borderColor}
                p={6}
                transition="transform 0.2s"
                _hover={{ transform: "translateY(-4px)" }}
              >
                <Heading as="h3" size="md" mb={6}>
                  Informações da Empresa
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                  <Stat>
                    <StatLabel>Fundada</StatLabel>
                    <StatNumber>{company.foundedYear}</StatNumber>
                    <StatHelpText>
                      <HStack>
                        <Icon as={FiCalendar} boxSize={4} />
                        <Text>{new Date().getFullYear() - company.foundedYear!} anos atrás</Text>
                      </HStack>
                    </StatHelpText>
                  </Stat>

                  <Stat>
                    <StatLabel>Sede</StatLabel>
                    <StatNumber>{company.headquarters?.split(",")[0]}</StatNumber>
                    <StatHelpText>
                      <HStack>
                        <Icon as={FiMapPin} boxSize={4} />
                        <Text>{company.headquarters?.split(",")[1]}</Text>
                      </HStack>
                    </StatHelpText>
                  </Stat>

                  <Stat>
                    <StatLabel>Funcionários</StatLabel>
                    <StatNumber>{company.employees}</StatNumber>
                    <StatHelpText>
                      <HStack>
                        <Icon as={FiUsers} boxSize={4} />
                        <Text>Tamanho da equipe</Text>
                      </HStack>
                    </StatHelpText>
                  </Stat>

                  <Stat>
                    <StatLabel>Status de Verificação</StatLabel>
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
                        <Text>{company.verified ? "Totalmente verificado" : "Não verificado"}</Text>
                      </HStack>
                    </StatHelpText>
                  </Stat>
                </SimpleGrid>

                <Divider my={6} borderColor={borderColor} />

                <Heading as="h3" size="md" mb={4}>
                  Sobre {company.name}
                </Heading>

                <Text color={textColor}>{company.description}</Text>

                <Text mt={4} color={textColor}>
                  Visite o site:{" "}
                  <Box as="span" color="brand.500">
                    {company.website}
                  </Box>
                </Text>
              </Box>
            </TabPanel>

            <TabPanel>
              <Box
                bg={bgColor}
                borderRadius="22px"
                overflow="hidden"
                boxShadow="md"
                borderWidth="1px"
                borderColor={borderColor}
                p={6}
                transition="transform 0.2s"
                _hover={{ transform: "translateY(-4px)" }}
              >
                <Heading as="h3" size="md" mb={6}>
                  Informações Legais
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                  <VStack align="start" spacing={2}>
                    <Text fontWeight="bold">Número de Registro</Text>
                    <Text>{company.legalInfo?.registrationNumber}</Text>
                  </VStack>

                  <VStack align="start" spacing={2}>
                    <Text fontWeight="bold">Número da Licença</Text>
                    <Text>{company.legalInfo?.licenseNumber}</Text>
                  </VStack>

                  <VStack align="start" spacing={2}>
                    <Text fontWeight="bold">Autoridade Licenciadora</Text>
                    <Text>{company.legalInfo?.licenseAuthority}</Text>
                  </VStack>

                  <VStack align="start" spacing={2}>
                    <Text fontWeight="bold">Status da Licença</Text>
                    <Badge
                      colorScheme={company.legalInfo?.licenseStatus === "Active" ? "green" : "red"}
                      borderRadius="full"
                      px={2}
                    >
                      {company.legalInfo?.licenseStatus === "Active" ? "Ativo" : "Inativo"}
                    </Badge>
                  </VStack>

                  <VStack align="start" spacing={2}>
                    <Text fontWeight="bold">Data de Expiração da Licença</Text>
                    <Text>
                      {company.legalInfo?.licenseExpiry &&
                        new Date(company.legalInfo.licenseExpiry).toLocaleDateString()}
                    </Text>
                  </VStack>
                </SimpleGrid>

                <Box mt={8} p={4} bg={infoBoxBg} borderRadius="md">
                  <Text fontSize="sm">
                    Estas informações foram verificadas pela nossa equipe jurídica. Para informações mais detalhadas ou para reportar qualquer discrepância, entre em contato com nossa equipe de suporte.
                  </Text>
                </Box>
              </Box>
            </TabPanel>

            <TabPanel px={0}>
              <CommentSection />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  )
}
