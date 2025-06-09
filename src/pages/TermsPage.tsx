import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"

export const TermsPage = () => {
  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="start">
          <Heading as="h1" size="xl">
            Termos de Serviço
          </Heading>
          <Text fontSize="lg">Por favor, leia estes termos com atenção antes de usar nossa plataforma.</Text>
          <Text>
            Ao acessar e usar este site, você aceita e concorda em estar vinculado aos termos e condições deste
            acordo.
          </Text>
          <Heading as="h2" size="lg">
            Licença de Uso
          </Heading>
          <Text>
            É concedida permissão para baixar temporariamente uma cópia dos materiais no site da Plataforma de Revisão
            de Apostas apenas para visualização pessoal e não comercial.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
