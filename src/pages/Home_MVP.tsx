import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  Image,
  Link,
  ResponsiveValue,
  SimpleGrid,
  Spacer,
  Token,
  Text,
  VStack,
} from '@chakra-ui/react';
import * as CSS from 'csstype';
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { HeroSplit } from '../components/shared/Hero_Split';
import { PageBlock } from '../components/shared/PageBlock';
import { PageBody } from '../components/shared/PageBody';
import { homeURL, Routes } from '../Const';
import { Card } from '../components/shared/Card';
import { CardContent } from '../components/shared/CardContent';

const baseURL = 'https://tech4germany.bryter.io/s/';
const bryterURLs = {
  landlordLetter: `${baseURL}EnTaPD7jRUKEHZA86ss5QA/mietmangel-vermieterschreiben?`,
  claimRent: `${baseURL}ekV7FMipRvG6G3gpT6TgxQ/mietmangel-klage?`,
  claimFlight: `${baseURL}tcm04C0OQFyJDyMdsDUGDQ/eu-fluggastrechteverordnung-klage?`,
};

interface MVPFeatureProps {
  title: string;
  text: string;
  imgURL: string;
  disabled?: boolean;
  id?: string;
  textAlign?: ResponsiveValue<CSS.Property.TextAlign>;
  imageSize?: Token<CSS.Property.Width | number, 'sizes'>;
}

const MVPFeature = ({
  title,
  text,
  imgURL,
  disabled,
  id,
  textAlign = 'left',
  imageSize = '180px',
}: MVPFeatureProps) => (
  <GridItem as={VStack}>
    <Card height="full">
      <CardContent height="full">
        <Image boxSize={imageSize} objectFit="contain" src={imgURL} />
        <Heading colorScheme="primary" variant="subheading">
          {title}
        </Heading>
        <Text variant="small" textAlign={textAlign}>
          {text}
        </Text>
        <Spacer />
        <Button
          colorScheme="secondary"
          variant="outline"
          as={ReactLink}
          to={disabled ? '#' : `${homeURL}/wegweiser?id=${id}`}
          disabled={disabled}
        >
          <Trans>Zum Wegweiser</Trans>
        </Button>
        <Spacer />
      </CardContent>
    </Card>
  </GridItem>
);

interface FeatureProps {
  anchorId: string;
}

export const HomeMVP = ({ anchorId, ...rest }: FeatureProps) => {
  const howRef = React.useRef<HTMLDivElement>(null);
  const executeScroll = () =>
    howRef.current && howRef.current.scrollIntoView({ behavior: 'smooth' });

  React.useEffect(() => {
    // scroll functionality
    if (howRef.current && anchorId === howRef.current.id) {
      howRef.current.scrollIntoView();
    }
  });

  return (
    <PageBody title={`Home`}>
      <HeroSplit
        title1={
          <Trans>
            Die Justiz im Netz. <br />
            Einfach, online, jederzeit.
          </Trans>
        }
        image={`${homeURL}/data/30823E44-E7D4-4CB5-871F-E62AD8580AE2.jpg`}
      >
        <Text fontSize={{ base: 'lg', lg: '2xl' }} fontWeight="light">
          <Trans render={Text} id="home.sub_heading">
            Ein digitales Serviceangebot der deutschen Justiz. Wir informieren
            Sie über Ihre Rechte im Alltag.
          </Trans>
        </Text>
        <Flex
          direction={{ base: 'row', md: 'row' }}
          wrap="wrap"
          alignSelf="start"
          gridGap={5}
        >
          <Button
            // size={{ base: 'md', lg: 'lg' }}
            size="lg"
            colorScheme={'secondary'}
            as={ReactLink}
            to={`${homeURL}/${Routes.SolutionExplorer}`}
            children={t`Zum Wegweiser`}
          />
          <Button
            size="lg"
            as={ReactLink}
            to="#so-funktioniert-es"
            onClick={executeScroll}
            children={t`Wie es funktioniert`}
          />
        </Flex>
      </HeroSplit>

      <PageBlock id="unser-angebot" width={'60em'} bg="gray.100">
        <Spacer minH={10} />
        <Heading colorScheme="primary">
          <Trans>Unser Angebot</Trans>
        </Heading>
        <Text textAlign="center">
          <Trans>
            Der Justizportal Wegweiser informiert Sie über Ihre Rechte im Alltag
            und hilft Ihnen Handlungsoptionen zur Lösung Ihres Rechtsproblems zu
            finden. Probieren Sie es hier aus!
          </Trans>
        </Text>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={10}>
          <MVPFeature
            title={t`Mietmängel`}
            text={t`Egal ob Sie Probleme mit Schimmel, Lärm oder einem Wasserschaden haben - hier können Sie sich über Ihre Rechte bei Mietmängeln informieren!`}
            imgURL={`${homeURL}/data/D9F5D0B5-68DF-4C90-B7CC-05135361E14C.png`}
            id={`ceppdowbfco0#s`}
            textAlign="center"
            imageSize="180px"
          />
          <MVPFeature
            title={t`Flugentschädigungen`}
            text={t`Ihr Flug war verspätet, wurde annulliert oder Ihnen wurde die Beförderung verweigert? Informieren Sie sich hier über mögliche Ansprüche aus der EU-Fluggastrechteverordnung!`}
            imgURL={`${homeURL}/data/7189D919-4DC5-4339-BA18-31F37785F662.png`}
            id={`cf008ca222o0#s`}
            textAlign="center"
            imageSize="190px"
          />
          <MVPFeature
            title={t`Abokündigung`}
            text={t`Ihr Vertrag wurde unerwartet verlängert oder Ihnen sind unvorhergesehene Kosten entstanden? In Zukunft informieren wir Sie hier über Ihre Rechte bei Abofallen.`}
            imgURL={`${homeURL}/data/9DD5BDF0-1FC1-40D8-B559-75E0F0947966.png`}
            disabled
            textAlign="center"
            imageSize="190px"
          />
        </SimpleGrid>
        <Spacer minH={20} />
      </PageBlock>

      <PageBlock id="so-funktioniert-es" ref={howRef}>
        <Spacer minH={10}></Spacer>
        <Box width="full">
          <Heading colorScheme="primary" textAlign="center">
            <Trans id="home.howitwork_heading">So funktioniert es</Trans>
          </Heading>
          <Spacer h={5} />
          <Text textAlign="center" width="full">
            <Trans id="home.howitwork_subheading">
              Der Justizportal Wegweiser hilft Ihnen in drei einfachen Schritten
              bei der Lösung Ihres Rechtproblems:
            </Trans>
          </Text>
        </Box>
        <Spacer height={14}></Spacer>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={20}>
          <VStack>
            <Image
              marginBottom="1s0px"
              boxSize="150px"
              objectFit="contain"
              src={`${homeURL}/data/wegweiser.png`}
            />
            <Spacer height={4} maxHeight="20px" minHeight="20px"></Spacer>
            <Heading variant="subheading" textAlign="center">
              Rechtsproblem einordnen
            </Heading>
            <Spacer height={4} maxHeight="5px" minH="5px"></Spacer>
            <Text textAlign="center" variant="small">
              <Trans>
                Durch die Beantwortung einfacher Ja-Nein-Fragen helfen wir
                Ihnen, relevante und kostenfreie Rechtsinformationen zu finden.
              </Trans>
            </Text>
          </VStack>
          <VStack>
            <Image
              boxSize="150px"
              objectFit="contain"
              src={`${homeURL}/data/bulb.png`}
            />
            <Spacer height={4} maxHeight="20px" minHeight="20px"></Spacer>
            <Heading variant="subheading" textAlign="center">
              Über Ansprüche informieren
            </Heading>
            <Spacer height={4} maxHeight="5px" minH="5px"></Spacer>
            <Text textAlign="center" variant="small">
              <Trans>
                Basierend auf Ihren Angaben stellen wir Ihnen passende
                Informationen über mögliche rechtliche Ansprüche bereit.
              </Trans>
            </Text>
          </VStack>
          <VStack>
            <Image
              boxSize="150px"
              objectFit="contain"
              src={`${homeURL}/data/scale.png`}
            />
            <Spacer height={4} maxHeight="20px" minHeight="20px"></Spacer>
            <Heading variant="subheading" textAlign="center">
              Handlungsoptionen vergleichen
            </Heading>
            <Spacer height={4} maxHeight="5px" minH="5px"></Spacer>
            <Text textAlign="center" variant="small">
              <Trans>
                {/* Wir geben Ihnen Handlungsoptionen und Vorlagen, um Ihre
                Ansprüche durchzusetzen - von Schreiben an die Gegenseite, über
                Rechtbseratung bis hin zu Klagen vor Gericht. */}
                Von Beratungsangeboten über praktische Tipps und Vorlagen bis
                hin zu einer Klage vor Gericht finden Sie den passenden Weg.
              </Trans>
            </Text>
          </VStack>
        </SimpleGrid>
        <Spacer height={4} maxHeight="20px" minHeight="20px"></Spacer>
        <Text textAlign="center" width="full">
          <Trans>
            Sie haben sich bereits über Ihre Ansprüche informiert und Ihre
            Handlungsoptionen ausgeschöpft? Dann unterstützen wir Sie auch
            direkt bei der Erstellung und Einreichung einer Klage für 
            <Link as={ReactLink} to={`${homeURL}/${Routes.Bryter}/?mietmangelklage`}>Mietmängel</Link> oder 
            <Link as={ReactLink} to={`${homeURL}/${Routes.Bryter}/?fluggastrechteklage`}>Fluggastrechte</Link>. Falls
            nicht, empfehlen wir zunächst unseren Justizportal Wegweiser:
          </Trans>
        </Text>

        <Button
          colorScheme={'primary'}
          alignSelf="center"
          as={ReactLink}
          to={`${homeURL}/${Routes.SolutionExplorer}`}
          children={t`Zum Wegweiser`}
        />
        <Spacer height={4} maxHeight="5px" minH="5px"></Spacer>
      </PageBlock>
    </PageBody>
  );
};
