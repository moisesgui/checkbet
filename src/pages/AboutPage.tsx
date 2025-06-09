import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"

export const AboutPage = () => {
  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="start">
          <Heading as="h1" size="xl">
            About BET Review Platform
          </Heading>
          <Text fontSize="lg">
            We are the most trusted platform for reviewing and verifying online betting and casino companies. Our
            mission is to provide transparency and protect consumers by offering comprehensive reviews and professional
            verification services.
          </Text>
          <Text>
            Founded by a team of legal experts and industry professionals, we understand the importance of due diligence
            when it comes to online gambling platforms. Our verification services help lawyers, analysts, and everyday
            users make informed decisions about betting companies.
          </Text>
          <Text>
            We believe in transparency, accuracy, and user empowerment. Every review on our platform is carefully
            moderated, and our verification services follow strict legal and regulatory standards to ensure the highest
            quality of information.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
