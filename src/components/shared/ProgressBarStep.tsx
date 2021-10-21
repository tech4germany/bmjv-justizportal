import { Box, VStack, Text } from '@chakra-ui/layout';
import * as React from 'react';

interface FeatureProps {
  filled: boolean;
  title: string;
}

export const ProgressBarStep = ({ filled, title, ...rest }: FeatureProps) => {
  return (
    <VStack spacing={0}>
      <Box
        width="7"
        height="7"
        borderRadius="50%"
        backgroundColor="#fff"
        border={filled ? '5px solid #38A169' : '5px solid #EDF2F7'}
      />
      <Box h="0" w="0" marginTop="0">
        <Box width="max-content">
          <Text
            position="relative"
            transform="translateX(-50%)"
            textColor={filled ? 'inherit' : 'gray.300'}
            fontSize="sm"
            display={{ xl: 'inherit', md: 'inherit', lg: 'inherit', base: 'none' }}>
            {title}
          </Text>
        </Box>
      </Box>
    </VStack>
  );
};
