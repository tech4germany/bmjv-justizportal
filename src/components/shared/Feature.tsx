import { Box, Heading, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { C_DarkGray, Primary } from '../../Const';

interface FeatureProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactElement;
}

export const Feature = (props: FeatureProps) => {
  const { title, children, icon } = props;
  return (
    <Box>
      <Stack spacing={{ base: '4', md: '6' }} direction={{ base: 'column', md: 'row' }}>
        <Box fontSize="6xl" color={Primary()}>
          {icon}
        </Box>
        <Stack spacing="1">
          <Heading size="lg">{title}</Heading>
          <Box color={C_DarkGray()}>{children}</Box>
        </Stack>
      </Stack>
    </Box>
  );
};
