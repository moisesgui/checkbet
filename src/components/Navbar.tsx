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
          <Link to="/">
            <Flex align="center" cursor="pointer">
              <Text fontSize="xl" fontWeight="bold" color="brand.500">
                CheckBet
              </Text>
            </Flex>
          </Link>

          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Open menu"
            icon={<FiMenu />}
            onClick={onOpen}
            variant="ghost"
          />

          <HStack spacing={4} display={{ base: "none", md: "flex" }} flex={1} justify="center">
            <form onSubmit={handleSearch} style={{ width: "100%", maxWidth: "800px" }}>
              <InputGroup size="lg">
                <InputLeftElement pointerEvents="none">
                  <FiSearch size={20} />
                </InputLeftElement>
                <Input
                  placeholder="Pesquisar empresas..."
                  borderRadius="full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  height="48px"
                />
              </InputGroup>
            </form>
          </HStack>

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
                  <MenuItem icon={<FiUser size={16} />}>Perfil</MenuItem>
                  <MenuItem icon={<FiSettings size={16} />}>Configurações</MenuItem>
                  <MenuItem icon={<FiLogOut size={16} />} onClick={logout}>
                    Sair
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button size="sm" colorScheme="brand">
                Entrar
              </Button>
            )}
          </HStack>
        </Flex>
      </Container>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              <form onSubmit={handleSearch} style={{ width: "100%", maxWidth: "800px" }}>
                <InputGroup size="lg">
                  <InputLeftElement pointerEvents="none">
                    <FiSearch size={20} />
                  </InputLeftElement>
                  <Input
                    placeholder="Pesquisar empresas..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    height="48px"
                  />
                </InputGroup>
              </form>

              <Button
                leftIcon={colorMode === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
                onClick={toggleColorMode}
                justifyContent="flex-start"
                variant="ghost"
              >
                {colorMode === "light" ? "Modo Escuro" : "Modo Claro"}
              </Button>

              {user ? (
                <>
                  <Button leftIcon={<FiUser size={18} />} justifyContent="flex-start" variant="ghost">
                    Perfil
                  </Button>
                  <Button leftIcon={<FiSettings size={18} />} justifyContent="flex-start" variant="ghost">
                    Configurações
                  </Button>
                  <Button
                    leftIcon={<FiLogOut size={18} />}
                    justifyContent="flex-start"
                    variant="ghost"
                    onClick={logout}
                  >
                    Sair
                  </Button>
                </>
              ) : (
                <Button colorScheme="brand">Entrar</Button>
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
