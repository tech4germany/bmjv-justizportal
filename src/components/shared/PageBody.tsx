import { StackProps, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

interface Props extends StackProps {
  title: string;
}

export const PageBody = ({ children, title, ...rest }: Props) => {
  return (
    <>
      <Helmet>
        <title>Justiz Portal - {title}</title>
      </Helmet>
      <VStack textAlign="left" flex={1} paddingBottom={10} spacing={0} {...rest}>
        {children}
      </VStack>
    </>
  );
};
