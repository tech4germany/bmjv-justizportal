import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Heading,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { IconType } from 'react-icons';
import { CgUserList } from 'react-icons/cg';
import { FaCheck, FaCity, FaRegComments } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { GoLaw } from 'react-icons/go';
import { RiCommunityLine } from 'react-icons/ri';
import { AnnotadedText } from '../components/shared/AnnotatedText';
import { PageBlock } from '../components/shared/PageBlock';
import { PageBody } from '../components/shared/PageBody';
import { Primary } from '../Const';
import { MMGraph } from '../logic/KMParser';

interface FeatureProps {
  id: string | null;
  mmobject: MMGraph;
}

export const ConsultationOffers = ({ mmobject, ...rest }: FeatureProps) => {
  // const green = useColorModeValue('.500', 'green.300');

  enum Tag {
    consultation,
    solutionOptions,
    trial,
    free,
  }

  const [filter, setFilter] = React.useState<Tag[]>([]);
  const [checkbox, setCheckbox] = React.useState(false);

  const toggleFilterState = (tag: Tag) =>
    setFilter(filter.includes(tag) ? filter.filter((element) => element != tag) : filter.concat(tag));

  const data: {
    label: string;
    icon?: IconType;
    content: string;
    tags: Tag[];
  }[] = [
    {
      label: t`Städtische Mietberatungen`,
      icon: FaCity,
      content: t({
        id: 'co.info_sm',
        message: `
**Angebot**:
- Erste Anlaufstelle für drängende Mietfragen (z.B. Mieterhöhung, Kündigung), teils Beratung in Fremdsprachen.
######
**Verfügbarkeit**: 
- Telefonische oder persönliche Beratung in vielen großen Städten, zum Beispiel in [Berlin](https://www.stadtentwicklung.berlin.de/wohnen/mieterberatungen.shtml), [München](http://www.muenchen.de/dienstleistungsfinder/muenchen/1074551/), [Hamburg](https://www.hamburg.de/oera/), [Stuttgart](https://www.stuttgart.de/vv/verwaltungseinheit/beratungstelefon-fuer-mieter-und-vemieter.php) oder [Nürnberg](https://www.nuernberg.de/internet/wohnen/mietrechtsinformationen.html).
###### 
**Kosten**:
- Die meisten Angebote sind kostenlos verfügbar.
######
Einige Städte bieten kostenfreie Mieterberatung an. Diese Beratungsstellen sind oft für drängende Probleme (fristlose Kündigung, Räumungsklage) oder Bürger:innen mit begrenzten finanziellen Mitteln gedacht.
`,
      }),
      tags: [Tag.consultation, Tag.free],
    },
    {
      label: t`Landesspezifische Schlichtungsstellen`,
      icon: FaRegComments,
      content: t({
        id: 'co.info_ls',
        message: `
**Angebot**: 
- Vermittlung zwischen Ihnen und der Gegenseite für eine Einigung durch eine ausgebildete, unabhängige Schiedsperson.
######
**Verfügbarkeit**: 
- In einigen Bundesländern, beispielsweise [Berlin](https://www.berlin.de/sen/verbraucherschutz/verbraucherportal/recht/vertragsrecht/schlichtung-261337.php) und [Nordrhein-Westfalen](https://streitschlichtung.nrw.de/JOLStreit/).
######
**Kosten**: 
- In Nordrhein-Westfalen beispielsweise zwischen 10 und 40 Euro.
######
Einige Bundesländer bieten Schlichtungsstellen, die Bürger:innen bei der gütlichen Beilegung von Konflikten helfen. Dabei vermittelt eine Schlichter:in zwischen beiden Parteien. Diese Stellen helfen besonders, wenn man die Beziehung zur Gegenpartei erhalten möchte - zum Beispiel in einem Mietverhältnis.
`,
      }),
      tags: [Tag.solutionOptions, Tag.free],
    },
    {
      label: t`Erstberatung bei der Verbraucherzentrale`,
      icon: FiPhone,
      content: t({
        id: 'co.info_evv',
        message: `
**Angebot**: 
- Prüfung von rechtlichen Ansprüchen durch Anwält:innen des Deutschen Mieterbunds in einem Gespräch.
- Vorschlag von ersten Handlungsoptionen.
######
**Verfügbarkeit**: 
- Telefonische oder persönliche Beratung, deutschlandweit. [Hier finden Sie die Website für Ihr Bundesland](https://www.verbraucherzentrale.de/beratung).
######
**Kosten**: 
- Circa 20-30 Euro für eine zwanzigminütige Beratung.
######
Die Verbraucherzentralen der Bundesländer bieten zusammen mit dem Deutschen Mieterbund kostengünstige Erstberatungen durch Anwält:innen an, [in Baden-Württemberg beispielsweise ab 20 Euro](https://www.verbraucherzentrale-bawue.de/beratungsstellen/746/kontakt/Mietrecht/17938).
`,
      }),
      tags: [Tag.consultation, Tag.solutionOptions],
    },
    {
      label: t`Mietervereine / Deutscher Mieterbund`,
      icon: RiCommunityLine,
      content: t({
        id: 'co.info_mm',
        message: `
**Angebot**: 
- Beratung und außergerichtliche Vertretung in allen Mietfragen durch festangestelle Anwält:innen.
- Auf Wunsch Übernahme der Kommunikation mit Ihrer Vermieter:in.
- Teilweise Angebote in Drittsprachen.
######
**Verfügbarkeit**: 
- In vielen deutschen Städten. [Hier finden Sie den für Sie nähesten regionalen Verein des Deutschen Mieterbunds](https://www.mieterbund.de/beratung/mieterverein-vor-ort.html).
######
**Kosten**: 
- Teilweise kostenlose Erstberatung.
- Jährliche Mitgliedschaften für etwa 100 Euro, Mindestlaufzeit zwei Jahre.
######
In Deutschland gibt es hunderte regionale Mietervereine, in denen Anwält:innen Beratungen für Mitglieder anbieten. Wenn sich in Ihrem Ort kein Verein befindet, ist eine Mitgliedschaft oft auch aus anderen Städten möglich.
`,
      }),
      tags: [Tag.consultation, Tag.solutionOptions],
    },
    {
      label: t`Rechtsberatung bei Anwält:innen`,
      icon: CgUserList,
      content: t({
        id: 'co.info_ra',
        message: `
**Angebot**: 
- Rechtliche Beratung sowie außergerichtliche und gerichtliche Vertretung in allen Rechtsfragen.
######
**Verfügbarkeit**: 
- Deutschlandweit.
- [Über die Anwaltsauskunft](https://anwaltauskunft.de/magazin), ein Portal des Deutschen Anwaltvereins, können Sie eine Anwält:in in Ihrer Nähe finden.
######
**Kosten**: 
- Eine Erstberatung kostet maximal 190 Euro, kann aber auch deutlich günstiger sein.
- Kostenlose Beratung ist mit einer Rechtschutzversicherung oder einem Beratungshilfeschein für finanzschwache Personen möglich.
- Hier finden Sie einen [Antrag auf Beratungshilfe in Deutsch](https://justiz.de/service/formular/dateien/agI1.pdf) mit zusätzlichen [Hinweisen auf Englisch](https://justiz.de/service/formular/dateien/agl1-hinweisblatt_beratungshilfe_englisch.pdf).
######
Rechtsanwält:innen können Sie in Rechtsangelegenheiten gegenüber der Gegenseite und vor Gericht vertreten. Jede Bürger:in hat das Recht, sich bei rechtlichen Fragen durch eine Rechtsanwält:in beraten und vertreten zu lassen.
`,
      }),
      tags: [Tag.consultation, Tag.solutionOptions, Tag.trial],
    },
    {
      label: t`Rechtsantragsstelle am Amtsgericht`,
      icon: GoLaw,
      content: t({
        id: 'co.info_ram',
        message: `
**Angebot**: 
- Hilfe bei der Einreichung von Klagen und Anträgen.
- Beantwortung von Fragen zu Briefen des Gerichts.
######
**Verfügbarkeit**: 
- Amtsgerichte gibt es in jeder mittelgroßen deutschen Stadt.
- Die Rechtantragsstelle können Sie dort persönlich vor Ort oder per Telefon erreichen.
- [Das nächste Amtsgericht für Ihren Wohnort können sie hier finden](https://www.justizadressen.nrw.de/de/justiz/suche).
######
**Kosten**: 
- Kostenlos.
######
Wenn Sie Hilfe bei der Einreichung einer Klage oder der Beantwortung eines Gerichtsbriefs brauchen, kann Ihnen die Rechtsantragsstelle am Amtsgericht weiterhelfen. Hierfür können Sie einen kostenfreien Termin mit einer ausgebildeten Rechtspfleger:in vereinbaren. Diese stellt sicher, dass Ihre Erklärungen alle rechtlich erforderlichen Informationen erhält. Eine individuelle rechtliche Beratung ist jedoch nicht möglich.
`,
      }),
      tags: [Tag.trial, Tag.free],
    },
  ];

  return (
    <PageBody title={t`Mögliche Lösungen`}>
      <PageBlock>
        <Heading>
          <Trans id="consultation.header">Beratungsangebote</Trans>
        </Heading>
        <Text px={{ base: 5, md: 0 }}>
          <Trans id="consultation.sub_header">
            Da das Justizportal Sie nicht in jedem Fall informieren kann, haben wir hier einen Überblick zu
            kostengünstigen Beratungsstellen für Sie aufbereitet.
          </Trans>
        </Text>
        <VStack align="center" width="100%">
          <ButtonGroup variant="outline" flexWrap="wrap" justifyContent="center" spacing={0} gridGap={5}>
            <Button
              onClick={() => {
                toggleFilterState(Tag.consultation);
              }}
              rightIcon={filter.includes(Tag.consultation) ? <FaCheck /> : undefined}
              rounded="full">
              <Trans>Erstberatung</Trans>
            </Button>
            <Button
              onClick={() => {
                toggleFilterState(Tag.solutionOptions);
              }}
              rightIcon={filter.includes(Tag.solutionOptions) ? <FaCheck /> : undefined}
              rounded="full">
              <Trans>Außergerichtliche Einigung</Trans>
            </Button>
            <Button
              onClick={() => {
                toggleFilterState(Tag.trial);
              }}
              rightIcon={filter.includes(Tag.trial) ? <FaCheck /> : undefined}
              rounded="full">
              <Trans>Gerichtsverfahren</Trans>
            </Button>
          </ButtonGroup>
          <Checkbox checked={checkbox} onChange={(e) => setCheckbox(e.target.checked)}>
            <Trans>Nur kostenlose Angebote anzeigen</Trans>
          </Checkbox>
        </VStack>
      </PageBlock>
      <PageBlock size="wide">
        <Accordion width="100%" allowToggle>
          {data
            .filter(
              (i) =>
                (filter.filter((value) => i.tags.includes(value)).length != 0 || filter.length == 0) &&
                (checkbox ? i.tags.includes(Tag.free) : true)
            )
            .map((acc, index) => (
              <AccordionItem>
                <AccordionButton>
                  <Box color={Primary()}>{acc.icon && <acc.icon size="2.5em" />}</Box>

                  <Text textAlign="left" fontWeight="bold" fontSize="lg" padding="1em">
                    {acc.label}
                  </Text>
                  <Spacer />
                  <Text>
                    <Trans>Mehr erfahren</Trans>
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Spacer height={5} />
                  <AnnotadedText text={acc.content} />
                  {/* <Spacer height={10} />
                {acc.buttonLink && acc.buttonText ? (
                  <>
                    <Button colorScheme="secondary" paddingBlock="1em" as={ReactLink} to={`${acc.buttonLink}`}>
                      {acc.buttonText}
                    </Button>
                  </>
                ) : null} */}
                  <Spacer height="1em" />
                </AccordionPanel>
              </AccordionItem>
            ))}
        </Accordion>
      </PageBlock>

      {/* <NavButtons linkBack={`${homeURL}/${Routes.PossibleEntitlements}?id=`} px={{ base: 5, md: 0 }} /> */}
      <Spacer w={5} />
    </PageBody>
  );
};
