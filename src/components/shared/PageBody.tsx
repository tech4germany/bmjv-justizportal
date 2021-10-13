import { BoxProps, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { Helmet } from 'react-helmet';

interface Props extends BoxProps {
  title: string;
}

export const PageBody = ({ children, title, ...rest }: Props) => {
  return (
    <>
      <Helmet>
        <title>Justiz Portal - {title}</title>
      </Helmet>
      <VStack
        alignSelf="center"
        textAlign="left"
        padding="2em"
        spacing={{ base: '2em', md: '3em' }}
        style={{ marginInlineStart: 0 }}
        maxW="60em"
        flex={1}
        {...rest}>
        {children}
      </VStack>
    </>
  );
};
