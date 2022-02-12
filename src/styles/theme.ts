import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    black: {
      "900": "#000000",
    },
    gray: {
      "700": "#47585B",
      "500": "#999999",
      '450' : 'rgba(153, 153, 153, 0.5)',
      "200": "#DADADA",
    },
    white: {
      "900": "#ffffff",
      "800": "#F5F8FA"
    },
    yellow: {
      "900": "#FFBA08",
      '850' : 'rgba(255, 186, 8, 0.5)'
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
      },
      '.swiper-button-next': {
        w: '60px',
        h: '60px',
        right: '20px',
        
        '&::after': {
          fontSize: '3xl',
        },
      },
      '.swiper-button-prev': {
        w: '60px',
        h: '60px',
        left: '20px',

        '&::after': {
          fontSize: '3xl',
        },
      },
      '.swiper-button-prev, .swiper-button-next': {
        color: 'yellow.900',
      },
      '.swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled': {
        opacity: 0,
      },
      '.swiper-pagination .swiper-pagination-bullet': {
        bg: 'gray.500',
        opacity: 1,
        w: '16px',
        h: '16px',
  
        '&.swiper-pagination-bullet-active': {
          bg: '#ffba08',
          opacity: 1,
        }
      },
    }
  }
})