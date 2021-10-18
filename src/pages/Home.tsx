import { Box, Button, Heading, Spacer, Stack, Text, VStack } from '@chakra-ui/react';
import { t, Trans } from '@lingui/macro';
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
        title1={t`Die Justiz im Netz.`}
        title2={t`Einfach, online, jederzeit.`}
        image={'data/30823E44-E7D4-4CB5-871F-E62AD8580AE2.png'}>
        <Trans render={Text} id="home.sub_heading">
          Wir informieren Sie über Ihre Rechte im Alltag und helfen Ihnen in einfachen Schritten zur Lösung Ihres
          Rechtsproblems
        </Trans>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <Button colorScheme={'orange'} as={ReactLink} to="/solutionexplorer" children={t`Jetzt starten!`} />
          <Button as={ReactLink} to="#how" onClick={executeScroll} children={t`Wie es funktioniert`} />
        </Stack>
      </HeroSplit>

      <Hero title={t`Unser Angebot`}>
        <Trans render={Text} id="home.hero_offer">
          Justizportal.de ist ein Angebot des Bundesministeriums der Justiz und für Verbraucherschutz in Zusammenarbeit
          mit den Justizministerien der Länder. Das Portal gibt Ihnen einen Überblick über Ihre Rechte in verschiedenen
          Alltagssituationen. Außerdem begleitet es Sie, Ihre rechtlichen Fragen und Probleme einzuordnen und zu lösen.
          Dabei werden Sie über Ihre Handlungsoptionen informiert und bei der Geltendmachung Ihrer Rechte unterstützt.
        </Trans>
      </Hero>

      <Stack align="center" id="how" ref={howRef}>
        <VStack padding={[6, 12, 20]} maxWidth={800} align="center" spacing={8}>
          <Heading>
            <Trans id="home.howitwork_heading">So funktioniert es</Trans>
          </Heading>
          <Text>
            <Trans id="home.howitwork_subheading">
              Wir helfen Ihnen in vier einfachen Schritten zur Lösung Ihres Rechtproblems:
            </Trans>
          </Text>
          <Spacer height={16}></Spacer>
          <VStack spacing={20}>
            <Feature title={t`Rechtsproblem einordnen`} icon={<FaCompass />}>
              <Trans id="home.howitwork_classify">
                Zunächst helfen wir Ihnen zu klären, ob in Ihrem Fall ein Rechtsproblem vorliegt. Dafür zeigen wir Ihnen
                auf Ihren Fall zugeschnittene Informationen.
              </Trans>
            </Feature>
            <Feature title={t`Über Ansprüche informieren`} icon={<FaCheck />}>
              <Trans id="home.howitwork_claims">
                Dann helfen wir Ihnen zu evaluieren, welche Ansprüche in Ihrem Fall vorliegen könnten. Ansprüche sind
                Rechte, von anderen eine bestimmte Handlung zu verlangen (bspw. die Zahlung von Schadensersatz), zu
                dulden (bspw. die Untervermietung einer Wohnung) oder zu unterlassen (bspw. das Betreten eines
                Grundstücks).
              </Trans>
            </Feature>
            <Feature title={t`Handlungsoptionen vergleichen`} icon={<FaSearch />}>
              <Trans id="home.howitwork_options">
                Darauf aufbauend schlagen wir Ihnen Lösungsmöglichkeiten vor - zunächst für eine gütliche
                Streitbeilegung mit der Gegenseite. <b>Dieser Informationsservice ist für Sie komplett kostenlos.</b>
              </Trans>
            </Feature>
            <Feature title={t`Online Klage einreichen`} icon={<FaLandmark />}>
              <Trans id="home.howitwork_lawsuit">
                Wenn alle anderen Optionen erschöpft sind, helfen wir Ihnen online eine Klage beim Amtsgericht
                einzureichen. Dafür erklären wir Ihnen den Prozess unseres Online Verfahrens und zeigen transparent die
                Kosten für ein Gerichtsverfahren, sowie eine mögliche Rechtsberatung auf.
              </Trans>
            </Feature>
          </VStack>
          <Spacer height={16}></Spacer>

          <Heading size="lg" children={t`Wobei können wir Ihnen helfen?`} />
          <Text align="left">
            <Trans id="home.howtohelp_footer">
              Auf den kommenden Seiten erfahren Sie mehr über die Rechtsprobleme, bei denen wir Sie unterstützen können.
            </Trans>
          </Text>

          <Button colorScheme={'orange'} as={ReactLink} to="/solutionexplorer" children={t`Jetzt starten!`} />
        </VStack>
      </Stack>
    </Box>
  );
};
