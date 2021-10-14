import { Box } from '@chakra-ui/react';
import * as React from 'react';

interface FeatureProps {}

export const Bryter = (props: FeatureProps) => {
  return (
    <Box flex="1">
      <iframe
        title="Bryter"
        src="https://openprogram.bryter.io/s/KGITdkStRbemIKQWkrJH3A/klagegenerierung-mietmangel?antr[…]%C3%A4ngelbeseitigung,%20Mietminderung&mangelBehoben=false"
        onLoad={(o) => {
          //o.o.style.height = o.contentWindow.document.body.scrollHeight + 'px';
        }}
        style={{
          height: '100%',
          minHeight: '40em',
          width: '100%',
          display: 'inline',
          border: 'none',
          overflow: 'hidden',
        }}
      />
    </Box>
  );
};
