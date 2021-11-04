import { StackProps, VStack } from '@chakra-ui/react';
import * as React from 'react';

interface FeatureProps extends StackProps {
  to?: string;
}

export const CardContent = (props: FeatureProps) => <VStack height="full" px={6} py={5} spacing={5} {...props} />;
