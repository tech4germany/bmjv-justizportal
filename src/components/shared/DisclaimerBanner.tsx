import { Box, Link, Text } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
import { Trans } from '@lingui/macro';
import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

export const DisclaimerBanner = ({ ...props }) => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <Box
      width="100%"
      bg={'gray.200'}
      p={4}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={'gray.200'}
      display={showBanner ? 'inherit' : 'none'}>
      <Text fontWeight="bold" textAlign="center" fontSize={'small'} px={5} flex={1}>
        <Trans id="banner">
          Diese Seite ist ein Prototyp des{' '}
          <Link href="https://tech.4germany.org/project/digitale-klagewege-bmjv/">Tech4Germany Fellowships 2021</Link>{' '}
          und bietet keine verbindlichen Rechtsinformationen.
        </Trans>
      </Text>
      <Box position="relative">
        <IconButton
          aria-label=""
          icon={<AiFillCloseCircle />}
          variant="ghost"
          onClick={() => setShowBanner(false)}
          position="absolute"
          transform="translateX(-75%) translateY(-25%)"
        />
      </Box>
    </Box>
  );
};
