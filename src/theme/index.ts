import { extendTheme } from '@chakra-ui/react';
import foundations from './foundations';
import { mode } from '@chakra-ui/theme-tools';
import { Secondary } from '../Const';

const direction = 'ltr';

const config = {
  useSystemColorMode: true,
  initialColorMode: 'dark',
  cssVarPrefix: 'chakra',
};

export const theme = {
  direction,
  ...foundations,
  config,
};

export default extendTheme(theme);
