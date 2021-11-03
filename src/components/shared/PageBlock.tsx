import { StackProps, VStack } from '@chakra-ui/react';
import * as React from 'react';

interface FeatureProps extends StackProps {
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
  size?: 'full' | 'wide';
}

export const PageBlock = ({ children, size, ...rest }: FeatureProps) => {
  return (
    <VStack
      width="100%"
      px={size == 'full' ? undefined : size == 'wide' ? 0 : { base: 6, md: 0 }}
      py={10}
      align="start"
      spacing={5}
      {...rest}>
      <VStack align="start" alignSelf="center" spacing={10} maxW="100%" width={size == 'full' ? '100%' : 800}>
        {children}
      </VStack>
    </VStack>
  );
};
