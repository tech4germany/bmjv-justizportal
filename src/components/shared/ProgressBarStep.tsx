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
        width="12"
        height="12"
        borderRadius="50%"
        backgroundColor="#fff"
        border={filled ? '5px solid green' : '5px solid #EDF2F7'}
      />
      <Box h="0" w="0" marginTop="0">
        <Box width="max-content">
          <Text position="relative" transform="translateX(-50%)">
            {title}
          </Text>
        </Box>
      </Box>
    </VStack>
  );
};
