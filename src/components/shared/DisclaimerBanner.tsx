import Icon from '@chakra-ui/icon';
import { Box, Flex, Link, Spacer, Text } from '@chakra-ui/layout';
import { AiFillCloseCircle } from 'react-icons/ai';
import React, { useState } from 'react';
import spacing from '../../theme/foundations/spacing';
import { VStack, HStack, IconButton } from '@chakra-ui/react';

export const DisclaimerBanner = ({ ...props }) => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <Box
      top={0}
      width="100%"
      bg={'gray.200'}
      py={{ base: 4 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={'gray.200'}
      display={showBanner ? 'inherit' : 'none'}>
      <Flex alignSelf="center" justify="center" align="start" width="100%" flex={1}>
        <Flex align={'center'} justify={'center'} spacing={1} maxW={'60rem'} flex={1}>
          {/* <IconButton variant="ghost" aria-label="open menu" icon={<AiFillCloseCircle />} /> */}
          <Text fontWeight="bold" textAlign="center" fontSize={'small'} flex={1}>
            Diese Seite ist ein Prototyp des{' '}
            <Link href="https://tech.4germany.org/project/justizsportal/">Tech4Germany Fellowships 2021</Link> und
            bietet keine verbindlichen Rechtsinformationen.
          </Text>
        </Flex>
      </Flex>
      <Box h="0" w="0">
        <Box width="max-content">
          <IconButton
            aria-label=""
            icon={<AiFillCloseCircle />}
            variant="ghost"
            onClick={() => setShowBanner(false)}
            position="relative"
            transform="translateX(-75%) translateY(-25%)"
          />
        </Box>
      </Box>
    </Box>
  );
};
