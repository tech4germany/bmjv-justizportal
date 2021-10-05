import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import { HeroSplit } from '../components/shared/Hero_Split';

interface FeatureProps {}

export const ExitJourney = (props: FeatureProps) => {
  const green = useColorModeValue('green.500', 'green.300');

  return (
    <Box textAlign="left" fontSize="xl">
      <HeroSplit title1='Und Tschüss!' title2='War schön mit dir,' image='https://images.unsplash.com/photo-1546957221-8692bbd29bd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'>
        <Text fontWeight='bold'>aber auf unser Plattform gibt es nichts mehr für dich zu sehen!</Text>
      </HeroSplit>
    </Box>
  );
};
