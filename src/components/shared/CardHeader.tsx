import { Flex, Heading } from '@chakra-ui/react';
import * as React from 'react';

interface Props {
  title: string;
  iconLeft?: React.ReactNode;
}

export const CardHeader = ({ title, iconLeft }: Props) => {
  const IconComponent: any = iconLeft;

  return (
    <Flex align="center" justify="start" alignItems="center" px="6" py="4" borderBottomWidth="1px">
      {IconComponent ?? <IconComponent size="1.2em" />}
      <Heading as="h2" px={3} paddingBottom={1} fontSize="lg">
        {title}
      </Heading>
    </Flex>
  );
};
