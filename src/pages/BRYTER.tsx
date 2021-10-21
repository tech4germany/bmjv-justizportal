import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { useEffect } from 'react';

interface FeatureProps {
  id: string | null;
  query: URLSearchParams;
}

// function test(name: string) {
export const Bryter = ({ id, query, ...rest }: FeatureProps) => {
  const type: string = '';

  const baseURL = 'https://tech4germany.bryter.io/s/';
  const bryterURLs = {
    landlordLetter: `${baseURL}EnTaPD7jRUKEHZA86ss5QA/mietmangel-vermieterschreiben?mangelart=schimmel`,
    claim: `${baseURL}ekV7FMipRvG6G3gpT6TgxQ/mietmangel-klage?mangelart=schimmel`,
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
        src={query.get('mangelanzeige') != null ? bryterURLs.landlordLetter : bryterURLs.claim}
        onLoad={(o) => {}}
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
