import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const customTheme = extendTheme({
  fonts: {
    heading: "'BundesSans Web', sans-serif",
    body: "'Roboto', sans-serif",
  },
  styles: {
    global: (props: any) => ({
      body: {
        color: mode('gray.700', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.900')(props),
        fontSize: '1.0em',
        '.deleted': {
          color: '#ff8383 !important',
          fontStyle: 'normal !important',
        },
        '.inserted': {
          color: '#b5f4a5 !important',
          fontStyle: 'normal !important',
        },
      },
      // a: {
      //   color: mode('green.500', 'green.200')(props),
      //   transition: 'color 0.15s',
      //   transitionTimingFunction: 'ease-out',
      //   fontWeight: '500',
      //   _hover: {
      //     color: mode('green.600', 'green.300')(props),
      //   },
      // },
    }),
  },
  colors: {
    primary: {
      50: '#ffe2ec',
      100: '#ffb3c5',
      200: '#fc839f',
      300: '#f95278',
      400: '#f62252',
      500: '#dd0939',
      600: '#ad032c',
      700: '#7c001e',
      800: '#4d0012',
      900: '#200005',
    },
    secondary: {
      50: '#e9e5ff',
      100: '#beb4ff',
      200: '#9284fc',
      300: '#6653f9',
      400: '#3b22f6',
      500: '#2109dd',
      600: '#1906ad',
      700: '#0f047d',
      800: '#07024d',
      900: '#03001f',
    },

    primaryWD: (props: any) => ({
      50: mode('#ffe2ec', '#ffe2ec')(props),
      100: mode('#ffb3c5', '#ffb3c5')(props),
      200: mode('#fc839f', '#fc839f')(props),
      300: mode('#f95278', '#f95278')(props),
      400: mode('#f62252', '#f62252')(props),
      500: mode('#dd0939', '#dd0939')(props),
      600: mode('#ad032c', '#ad032c')(props),
      700: mode('#7c001e', '#7c001e')(props),
      800: mode('#4d0012', '#4d0012')(props),
      900: mode('#200005', '#200005')(props),
    }),
  },
  components: {
    Heading: {
      baseStyle: (props: any) => {
        const { colorScheme: c } = props;
        return {
          color: c === 'gray' ? mode(`inherit`, `whiteAlpha.900`)(props) : mode(`${c}.600`, `${c}.300`)(props),
        };
      },
    },
    Text: {
      baseStyle: (props: any) => {
        const { colorScheme: c } = props;
        return {
          color: c === 'gray' ? mode(`inherit`, `whiteAlpha.900`)(props) : mode(`${c}.600`, `${c}.300`)(props),
        };
      },
    },
    Button: {
      baseStyle: {
        fontWeight: '500',
        rounded: '5',
      },
    },
    Tag: {
      baseStyle: {
        rounded: 'lg',
      },
    },
    textarea: {
      baseStyle: {
        background: 'green.300',
      },
    },
    Link: {
      baseStyle: {
        fontWeight: 'inherit',
        _hover: {
          textDecoration: 'none',
        },
      },
      variants: {
        text: {
          color: 'blue.400',
          transition: 'color 0.15s',
          transitionTimingFunction: 'ease-out',
          fontWeight: '500',
          _hover: {
            color: 'blue.300',
          },
        },
        gradient: {
          bgGradient: 'linear(to-br, blue.400,blue.300)',
          bgClip: 'text',
          fontWeight: '500',
          _hover: {
            bgGradient: 'linear(to-br, blue.500,blue.300)',
            bgClip: 'text',
          },
        },
      },
    },
  },
});

export default customTheme;
