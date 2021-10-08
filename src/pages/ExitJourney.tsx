import { Box, HStack, Spacer, Text, useColorModeValue } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import * as React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { HeroSplit } from '../components/shared/Hero_Split';
import { MMGraph } from '../logic/KMParser';

interface FeatureProps {
  id: string;
  mmobject: MMGraph;
}

export const ExitJourney = (props: FeatureProps) => {
  const { id, mmobject } = props;

  const data = mmobject.getNode(id);

  return (
    <Box textAlign="left" fontSize="xl">
      <HeroSplit
        title1="Und Tschüss!"
        title2="War schön mit dir,"
        image="https://images.unsplash.com/photo-1546957221-8692bbd29bd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80">
        <Text fontWeight="bold">aber auf unser Plattform gibt es nichts mehr für dich zu sehen!</Text>
        <Box
          display={data.info ? '' : 'none'}
          padding="1em"
          shadow="0px 0px 0.5em gray"
          border="1px solid"
          height="100%"
          borderColor="whiteAlpha.400"
          bg="whiteAlpha.200"
          rounded="lg"
          _hover={{
            transitionDuration: '0.2s',
            bg: 'whiteAlpha.400',
          }}>
          <HStack>
            <FaInfoCircle size="1.2em" />
            <Text fontWeight="bold">Aber warum?</Text>
          </HStack>
          <Spacer height="1em" />
          <ReactMarkdown components={ChakraUIRenderer()}>{data?.info ? data.info : ''}</ReactMarkdown>
        </Box>
      </HeroSplit>
    </Box>
  );
};
