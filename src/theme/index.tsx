import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { Secondary } from '../Const';

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
    }),
  },
  colors: {
    primary: {
      50: '#e3faec',
      100: '#c5e8d3',
      200: '#a4d8b9',
      300: '#83c7a0',
      400: '#61b789',
      500: '#489e69',
      600: '#367b4c',
      700: '#255833',
      800: '#12361a',
      900: '#011400',
    },
    secondary: {
      50: '#FFFAF0',
      100: '#FEEBC8',
      200: '#FBD38D',
      300: '#F6AD55',
      400: '#ED8936',
      500: '#DD6B20',
      600: '#C05621',
      700: '#9C4221',
      800: '#7B341E',
      900: '#652B19',
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
          py: '0.1em',
          color: c === 'gray' ? mode(`inherit`, `whiteAlpha.900`)(props) : mode(`${c}.500`, `${c}.300`)(props),
        };
      },
    },
    Text: {
      baseStyle: (props: any) => {
        const { colorScheme: c } = props;
        return {
          color: c === 'gray' ? mode(`inherit`, `whiteAlpha.900`)(props) : mode(`${c}.500`, `${c}.300`)(props),
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
        background: 'primary.300',
      },
    },
    Link: {
      baseStyle: (props: any) => ({
        color: Secondary(),
        transition: 'color 0.15s',
        transitionTimingFunction: 'ease-out',
        fontWeight: '500',
        _hover: {
          color: mode('secondary.300', 'secondary.200')(props),
          textDecoration: 'none',
        },
      }),
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
