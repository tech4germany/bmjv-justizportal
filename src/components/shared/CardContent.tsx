import { StackProps, VStack } from '@chakra-ui/react';
import * as React from 'react';

interface FeatureProps extends StackProps {
  to?: string;
}

export const CardContent = (props: FeatureProps) => <VStack height="full" p={5} spacing={5} {...props} />;
