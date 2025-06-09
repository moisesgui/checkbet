import { extendTheme, type ThemeConfig } from "@chakra-ui/react"
import type { StyleFunctionProps } from "@chakra-ui/theme-tools"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const colors = {
  brand: {
    50: "#e6f7ff",
    100: "#b3e0ff",
    200: "#80caff",
    300: "#4db3ff",
    400: "#1a9dff",
    500: "#0080ff",
    600: "#0066cc",
    700: "#004d99",
    800: "#003366",
    900: "#001a33",
  },
  success: {
    500: "#38A169",
  },
  warning: {
    500: "#F6AD55",
  },
  danger: {
    500: "#E53E3E",
  },
}

const fonts = {
  heading: "Inter, system-ui, sans-serif",
  body: "Inter, system-ui, sans-serif",
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: props.colorMode === "dark" ? "gray.900" : "gray.50",
      color: props.colorMode === "dark" ? "white" : "gray.800",
    },
  }),
}

const components = {
  Button: {
    baseStyle: {
      fontWeight: "600",
      borderRadius: "md",
    },
    variants: {
      solid: (props: StyleFunctionProps) => ({
        bg: props.colorMode === "dark" ? "brand.500" : "brand.500",
        color: "white",
        _hover: {
          bg: props.colorMode === "dark" ? "brand.600" : "brand.600",
        },
      }),
    },
  },
  Card: {
    baseStyle: (props: StyleFunctionProps) => ({
      container: {
        bg: props.colorMode === "dark" ? "gray.800" : "white",
        borderRadius: "22px",
        boxShadow: "md",
        overflow: "hidden",
      },
    }),
  },
}

export const theme = extendTheme({
  config,
  colors,
  fonts,
  styles,
  components,
})
