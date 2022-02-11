import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    black: {
      "900": "#000000",
    },
    gray: {
      "700": "#47585B",
      "500": "#999999",
      "200": "#DADADA",
    },
    white: {
      "900": "#ffffff",
      "800": "#F5F8FA"
    },
    yellow: {
      "900": "#FFBA08",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white.800',
        color: 'gray.700'
      }
    }
  }
})