import { Flex, Heading } from '@chakra-ui/react';
import * as React from 'react';

interface Props {
  title: string;
  action?: React.ReactNode;
}

export const CardHeader = ({ title, action }: Props) => {
  return (
    <Flex align="center" justify="start" alignItems="center" px="6" py="4" borderBottomWidth="1px">
      {action}
      <Heading as="h2" px={3} paddingBottom={1} fontSize="lg">
        {title}
      </Heading>
    </Flex>
  );
};
