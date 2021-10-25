import { mode } from '@chakra-ui/theme-tools';

const styles = {
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
};

export default styles;
