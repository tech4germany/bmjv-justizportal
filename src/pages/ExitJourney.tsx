import { Box, Heading, HStack, Spacer, Text, useColorModeValue } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import * as React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { HeroSplit } from '../components/shared/Hero_Split';
import { MMGraph } from '../logic/KMParser';
import { PageBody } from '../components/shared/PageBody';

interface FeatureProps {
  id: string | null;
  mmobject: MMGraph;
}

export const ExitJourney = ({ id, mmobject, ...rest }: FeatureProps) => {
  const data = mmobject.getNode(id);

  return (
    <PageBody title="Lösungsfinder Ende">
      <Heading>Ende</Heading>
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
    </PageBody>
  );
};
