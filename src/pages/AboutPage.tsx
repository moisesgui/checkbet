import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"

export const AboutPage = () => {
  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="start">
          <Heading as="h1" size="xl">
            Sobre a Plataforma de Revisão de Apostas
          </Heading>
          <Text fontSize="lg">
            Somos a plataforma mais confiável para revisar e verificar empresas de apostas e cassinos online. Nossa
            missão é fornecer transparência e proteger os consumidores, oferecendo análises abrangentes e serviços
            profissionais de verificação.
          </Text>
          <Text>
            Fundada por uma equipe de especialistas jurídicos e profissionais do setor, entendemos a importância da
            diligência devida quando se trata de plataformas de jogos online. Nossos serviços de verificação ajudam
            advogados, analistas e usuários comuns a tomar decisões informadas sobre empresas de apostas.
          </Text>
          <Text>
            Acreditamos em transparência, precisão e empoderamento do usuário. Cada análise em nossa plataforma é
            cuidadosamente moderada, e nossos serviços de verificação seguem rigorosos padrões legais e regulatórios
            para garantir a mais alta qualidade de informação.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
