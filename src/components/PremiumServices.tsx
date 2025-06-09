import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Badge,
  Icon,
} from "@chakra-ui/react"
import { FiCheck, FiX, FiShield, FiAlertTriangle, FiFileText } from "react-icons/fi"

// Service tiers data
const serviceTiers = [
  {
    name: "Básico",
    price: "R$24",
    description: "Verificação essencial para sites de apostas pequenos",
    features: [
      { name: "Informações da Receita Federal", included: true },
      { name: "Dados do CEFaz", included: true },
      { name: "Situação jurídica", included: true },
      { name: "Representantes legais", included: false },
      { name: "Verificação de sede", included: false },
      { name: "Processos em aberto", included: false },
    ],
    icon: FiAlertTriangle,
    color: "blue",
  },
  {
    name: "Avançado",
    price: "R$48",
    description: "Verificação abrangente para plataformas estabelecidas",
    features: [
      { name: "Informações da Receita Federal", included: true },
      { name: "Dados do CEFaz", included: true },
      { name: "Situação jurídica", included: true },
      { name: "Representantes legais", included: true },
      { name: "Verificação de sede", included: true },
      { name: "Processos em aberto", included: false },
    ],
    icon: FiShield,
    color: "purple",
    popular: true,
  },
  {
    name: "Completo",
    price: "R$80",
    description: "Verificação completa com todas as verificações disponíveis",
    features: [
      { name: "Informações da Receita Federal", included: true },
      { name: "Dados do CEFaz", included: true },
      { name: "Situação jurídica", included: true },
      { name: "Representantes legais", included: true },
      { name: "Verificação de sede", included: true },
      { name: "Processos em aberto", included: true },
    ],
    icon: FiFileText,
    color: "green",
  },
]

export const PremiumServices = () => {
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const headingColor = useColorModeValue("gray.700", "white")
  const popularBg = useColorModeValue("purple.50", "purple.900")
  const popularBorder = useColorModeValue("purple.200", "purple.700")
  const textColor = useColorModeValue("gray.600", "gray.400")
  const buttonBgColor = useColorModeValue("gray.50", "gray.700")

  return (
    <Box py={12} bg={bgColor}>
      <Container maxW="container.xl">
        <VStack spacing={4} mb={10} textAlign="center">
          <Heading as="h2" size="xl" color={headingColor}>
            Serviços Premium de Verificação
          </Heading>
          <Text fontSize="lg" maxW="800px">
            Garanta a legitimidade das plataformas de apostas com nossos serviços profissionais de verificação. Proteja
            você e seus clientes com verificações jurídicas e financeiras abrangentes.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} alignItems="stretch">
          {serviceTiers.map((tier) => (
            <Box
              key={tier.name}
              bg={tier.popular ? popularBg : bgColor}
              borderRadius="22px"
              overflow="hidden"
              boxShadow="lg"
              borderWidth="1px"
              borderColor={tier.popular ? popularBorder : borderColor}
              position="relative"
              transform={tier.popular ? { md: "scale(1.05)" } : "none"}
              zIndex={tier.popular ? 1 : 0}
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
            >
              {tier.popular && (
                <Badge colorScheme="purple" position="absolute" top={4} right={4} borderRadius="full" px={3} py={1}>
                  Mais Popular
                </Badge>
              )}

              <Box p={6}>
                <VStack spacing={4} align="stretch">
                  <HStack>
                    <Icon as={tier.icon} boxSize={6} color={`${tier.color}.500`} />
                    <Heading as="h3" size="lg">
                      {tier.name}
                    </Heading>
                  </HStack>

                  <Heading as="h4" size="2xl">
                    {tier.price}
                    <Box as="span" fontSize="md" fontWeight="normal">
                      {" "}
                      / por verificação
                    </Box>
                  </Heading>

                  <Text color={textColor}>{tier.description}</Text>

                  <List spacing={3} mt={4}>
                    {tier.features.map((feature) => (
                      <ListItem key={feature.name}>
                        <HStack>
                          <ListIcon
                            as={feature.included ? FiCheck : FiX}
                            color={feature.included ? "green.500" : "red.500"}
                          />
                          <Text>{feature.name}</Text>
                        </HStack>
                      </ListItem>
                    ))}
                  </List>
                </VStack>
              </Box>

              <Box p={6} bg={buttonBgColor}>
                <Button colorScheme={tier.color} size="lg" width="full" variant={tier.popular ? "solid" : "outline"}>
                  Comprar Agora
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
