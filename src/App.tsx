import { Box } from "@chakra-ui/react"
import { AppRoutes } from "./routes"
import { AuthProvider } from "./contexts/AuthContext"

function App() {
  return (
    <AuthProvider>
      <Box minH="100vh" bg="gray.50" _dark={{ bg: "gray.900" }}>
        <AppRoutes />
      </Box>
    </AuthProvider>
  )
}

export default App
