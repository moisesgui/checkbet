import { Box, Container, SimpleGrid, Stack, Text, Link, useColorModeValue, Divider } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

export const Footer = () => {
  const linkColor = useColorModeValue("gray.600", "gray.400")
  const linkHoverColor = useColorModeValue("gray.800", "white")
  const bgColor = useColorModeValue("gray.50", "gray.900")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <Box bg={bgColor} color={useColorModeValue("gray.700", "gray.200")} borderTop="1px" borderColor={borderColor}>
      <Container as={Stack} maxW="container.xl" py={10}>
        <SimpleGrid templateColumns={{ base: "1fr", md: "2fr 1fr 1fr 1fr" }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Text fontSize="lg" fontWeight="bold" color="brand.500">
                Plataforma de Revisão de Apostas
              </Text>
            </Box>
            <Text fontSize="sm">
              A plataforma mais confiável para revisar e verificar empresas de apostas e cassinos online.
            </Text>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="500" fontSize="lg" mb={2}>
              Empresa
            </Text>
            <Link as={RouterLink} to="/about" color={linkColor} _hover={{ color: linkHoverColor }}>
              Sobre Nós
            </Link>
            <Link href="#" color={linkColor} _hover={{ color: linkHoverColor }}>
              Blog
            </Link>
            <Link as={RouterLink} to="/contact" color={linkColor} _hover={{ color: linkHoverColor }}>
              Contato
            </Link>
            <Link href="#" color={linkColor} _hover={{ color: linkHoverColor }}>
              Preços
            </Link>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="500" fontSize="lg" mb={2}>
              Suporte
            </Text>
            <Link href="#" color={linkColor} _hover={{ color: linkHoverColor }}>
              Central de Ajuda
            </Link>
            <Link href="#" color={linkColor} _hover={{ color: linkHoverColor }}>
              Centro de Segurança
            </Link>
            <Link href="#" color={linkColor} _hover={{ color: linkHoverColor }}>
              Diretrizes da Comunidade
            </Link>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="500" fontSize="lg" mb={2}>
              Legal
            </Text>
            <Link as={RouterLink} to="/privacy" color={linkColor} _hover={{ color: linkHoverColor }}>
              Política de Privacidade
            </Link>
            <Link as={RouterLink} to="/terms" color={linkColor} _hover={{ color: linkHoverColor }}>
              Termos de Serviço
            </Link>
            <Link href="#" color={linkColor} _hover={{ color: linkHoverColor }}>
              Política de Cookies
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Divider borderColor={borderColor} />
      <Box py={4}>
        <Container maxW="container.xl">
          <Text fontSize="sm" textAlign="center">
            © {new Date().getFullYear()} Plataforma de Revisão de Apostas. Todos os direitos reservados.
          </Text>
        </Container>
      </Box>
    </Box>
  )
}
