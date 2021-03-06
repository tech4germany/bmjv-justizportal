import { Box, Button, Flex, Heading, Spacer, Stack, Text, VStack } from '@chakra-ui/react';
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { FaCheck, FaCompass, FaLandmark, FaSearch } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
import { Feature } from '../components/shared/Feature';
import { Hero } from '../components/shared/Hero';
import { HeroSplit } from '../components/shared/Hero_Split';
import { homeURL, Routes } from '../Const';

interface FeatureProps {
  anchorId: string;
}

export const Home = ({ anchorId, ...rest }: FeatureProps) => {
  const howRef = React.useRef<HTMLDivElement>(null);
  const executeScroll = () => howRef.current && howRef.current.scrollIntoView({ behavior: 'smooth' });

  React.useEffect(() => {
    // scroll functionality
    if (howRef.current && anchorId === howRef.current.id) {
      howRef.current.scrollIntoView();
    }
  });

  return (
    <Box textAlign="left">
      <HeroSplit
        title={'Die Justiz im Netz. <br />Einfach, online, jederzeit.'}
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

      <Hero title={t`Unser Angebot`}>
        Justizportal.de ist ein Angebot des Bundesministeriums der Justiz und für Verbraucherschutz in Zusammenarbeit
        mit den Justizministerien der Länder. Das Portal gibt Ihnen einen Überblick über Ihre Rechte in verschiedenen
        Alltagssituationen. Außerdem begleitet es Sie, Ihre rechtlichen Fragen und Probleme einzuordnen und zu lösen.
        Dabei werden Sie über Ihre Handlungsoptionen informiert und bei der Geltendmachung Ihrer Rechte unterstützt.
      </Hero>

      <Stack align="center" id="how" ref={howRef}>
        <VStack padding={[6, 12, 16]} maxWidth={800} align="start" spacing={5}>
          <Heading alignSelf="center">So funktioniert es</Heading>
          <Text>Wir helfen Ihnen in vier einfachen Schritten zur Lösung Ihres Rechtproblems:</Text>
          <Spacer height={14}></Spacer>
          <VStack spacing={16}>
            <Feature title={`Rechtsproblem einordnen`} icon={<FaCompass />}>
              {/* <Trans id="home.howitwork_classify"> */}
              Zunächst helfen wir Ihnen zu klären, ob in Ihrem Fall ein Rechtsproblem vorliegt. Dafür zeigen wir Ihnen
              auf Ihren Fall zugeschnittene Informationen.
              {/* </Trans> */}
            </Feature>
            <Feature title={`Über Ansprüche informieren`} icon={<FaCheck />}>
              {/* <Trans id="home.howitwork_claims"> */}
              Dann helfen wir Ihnen zu evaluieren, welche Ansprüche in Ihrem Fall vorliegen könnten. Ansprüche sind
              Rechte, von anderen eine bestimmte Handlung zu verlangen (bspw. die Zahlung von Schadensersatz), zu dulden
              (bspw. die Untervermietung einer Wohnung) oder zu unterlassen (bspw. das Betreten eines Grundstücks).
              {/* </Trans> */}
            </Feature>
            <Feature title={`Handlungsoptionen vergleichen`} icon={<FaSearch />}>
              {/* <Trans id="home.howitwork_options"> */}
              Darauf aufbauend schlagen wir Ihnen Lösungsmöglichkeiten vor - zunächst für eine gütliche Streitbeilegung
              mit der Gegenseite. <b>Dieser Informationsservice ist für Sie komplett kostenlos.</b>
              {/* </Trans> */}
            </Feature>
            <Feature title={`Online Klage einreichen`} icon={<FaLandmark />}>
              <Trans id="home.howitwork_lawsuit">
                Wenn alle anderen Optionen erschöpft sind, helfen wir Ihnen online eine Klage beim Amtsgericht
                einzureichen. Dafür erklären wir Ihnen den Prozess unseres Online Verfahrens und zeigen transparent die
                Kosten für ein Gerichtsverfahren, sowie eine mögliche Rechtsberatung auf.
              </Trans>
            </Feature>
          </VStack>
          <Spacer height={16}></Spacer>

          <Heading alignSelf="center" children={`Wobei können wir Ihnen helfen?`} />
          <Text align="left">
            {/* <Trans id="home.howtohelp_footer"> */}
            Auf den kommenden Seiten erfahren Sie mehr über die Rechtsprobleme, bei denen wir Sie unterstützen können.
            {/* </Trans> */}
          </Text>
          <Button
            colorScheme={'secondary'}
            as={ReactLink}
            to={`${homeURL}/${Routes.SolutionExplorer}`}
            children={t`Jetzt starten!`}
          />
        </VStack>
      </Stack>
    </Box>
  );
};
