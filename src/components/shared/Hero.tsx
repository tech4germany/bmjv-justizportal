import { Heading, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import * as React from 'react';

interface FeatureProps {
  title: string
  children: React.ReactNode
}

export const Hero = (props: FeatureProps) => {
  const { title, children } = props
  const bgColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <VStack padding={[6, 12, 20]} spacing={8} bg={bgColor}>
      <Heading>
        {title}
      </Heading>
      <Text maxWidth='40em'>
        {children}
      </Text>
    </VStack>
  )
}



