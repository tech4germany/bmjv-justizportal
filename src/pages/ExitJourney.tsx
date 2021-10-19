import { Box, Button, Heading, Spacer, Text, VStack } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { PageBody } from '../components/shared/PageBody';
import { MMGraph } from '../logic/KMParser';

interface FeatureProps {
  id: string | null;
  mmobject: MMGraph;
}

export const ExitJourney = ({ id, mmobject, ...rest }: FeatureProps) => {
  const data = mmobject.getNode(id);

  return (
    <PageBody title="Lösungsfinder">
      <Heading>Leider können wir Sie nicht weiter unterstützen</Heading>
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
        <ReactMarkdown components={ChakraUIRenderer()}>{data?.info ? data.info : ''}</ReactMarkdown>
      </Box>
      <VStack>
        {/* <Text>
          Leider können wir Sie bei Ihrem Anliegen nicht weiter unterstützen, da unser Portal nur zu einer Reihe von
          häufigen Alltagsfällen informiert. Wir arbeiten jedoch kontinuierlich weiter am Justizportal, um weitere Fälle
          abzudecken.
        </Text> */}
        <Text>
          Sie suchen noch weitere Unterstützung? Dann können Sie sich an rechtliche Berartungsstellen wenden, die Sie
          individuell zu Ihrem Fall informieren können. In einer Beratung beurteilen Expert:innen, ob rechtliche Ansprüche bestehen und wie Sie
          diese am besten durchsetzen können. Dafür haben wir auf der folgenden Seite einen Überblick zusammengestellt.
        </Text>
        <Spacer minH={10}></Spacer>
        <Button colorScheme={'green'} as={ReactLink} to="/beratungsangebote" children={t`Zu den Beratungsangeboten`} />
      </VStack>
    </PageBody>
  );
};
