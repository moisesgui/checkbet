import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"

export const PrivacyPage = () => {
  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="start">
          <Heading as="h1" size="xl">
            Privacy Policy
          </Heading>
          <Text fontSize="lg">
            Your privacy is important to us. This policy explains how we collect and use your information.
          </Text>
          <Heading as="h2" size="lg">
            Information We Collect
          </Heading>
          <Text>
            We collect information you provide directly to us, such as when you create an account, submit a review, or
            contact us for support.
          </Text>
          <Heading as="h2" size="lg">
            How We Use Your Information
          </Heading>
          <Text>
            We use the information we collect to provide, maintain, and improve our services, process transactions, and
            communicate with you.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
