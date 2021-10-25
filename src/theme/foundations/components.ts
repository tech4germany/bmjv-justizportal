import { mode } from '@chakra-ui/theme-tools';
import { Secondary } from '../../Const';

const components = {
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
};

export default components;
