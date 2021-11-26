import { Flex, Heading } from '@chakra-ui/react';
import * as React from 'react';
import { IconType } from 'react-icons';

interface Props {
  title: string;
  IconLeft?: IconType;
}

export const CardHeader = ({ title, IconLeft }: Props) => {
  return (
    <Flex align="center" justify="start" alignItems="center" px="6" py="4" borderBottomWidth="1px">
      {IconLeft && <IconLeft size="1.2em" />}
      <Heading as="h2" paddingBottom={1} ps={IconLeft && 3} fontSize="lg">
        {title}
      </Heading>
    </Flex>
  );
};
