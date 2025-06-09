
import type React from "react"

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useColorModeValue,
  Container,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Text,
} from "@chakra-ui/react"
import { FiSearch, FiSun, FiMoon, FiMenu, FiUser, FiLogOut, FiSettings } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../hooks/useAuth"

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [searchQuery, setSearchQuery] = useState("")
  const { user, logout } = useAuth()
  
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to search results or filter companies
      console.log("Searching for:", searchQuery)
    }
  }

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={10}
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      boxShadow="sm"
    >
      <Container maxW="container.xl" py={3}>
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Link to="/">
            <Flex align="center" cursor="pointer">
              <Text fontSize="xl" fontWeight="bold" color="brand.500">
                BET Review
              </Text>
            </Flex>
          </Link>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Open menu"
            icon={<FiMenu />}
            onClick={onOpen}
            variant="ghost"
          />

          {/* Desktop Navigation */}
          <HStack spacing={4} display={{ base: "none", md: "flex" }} flex={1} justify="center">
            <form onSubmit={handleSearch}>
              <InputGroup maxW="400px">
                <InputLeftElement pointerEvents="none">
                  <FiSearch size={18} />
                </InputLeftElement>
                <Input
                  placeholder="Search for companies..."
                  borderRadius="full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </InputGroup>
            </form>
          </HStack>

          {/* Right Side Actions */}
          <HStack spacing={3} display={{ base: "none", md: "flex" }}>
            <IconButton
              aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
              icon={colorMode === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
              onClick={toggleColorMode}
              variant="ghost"
              borderRadius="full"
            />

            {user ? (
              <Menu>
                <MenuButton>
                  <Avatar size="sm" name={user.name} src={user.avatar} />
                </MenuButton>
                <MenuList>
                  <MenuItem icon={<FiUser size={16} />}>Profile</MenuItem>
                  <MenuItem icon={<FiSettings size={16} />}>Settings</MenuItem>
                  <MenuItem icon={<FiLogOut size={16} />} onClick={logout}>
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button size="sm" colorScheme="brand">
                Sign In
              </Button>
            )}
          </HStack>
        </Flex>
      </Container>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              <form onSubmit={handleSearch}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FiSearch size={18} />
                  </InputLeftElement>
                  <Input
                    placeholder="Search for companies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </InputGroup>
              </form>

              <Button
                leftIcon={colorMode === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
                onClick={toggleColorMode}
                justifyContent="flex-start"
                variant="ghost"
              >
                {colorMode === "light" ? "Dark Mode" : "Light Mode"}
              </Button>

              {user ? (
                <>
                  <Button leftIcon={<FiUser size={18} />} justifyContent="flex-start" variant="ghost">
                    Profile
                  </Button>
                  <Button leftIcon={<FiSettings size={18} />} justifyContent="flex-start" variant="ghost">
                    Settings
                  </Button>
                  <Button
                    leftIcon={<FiLogOut size={18} />}
                    justifyContent="flex-start"
                    variant="ghost"
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Button colorScheme="brand">Sign In</Button>
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
