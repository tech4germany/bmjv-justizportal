import { Heading, Text, BoxProps, useColorModeValue, VStack } from '@chakra-ui/react';
import * as React from 'react';

interface FeatureProps extends BoxProps {
  title: string;
  children: React.ReactNode;
}

export const Hero = ({ title, bg, children, ...rest }: FeatureProps) => {
  const bgColor = useColorModeValue('gray.50', 'gray.700');

  return (
    <VStack padding={[5, 10, 16]} spacing={6} bg={bg ? bg : bgColor}>
      <Heading>{title}</Heading>
      <Text maxWidth={{ md: '40em', lg: '50em' }}>{children}</Text>
    </VStack>
  );
};
