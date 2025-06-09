import {
  Box,
  Flex,
  Text,
  Image,
  Badge,
  Button,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react"
import { FiStar, FiMapPin } from "react-icons/fi"
import { Link } from "react-router-dom"
import type { Company } from "../types"

interface CompanyCardProps {
  company: Company
}

const StarRating = ({ rating }: { rating: number }) => {
  const filledColor = useColorModeValue("yellow.400", "yellow.300")
  const emptyColor = useColorModeValue("gray.300", "gray.600")

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
      {verified ? "Verificado" : "Não Verificado"}
    </Badge>
  )
}

export const CompanyCard = ({ company }: CompanyCardProps) => {
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const emptyColor = useColorModeValue("gray.300", "gray.600")
  const textColor = useColorModeValue("gray.700", "gray.300")

  return (
    <Box
      bg={bgColor}
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="lg"
      borderWidth="1px"
      borderColor={borderColor}
      height="100%"
      display="flex"
      flexDirection="column"
      _hover={{ 
        transform: "translateY(-4px)",
        outline: "2px solid",
        outlineColor: "blue.500",
        outlineOffset: "3px"
      }}
    >
      {/* Header with logo and basic info */}
      <Flex 
        p={6} 
        align="center" 
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
        }}
      >
        <Image
          src={company.logo}
          alt={company.name}
          boxSize="80px"
          objectFit="contain"
          mr={5}
          borderRadius="22px"
          bg="transparent"
          p={2}
          flexShrink={0}
        />
        <VStack align="start" spacing={2} flex="1" minW={0}>
          <HStack justify="space-between" width="full">
            <Text 
              fontWeight="bold" 
              fontSize="xl" 
              color="gray.800"
              isTruncated
              maxW="70%"
            >
              {company.name}
            </Text>
            <StatusBadge verified={company.verified} />
          </HStack>
          <HStack spacing={4} wrap="wrap">
            <HStack>
              <StarRating rating={company.rating} />
              <Text fontSize="sm" color={emptyColor} fontWeight="medium">
                ({company.reviews} avaliações)
              </Text>
            </HStack>
            <HStack>
              <Icon as={FiMapPin} color="gray.500" />
              <Text fontSize="sm" color="gray.600" fontWeight="medium">
                {company.country}
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </Flex>

      <Divider borderColor={borderColor} />

      <Box p={6} flex="1" display="flex" flexDirection="column">
        <Text 
          fontSize="md" 
          color={textColor} 
          lineHeight="tall"
          mb={6}
          noOfLines={3}
          flex="1"
        >
          {company.summary}
        </Text>
        <Button 
          as={Link} 
          to={`/company/${company.id}`} 
          size="lg" 
          width="full" 
          colorScheme="brand"
          borderRadius="xl"
          fontWeight="semibold"
          mt="auto"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "md"
          }}
        >
          Ver Detalhes
        </Button>
      </Box>
    </Box>
  )
} 