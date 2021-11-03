import { StackProps, VStack } from '@chakra-ui/react';
import * as React from 'react';

interface FeatureProps extends StackProps {
  children: React.ReactNode;
  id?: string;
  ref?: React.RefObject<HTMLDivElement>;
  size?: 'full' | 'wide';
}

export const PageBlock = React.forwardRef(
  ({ children, size, bg, background, ...rest }: FeatureProps, ref: React.LegacyRef<HTMLDivElement>) => (
    <VStack width="100%" bg={bg} background={background}>
      <VStack
        py={10}
        align="start"
        alignSelf="center"
        spacing={10}
        maxW={size == 'full' || size == 'wide' ? '100%' : 'calc(100% - 2em)'}
        width={size == 'full' ? '100%' : '50em'}
        ref={ref}
        {...rest}>
        {children}
      </VStack>
    </VStack>
  )
);
