import Icon from '@chakra-ui/icon';
import { Box, Flex, Link, Spacer, Text } from '@chakra-ui/layout';
import { AiFillCloseCircle } from 'react-icons/ai';
import React from 'react';
import spacing from '../../theme/foundations/spacing';
import { VStack, HStack, IconButton } from '@chakra-ui/react';

export const DisclaimerBanner = ({ ...props }) => {
  return (
    <Box
      top={0}
      width="100%"
      bg={'gray.200'}
      py={{ base: 4 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={'gray.200'}>
      <Flex alignSelf="center" justify="center" align="start" width="100%" flex={1}>
        <HStack align={'center'} justify={'center'} spacing={1} maxW={'60rem'} flex={1}>
          {/* <IconButton variant="ghost" aria-label="open menu" icon={<AiFillCloseCircle />} /> */}
          <Text fontWeight="bold" textAlign="center" fontSize={'small'}>
            Diese Seite ist ein Prototyp des{' '}
            <Link href="https://tech.4germany.org/project/justizsportal/">Tech4Germany Fellowships 2021</Link> und
            bietet keine verbindlichen Rechtsinformationen.
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
};
