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
        <VStack
          textAlign="left"
          margin={margin || '2em'}
          spacing={{ base: '2em', md: '3em' }}
          maxW="60em"
          flex={1}
          {...rest}>
          {children}
        </VStack>
      </HStack>
    </>
  );
};
