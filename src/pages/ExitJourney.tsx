import { Button, Heading, HStack, Spacer, Text, VStack } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import * as React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
import { AnnotadedText } from '../components/shared/AnnotatedText';
import { Card } from '../components/shared/Card';
import { CardContent } from '../components/shared/CardContent';
import { CardHeader } from '../components/shared/CardHeader';
import { PageBody } from '../components/shared/PageBody';
import { homeURL, Routes } from '../Const';
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
      <Card display={data.info ? '' : 'none'}>
        <CardHeader IconLeft={FaInfoCircle} title={`Warum?`} />
        <CardContent>
          <AnnotadedText text={data?.info ? data.info : ''} />
        </CardContent>
      </Card>
      <VStack>
        {/* <Text>
          Leider können wir Sie bei Ihrem Anliegen nicht weiter unterstützen, da unser Portal nur zu einer Reihe von
          häufigen Alltagsfällen informiert. Wir arbeiten jedoch kontinuierlich weiter am Justizportal, um weitere Fälle
          abzudecken.
        </Text> */}
        <Text>
          Sie suchen noch weitere Unterstützung? Dann können Sie sich an rechtliche Berartungsstellen wenden, die Sie
          individuell zu Ihrem Fall informieren können. In einer Beratung beurteilen Expert:innen, ob rechtliche
          Ansprüche bestehen und wie Sie diese am besten durchsetzen können. Dafür haben wir auf der folgenden Seite
          einen Überblick zusammengestellt.
        </Text>
        <Spacer minH={10}></Spacer>
        <HStack spacing="1em">
          <Button
            as={ReactLink}
            to={`${homeURL}/${Routes.SolutionExplorer}?id=${id && mmobject.getParent(id)?.id}`}
            children={t`Zurück`}
          />
          <Button colorScheme={'secondary'} as={ReactLink} to={homeURL} children={t`Zurück zur Homepage`} />
        </HStack>
      </VStack>
    </PageBody>
  );
};
