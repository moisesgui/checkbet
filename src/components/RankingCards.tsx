import {
  Box,
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

interface RankingCardsProps {
  companies: Company[]
  isMobile?: boolean
}

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

export const RankingCards = ({ companies, isMobile = false }: RankingCardsProps) => {
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const badgeBg = useColorModeValue("green.100", "green.800")
  const badgeColor = useColorModeValue("green.800", "green.100")
  const textColor = useColorModeValue("gray.600", "gray.400")

  if (isMobile) {
    return (
      <VStack spacing={4} w="100%">
        {companies.map((company, index) => (
          <Link key={company.id} to={`/company/${company.id}`} style={{ width: "100%" }}>
            <Flex
              bg={bgColor}
              borderRadius="22px"
              overflow="hidden"
              boxShadow="md"
              borderWidth="1px"
              borderColor={borderColor}
              p={4}
              w="100%"
              position="relative"
              cursor="pointer"
              _hover={{ 
                transform: "translateY(-4px)",
                outline: "3px solid",
                outlineColor: "blue.500",
                outlineOffset: "3px"
              }}
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
                borderRadius="16px"
                bg="white"
                p={1}
              />
              <VStack align="start" spacing={1}>
                <Text fontWeight="bold" fontSize="md">
                  {company.name}
                </Text>
                <StarRating rating={company.rating} />
                <HStack mt={1} fontSize="sm">
                  <Text color={textColor}>{company.reviews} avaliações</Text>
                  {company.verified && (
                    <Badge bg={badgeBg} color={badgeColor} fontSize="xs" borderRadius="full" px={2}>
                      Verificado
                    </Badge>
                  )}
                </HStack>
              </VStack>
            </Flex>
          </Link>
        ))}
      </VStack>
    )
  }

  return (
    <>
      {companies.map((company, index) => (
        <Link key={company.id} to={`/company/${company.id}`}>
          <Box
            bg={bgColor}
            borderRadius="22px"
            overflow="hidden"
            boxShadow="md"
            borderWidth="1px"
            borderColor={borderColor}
            p={4}
            position="relative"
            cursor="pointer"
            _hover={{ 
              transform: "translateY(-4px)",
              outline: "2px solid",
              outlineColor: "blue.500",
              outlineOffset: "3px"
            }}
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
                borderRadius="16px"
                bg="white"
                p={1}
              />
              <Text fontWeight="bold" fontSize="md" noOfLines={1} textAlign="center">
                {company.name}
              </Text>
              <StarRating rating={company.rating} />
              <HStack mt={2} fontSize="sm">
                <Text color={textColor}>{company.reviews} avaliações</Text>
                {company.verified && (
                  <Badge bg={badgeBg} color={badgeColor} fontSize="xs" borderRadius="full" px={2}>
                    Verificado
                  </Badge>
                )}
              </HStack>
            </Flex>
          </Box>
        </Link>
      ))}
    </>
  )
} 