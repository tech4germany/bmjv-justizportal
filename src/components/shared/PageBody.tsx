import { BoxProps, HStack, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

interface Props extends BoxProps {
  title: string;
}

export const PageBody = ({ children, title, margin, ...rest }: Props) => {
  return (
    <>
      <Helmet>
        <title>Justiz Portal - {title}</title>
      </Helmet>
      <HStack alignSelf="center" justify="center" align="start" width="100%" flex={1}>
        <VStack textAlign="left" margin={margin || 10} spacing={{ base: 10, md: 10 }} maxW={'60rem'} flex={1} {...rest}>
          {children}
        </VStack>
      </HStack>
    </>
  );
};
