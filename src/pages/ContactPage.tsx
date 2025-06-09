import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"

export const ContactPage = () => {
  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="start">
          <Heading as="h1" size="xl">
            Contact Us
          </Heading>
          <Text fontSize="lg">Get in touch with our team for support, partnerships, or general inquiries.</Text>
          <Text>Email: contact@betreview.com</Text>
          <Text>Phone: +55 11 1234-5678</Text>
          <Text>Address: Rua das Flores, 123 - São Paulo, SP - Brazil</Text>
        </VStack>
      </Container>
    </Box>
  )
}
