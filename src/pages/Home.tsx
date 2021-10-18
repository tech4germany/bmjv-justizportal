import { Box, Button, Heading, Spacer, Stack, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { FaCheck, FaCompass, FaLandmark, FaSearch } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
import { Feature } from '../components/shared/Feature';
import { Hero } from '../components/shared/Hero';
import { HeroSplit } from '../components/shared/Hero_Split';

interface FeatureProps {
  anchorId: string;
}

export const Home = ({ anchorId, ...rest }: FeatureProps) => {
  const howRef = React.useRef<HTMLElement>(null);
  const executeScroll = () => howRef.current && howRef.current.scrollIntoView({ behavior: 'smooth' });

  React.useEffect(() => {
    // scroll functionality
    if (howRef.current && anchorId === howRef.current.id) {
      howRef.current.scrollIntoView();
    }
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, []);

  return (
    <Box textAlign="left" fontSize="xl">
      <HeroSplit
        title1={'Die Justiz im Netz.'}
        title2={'Einfach, online, jederzeit.'}
        image={'data/30823E44-E7D4-4CB5-871F-E62AD8580AE2.png'}>
        <Text>
          Wir informieren Sie über Ihre Rechte im Alltag und helfen Ihnen in einfachen Schritten zur Lösung Ihres
          Rechtsproblems
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <Button
            colorScheme={'orange'}
            as={ReactLink}
            to="/solutionexplorer">
            Jetzt starten!
          </Button>
          <Button as={ReactLink} to="#how" onClick={executeScroll}>
            Wie es funktioniert
          </Button>
        </Stack>
      </HeroSplit>

      <Hero title="Unser Angebot">
        Justizportal.de ist ein Angebot des Bundesministeriums der Justiz und für Verbraucherschutz in Zusammenarbeit
        mit den Justizministerien der Länder. Das Portal gibt Ihnen einen Überblick über Ihre Rechte in verschiedenen
        Alltagssituationen. Außerdem begleitet es Sie, Ihre rechtlichen Fragen und Probleme einzuordnen und zu lösen.
        Dabei werden Sie über Ihre Handlungsoptionen informiert und bei der Geltendmachung Ihrer Rechte unterstützt.
      </Hero>

      <Stack align="center" id="how" ref={howRef}>
        <VStack padding={[6, 12, 20]} maxWidth={800} align="center" spacing={8}>
          <Heading>So funktioniert es</Heading>
          <Text>Wir helfen Ihnen in vier einfachen Schritten zur Lösung Ihres Rechtproblems:</Text>
          <Spacer height={16}></Spacer>
          <VStack spacing={20}>
            <Feature title="Rechtsproblem einordnen" icon={<FaCompass />}>
              Zunächst helfen wir Ihnen zu klären, ob in Ihrem Fall ein Rechtsproblem vorliegt. Dafür zeigen wir Ihnen
              auf Ihren Fall zugeschnittene Informationen.
            </Feature>
            <Feature title="Über Ansprüche informieren" icon={<FaCheck />}>
              Dann helfen wir Ihnen zu evaluieren, welche Ansprüche in Ihrem Fall vorliegen könnten. Ansprüche sind
              Rechte, von anderen eine bestimmte Handlung zu verlangen (bspw. die Zahlung von Schadensersatz), zu dulden
              (bspw. die Untervermietung einer Wohnung) oder zu unterlassen (bspw. das Betreten eines Grundstücks).
              invidunt ut labore.
            </Feature>
            <Feature title="Handlungsoptionen vergleichen" icon={<FaSearch />}>
              Darauf aufbauend schlagen wir Ihnen Lösungsmöglichkeiten vor - zunächst für eine gütliche Streitbeilegung
              mit der Gegenseite. <b>Dieser Informationsservice ist für Sie komplett kostenlos.</b>
            </Feature>
            <Feature title="Online Klage einreichen" icon={<FaLandmark />}>
              Wenn alle anderen Optionen erschöpft sind, helfen wir Ihnen online eine Klage beim Amtsgericht
              einzureichen. Dafür erklären wir Ihnen den Prozess unseres Online Verfahrens und zeigen transparent die
              Kosten für ein Gerichtsverfahren, sowie eine mögliche Rechtsberatung auf.
            </Feature>
          </VStack>
          <Spacer height={16}></Spacer>

          <Heading size="lg">Wobei können wir Ihnen helfen?</Heading>
          <Text align="left">
            Auf den kommenden Seiten erfahren Sie mehr über die Rechtsprobleme, bei denen wir Sie unterstützen können.
          </Text>

          <Button
            colorScheme={'orange'}
            as={ReactLink}
            to="/solutionexplorer">
            Jetzt starten!
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};
