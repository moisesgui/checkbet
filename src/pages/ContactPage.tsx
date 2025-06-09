import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"

export const ContactPage = () => {
  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="start">
          <Heading as="h1" size="xl">
            Entre em Contato
          </Heading>
          <Text fontSize="lg">Entre em contato com nossa equipe para suporte, parcerias ou consultas gerais.</Text>
          <Text>Email: contato@betreview.com</Text>
          <Text>Telefone: +55 11 1234-5678</Text>
          <Text>Endereço: Rua das Flores, 123 - São Paulo, SP - Brasil</Text>
        </VStack>
      </Container>
    </Box>
  )
}
