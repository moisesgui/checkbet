import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export const Layout = () => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box flex="1" as="main">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}
