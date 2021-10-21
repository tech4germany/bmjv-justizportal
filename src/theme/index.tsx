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
  components: {
    Heading: {
      baseStyle: (props: any) => ({
        borderColor: mode('gray.200', 'gray.700')(props),
        pb: 2,
        fontWeight: 'bold',
        size: 'sm',
      }),
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
