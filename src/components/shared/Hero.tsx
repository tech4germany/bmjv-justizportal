import { Heading, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import * as React from 'react';

interface FeatureProps {
  title: string
  bg?: string
  children: React.ReactNode
}

export const Hero = (props: FeatureProps) => {
  const { title, bg, children } = props
  const bgColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <VStack padding={[6, 12, 20]} spacing={8} bg={bg ? bg : bgColor}>
      <Heading>
        {title}
      </Heading>
      <Text maxWidth={{md: '40em', lg: '50em'}}>
        {children}
      </Text>
    </VStack>
  )
}



