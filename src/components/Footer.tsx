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
                BET Review Platform
              </Text>
            </Box>
            <Text fontSize="sm">
              The most trusted platform for reviewing and verifying online betting and casino companies.
            </Text>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="500" fontSize="lg" mb={2}>
              Company
            </Text>
            <Link as={RouterLink} to="/about" color={linkColor} _hover={{ color: linkHoverColor }}>
              About Us
            </Link>
            <Link href="#" color={linkColor} _hover={{ color: linkHoverColor }}>
              Blog
            </Link>
            <Link as={RouterLink} to="/contact" color={linkColor} _hover={{ color: linkHoverColor }}>
              Contact Us
            </Link>
            <Link href="#" color={linkColor} _hover={{ color: linkHoverColor }}>
              Pricing
            </Link>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="500" fontSize="lg" mb={2}>
              Support
            </Text>
            <Link href="#" color={linkColor} _hover={{ color: linkHoverColor }}>
              Help Center
            </Link>
            <Link href="#" color={linkColor} _hover={{ color: linkHoverColor }}>
              Safety Center
            </Link>
            <Link href="#" color={linkColor} _hover={{ color: linkHoverColor }}>
              Community Guidelines
            </Link>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="500" fontSize="lg" mb={2}>
              Legal
            </Text>
            <Link as={RouterLink} to="/privacy" color={linkColor} _hover={{ color: linkHoverColor }}>
              Privacy Policy
            </Link>
            <Link as={RouterLink} to="/terms" color={linkColor} _hover={{ color: linkHoverColor }}>
              Terms of Service
            </Link>
            <Link href="#" color={linkColor} _hover={{ color: linkHoverColor }}>
              Cookie Policy
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Divider borderColor={borderColor} />
      <Box py={4}>
        <Container maxW="container.xl">
          <Text fontSize="sm" textAlign="center">
            © {new Date().getFullYear()} BET Review Platform. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  )
}
