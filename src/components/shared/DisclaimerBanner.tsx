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
      minH={'60px'}
      py={{ base: 4 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={'gray.200'}>
      <Flex alignSelf="center" justify="center" align="start" width="100%" flex={1}>
        <HStack align={'center'} justify={'center'} spacing={1} maxW={'60rem'} flex={1}>
          {/* <IconButton variant="ghost" aria-label="open menu" icon={<AiFillCloseCircle />} /> */}
          <Text fontWeight="bold" textAlign="center">
            Diese Seite ist ein Prototyp des Tech4Germany Fellowship Jahrgangs 2021. Die Seite wird nicht mehr aktiv
            gepflegt, und für die Richtigkeit der Informationen übernehmen wir keine Gewähr.{' '}
            <Link href="https://tech.4germany.org/project/justizsportal/"> Mehr Informationen.</Link>
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
};
