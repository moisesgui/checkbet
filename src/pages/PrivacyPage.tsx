import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"

export const PrivacyPage = () => {
  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="start">
          <Heading as="h1" size="xl">
            Política de Privacidade
          </Heading>
          <Text fontSize="lg">
            Sua privacidade é importante para nós. Esta política explica como coletamos e usamos suas informações.
          </Text>
          <Heading as="h2" size="lg">
            Informações que Coletamos
          </Heading>
          <Text>
            Coletamos informações que você nos fornece diretamente, como quando cria uma conta, envia uma análise ou
            entra em contato conosco para suporte.
          </Text>
          <Heading as="h2" size="lg">
            Como Usamos Suas Informações
          </Heading>
          <Text>
            Usamos as informações coletadas para fornecer, manter e melhorar nossos serviços, processar transações e
            nos comunicar com você.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
