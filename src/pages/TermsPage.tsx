import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"

export const TermsPage = () => {
  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="start">
          <Heading as="h1" size="xl">
            Terms of Service
          </Heading>
          <Text fontSize="lg">Please read these terms carefully before using our platform.</Text>
          <Text>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this
            agreement.
          </Text>
          <Heading as="h2" size="lg">
            Use License
          </Heading>
          <Text>
            Permission is granted to temporarily download one copy of the materials on BET Review Platform's website for
            personal, non-commercial transitory viewing only.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
