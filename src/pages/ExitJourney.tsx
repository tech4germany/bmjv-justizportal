import { Button, Heading, HStack, Text } from '@chakra-ui/react';
import { t, Trans } from '@lingui/macro';
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
    <PageBody title={t`Weitere Möglichkeiten`}>
      <Heading>
        <Trans id="exit.heading">Leider haben wir Ihren Fall nicht abgedeckt.</Trans>
      </Heading>
      <Card display={data.info ? '' : 'none'}>
        <CardHeader IconLeft={FaInfoCircle} title={`Warum?`} />
        <CardContent>
          <AnnotadedText text={data?.info ? data.info : ''} />
        </CardContent>
      </Card>
      <Text>
        <Trans id="exit.footer">
          Sie suchen noch weitere Unterstützung? Dann können Sie sich an rechtliche Beratungsstellen wenden, die Sie
          individuell zu Ihrem Fall informieren können. In einer Beratung beurteilen Expert:innen, ob rechtliche
          Ansprüche bestehen und wie Sie diese am besten durchsetzen können. Dafür haben wir [hier einen Überblick über
          Beratungsstellen aufbereitet](/beratungsangebote).
        </Trans>
      </Text>
      <HStack spacing={5}>
        <Button
          as={ReactLink}
          to={`${homeURL}/${Routes.SolutionExplorer}?id=${id && mmobject.getParent(id)?.id}`}
          children={t`Zurück`}
        />
        <Button colorScheme={'secondary'} as={ReactLink} to={homeURL} children={t`Zurück zur Homepage`} />
      </HStack>
    </PageBody>
  );
};
