import { mode } from '@chakra-ui/theme-tools';
import { Primary } from '../../Const';

const components = {
  Heading: {
    baseStyle: (props: any) => {
      const { colorScheme: c } = props;
      return {
        py: '0.1em',
        textAlign: 'center',
        alignSelf: 'center',
        color: c === 'gray' ? mode(`inherit`, `whiteAlpha.900`)(props) : mode(`${c}.500`, `${c}.300`)(props),
      };
    },
    variants: {
      subheading: {
        textAlign: 'start',
        alignSelf: 'unset',
        fontSize: '2xl',
      },
    },
    defaultProps: {
      size: 'lg',
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
      rounded: 'full',
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
      color: Primary(),
      transition: 'color 0.15s',
      transitionTimingFunction: 'ease-out',
      fontWeight: '500',
      _hover: {
        color: mode('primary.300', 'primary.200')(props),
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
};

export default components;
