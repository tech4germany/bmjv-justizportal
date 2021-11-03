import { Box, Flex, Link, Text } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
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
      <Text fontWeight="bold" textAlign="center" fontSize={'small'} flex={1}>
        Diese Seite ist ein Prototyp des{' '}
        <Link href="https://tech.4germany.org/project/justizsportal/">Tech4Germany Fellowships 2021</Link> und bietet
        keine verbindlichen Rechtsinformationen.
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
