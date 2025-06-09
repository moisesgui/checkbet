import {
  Box,
  Flex,
  Text,
  Select,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react"

interface FilterSectionBarProps {
  filters: {
    rating: string
    status: string
    country: string
  }
  setFilters: (filters: { rating: string; status: string; country: string }) => void
  isMobile?: boolean
}

export const FilterSectionBar = ({ filters, setFilters, isMobile = false }: FilterSectionBarProps) => {
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  const FilterContent = () => (
    <>
      <Box flex="1" minW="200px">
        <Text fontSize="sm" mb={2} fontWeight="semibold" color="gray.600">
          Avaliação
        </Text>
        <Select
          size="md"
          value={filters.rating}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilters({ ...filters, rating: e.target.value })}
          borderRadius="lg"
          borderWidth="2px"
          _hover={{ borderColor: "brand.400" }}
          _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
        >
          <option value="all">Todas as Avaliações</option>
          <option value="5">5 Estrelas</option>
          <option value="4">4+ Estrelas</option>
          <option value="3">3+ Estrelas</option>
          <option value="2">2+ Estrelas</option>
          <option value="1">1+ Estrela</option>
        </Select>
      </Box>

      <Box flex="1" minW="200px">
        <Text fontSize="sm" mb={2} fontWeight="semibold" color="gray.600">
          Status Legal
        </Text>
        <Select
          size="md"
          value={filters.status}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilters({ ...filters, status: e.target.value })}
          borderRadius="lg"
          borderWidth="2px"
          _hover={{ borderColor: "brand.400" }}
          _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
        >
          <option value="all">Todos os Status</option>
          <option value="verified">Verificado</option>
          <option value="unverified">Não Verificado</option>
        </Select>
      </Box>

      <Box flex="1" minW="200px">
        <Text fontSize="sm" mb={2} fontWeight="semibold" color="gray.600">
          País
        </Text>
        <Select
          size="md"
          value={filters.country}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilters({ ...filters, country: e.target.value })}
          borderRadius="lg"
          borderWidth="2px"
          _hover={{ borderColor: "brand.400" }}
          _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }}
        >
          <option value="all">Todos os Países</option>
          <option value="Brazil">Brasil</option>
          <option value="Portugal">Portugal</option>
          <option value="USA">EUA</option>
        </Select>
      </Box>
    </>
  )

  if (isMobile) {
    return (
      <Box 
        bg={bgColor} 
        p={6} 
        borderRadius="xl" 
        boxShadow="lg" 
        mb={8} 
        borderWidth="1px" 
        borderColor={borderColor}
        position="relative"
      >
        <VStack gap={6} align="stretch">
          <FilterContent />
        </VStack>
      </Box>
    )
  }

  return (
    <Flex
      bg={bgColor}
      p={6}
      borderRadius="xl"
      boxShadow="lg"
      mb={8}
      borderWidth="1px"
      borderColor={borderColor}
      flexWrap="wrap"
      gap={6}
      position="relative"
    >
      <FilterContent />
    </Flex>
  )
} 