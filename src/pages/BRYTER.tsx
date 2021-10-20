import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { useEffect } from 'react';

interface FeatureProps {
  id: string;
}

export const Bryter = ({ id, ...rest }: FeatureProps) => {
  const type: string = '';

  const bryterURLs = {
    mangel: '',
  };

  useEffect(() => {
    function handleResize() {
      if (
        document.getElementsByTagName('iframe')[0].offsetHeight != document.getElementById('iframeBox')!.offsetHeight
      ) {
        document.getElementsByTagName('iframe')[0].height = String(document.getElementById('iframeBox')!.offsetHeight);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);
  });

  return (
    <Box id="iframeBox" flex="1">
      <iframe
        title="Bryter"
        src="https://openprogram.bryter.io/s/KGITdkStRbemIKQWkrJH3A/klagegenerierung-mietmangel?antr[…]%C3%A4ngelbeseitigung,%20Mietminderung&mangelBehoben=false"
        onLoad={(o) => {
          //o.o.style.height = o.contentWindow.document.body.scrollHeight + 'px';
        }}
        style={{
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
