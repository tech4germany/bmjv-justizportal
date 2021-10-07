import { Box, Button, Heading, HStack, Spacer, useColorModeValue, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import * as React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { StatsCard } from '../components/shared/StatsCard';
import { MMGraph } from '../logic/KMParser';

interface FeatureProps {
  id: string | null;
}

export const SolutionExplorer = (props: FeatureProps) => {
  const { id } = props;
  const mmobject = new MMGraph();
  mmobject.initialize();
  const data = mmobject.getNode(id);
  const parent = mmobject.getParent(id);
  const green = useColorModeValue('green.500', 'green.300');

  return (
    <Box textAlign="left">
      <Spacer height={{ base: '1em', md: '1em' }} />

      <VStack padding={'1em'} spacing={'2em'}>
        <Heading>In welchem Bereich Ihres Lebens haben Sie ein Problem?</Heading>

        <Wrap spacing="1.2em" justify="center" align="stretch">
          {data!.children!.map((child) => (
            <WrapItem w={{ base: '9em', md: '10.5em' }}>
              <StatsCard
                link={
                  child.children != undefined && child.children!.length == 1
                    ? `/entitlement?id=${child.children![0].id}`
                    : `?id=${child.id}`
                }
                {...child}
              />
            </WrapItem>
          ))}
        </Wrap>

        <HStack>
          <Button
            rounded={'full'}
            colorScheme="gray"
            as={ReactLink}
            to={`${parent != undefined ? '/solution?id=' + parent.id : '/'}`}>
            Zurück
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};
