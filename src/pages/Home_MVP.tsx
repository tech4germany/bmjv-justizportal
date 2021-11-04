import { Box, Button, Flex, GridItem, Heading, Image, SimpleGrid, Spacer, Text, VStack } from '@chakra-ui/react';
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { HeroSplit } from '../components/shared/Hero_Split';
import { PageBlock } from '../components/shared/PageBlock';
import { PageBody } from '../components/shared/PageBody';
import { homeURL, Routes } from '../Const';
import { Card } from '../components/shared/Card';
import { CardContent } from '../components/shared/CardContent';

interface MVPFeatureProps {
  title: string;
  text: string;
  imgURL: string;
}

const MVPFeature = ({ title, text, imgURL }: MVPFeatureProps) => (
  <GridItem as={VStack}>
    <Card height="full">
      <CardContent height="full">
        <Image src={imgURL} />
        <Heading colorScheme="primary" variant="subheading">
          {title}
        </Heading>
        <Text variant="small">{text}</Text>
        <Spacer />
        <Button colorScheme="secondary" variant="outline">
          <Trans>Zum Wegweiser</Trans>
        </Button>
      </CardContent>
    </Card>
  </GridItem>
);

interface FeatureProps {
  anchorId: string;
}

export const HomeMVP = ({ anchorId, ...rest }: FeatureProps) => {
  const howRef = React.useRef<HTMLDivElement>(null);
  const executeScroll = () => howRef.current && howRef.current.scrollIntoView({ behavior: 'smooth' });

  React.useEffect(() => {
    // scroll functionality
    if (howRef.current && anchorId === howRef.current.id) {
      howRef.current.scrollIntoView();
    }
  });

  return (
    <PageBody title="MVP">
      <HeroSplit
        title1={t`Die Justiz im Netz.`}
        title2={t`Einfach, online, jederzeit.`}
        image={`${homeURL}/data/30823E44-E7D4-4CB5-871F-E62AD8580AE2.jpg`}>
        <Text fontSize={{ base: 'lg', lg: '2xl' }} fontWeight="light">
          <Trans render={Text} id="home.sub_heading">
            Ein digitales Serviceangebot der deutschen Justiz. Wir informieren Sie über Ihre Rechte im Alltag.
          </Trans>
        </Text>
        <Flex direction={{ base: 'row', md: 'row' }} wrap="wrap" alignSelf="start" gridGap={5}>
          <Button
            // size={{ base: 'md', lg: 'lg' }}
            size="lg"
            colorScheme={'secondary'}
            as={ReactLink}
            to={`${homeURL}/${Routes.SolutionExplorer}`}
            children={t`Jetzt starten!`}
          />
          <Button size="lg" as={ReactLink} to="#how" onClick={executeScroll} children={t`Wie es funktioniert`} />
        </Flex>
      </HeroSplit>

      <PageBlock width={'60em'} bg="gray.100">
        <Spacer minH={10} />
        <Heading colorScheme="primary">
          <Trans>Ein Tool für alle Fälle</Trans>
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={10}>
          <MVPFeature
            title={t`Mietmängel`}
            text={t`Ob Wasserschaden, Schimmel oder Lärm, wir unterstütze Sie bei Mietmängeln.`}
            imgURL={`${homeURL}/data/D9F5D0B5-68DF-4C90-B7CC-05135361E14C.png`}
          />
          <MVPFeature
            title={t`Fluggastrecht`}
            text={t`Flug unerwartet storniert? Informieren Sie sich hier über mögliche Ansprüche.`}
            imgURL={`${homeURL}/data/7189D919-4DC5-4339-BA18-31F37785F662.png`}
          />
          <MVPFeature
            title={t`Abokündigung`}
            text={t`Ob Wasserschaden, Schimmel oder Lärm, wir unterstütze Sie bei Mietmängeln.`}
            imgURL={`${homeURL}/data/9DD5BDF0-1FC1-40D8-B559-75E0F0947966.png`}
          />
        </SimpleGrid>
        <Spacer minH={20} />
      </PageBlock>

      <PageBlock id="how" ref={howRef}>
        <Box width="full">
          <Heading colorScheme="primary">
            <Trans id="home.howitwork_heading">So funktioniert es</Trans>
          </Heading>
          <Spacer h={5} />
          <Text textAlign="center" width="full" variant="small">
            <Trans id="home.howitwork_subheading">
              Wir helfen Ihnen in vier einfachen Schritten zur Lösung Ihres Rechtproblems:
            </Trans>
          </Text>
        </Box>
        <Spacer height={14}></Spacer>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={10}>
          <Heading variant="subheading">Rechtsproblem einordnen</Heading>
          <Heading variant="subheading">Über Ansprüche informieren</Heading>
          <Heading variant="subheading">Handlungsoptionen vergleichen</Heading>
        </SimpleGrid>
        <Spacer minH={20} />

        <Spacer height={16}></Spacer>

        <Button
          colorScheme={'secondary'}
          alignSelf="center"
          as={ReactLink}
          to={`${homeURL}/${Routes.SolutionExplorer}`}
          children={t`Jetzt starten!`}
        />
      </PageBlock>
    </PageBody>
  );
};
