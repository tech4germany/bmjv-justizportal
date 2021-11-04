import { Box, Text, VStack } from '@chakra-ui/layout';
import { useColorModeValue as mode } from '@chakra-ui/react';
import * as React from 'react';

interface FeatureProps {
  filled: boolean;
  title: string;
  number: number;
}

export const ProgressBarStep = ({ filled, title, number, ...rest }: FeatureProps) => {
  return (
    <VStack spacing={0} textColor={filled ? 'inherit' : 'gray.300'} zIndex="1">
      <Box
        width="7"
        height="7"
        borderRadius="full"
        backgroundColor={filled ? mode('primary.500', 'primary.200') : 'background-color'}
        border={filled ? 'none' : '4px solid'}
        borderColor={filled ? undefined : mode('gray.100', '#3c3e46')}>
        <Text
          textColor={filled ? 'white' : mode('gray.300', 'gray.600')}
          fontWeight="bold"
          fontSize="sm"
          position="relative"
          top="50%"
          left="50%"
          transform="translateX(-50%)  translateY(-50%)"
          textAlign="center">
          {number}
        </Text>
      </Box>
      <Box h="0" w="0" marginTop="0">
        <Box paddingTop={1} width="max-content">
          <Text
            position="relative"
            transform="translateX(-50%)"
            textColor={filled ? 'inherit' : mode('gray.300', 'gray.600')}
            fontSize="xs"
            display={{ md: 'inherit', base: 'inherit' }}>
            {title}
          </Text>
        </Box>
      </Box>
    </VStack>
  );
};
