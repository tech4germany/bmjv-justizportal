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
import { FaCheck } from 'react-icons/fa';
import { AnnotadedText } from '../components/shared/AnnotatedText';
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
      label: 'Städtische Mietberatungen',
      content: `
**Angebot**:
- Erste Anlaufstelle für drängende Mietfragen (Verträge, Mieterhöhung, Kündigung), teils Beratung in Fremdsprachen
######
**Verfügbarkeit**: 
- Telefonische oder persönliche Beratung in vielen großen Städten
- zum Beispiel in Berlin, München, Hamburg, Stuttgart oder Nürnberg.
###### 
**Kosten**:
- Die meisten Angebote sind kostenlos verfügbar.
- Einige große Städte bieten kostenfreie Mieterberatung an.
- Diese Beratungsstellen sind oft für drängende Probleme (fristlose Kündigung, Räumungsklage) oder Bürger:innen mit begrenzten finanziellen Mitteln gedacht.
######`,
      tags: [Tag.consultation, Tag.free],
    },
    {
      label: 'Landesspezifische Schlichtungsstellen',
      content: `
**Angebot**: 
- Vermittlung zwischen Ihnen und Ihrer Vermieter:in für eine Einigung durch eine ausgebildete, unabhängige Schiedsperson.
######
**Verfügbarkeit**: 
- In einigen Bundesländern, beispielsweise Berlin und Nordrhein-Westfalen.
######
**Kosten**: 
- In Nordrhein-Westfalen zwischen 10 und 40 Euro.
`,
      tags: [Tag.solutionOptions, Tag.free],
    },
    {
      label: 'Erstberatung bei der Verbraucherzentrale',
      content: `
**Angebot**: 
- Prüfung von rechtlichen Ansprüchen durch Anwält:innen des Deutschen Mieterbunds in einem Gespräch
- Vorschlag von ersten Handlungsoptionen
######
**Verfügbarkeit**: 
- Telefonische oder persönliche Beratung, deutschlandweit.
- Hier finden Sie die Website für Ihr Bundesland.
######
**Kosten**: 
- Circa 20-30 Euro für eine zwanzigminütige Beratung.
######
Die Verbraucherzentralen der Bundesländer bieten zusammen mit dem Deutschen Mieterbund kostengünstige Erstberatungen durch Anwält:innen an, in Baden-Württemberg beispielsweise ab 20 Euro.
`,
      tags: [Tag.consultation, Tag.solutionOptions],
    },
    {
      label: 'Mietervereine / Deutscher Mieterbund',
      content: `
**Angebot**: 
- Beratung und außergerichtliche Vertretung in allen Mietfragen durch festangestelle Anwält:innen
- inklusive Übernahme der Kommunikation mit Ihrer Vermieter:in.
- Teilweise Angebote in Drittsprachen.
######
**Verfügbarkeit**: 
- In vielen mittelgroßen deutschen Städten.
- Hier finden Sie den für Sie nähesten regionalen Verein des Deutschen Mieterbunds.
######
**Kosten**: 
- Teilweise kostenlose Erstberatung.
- Jährliche Mitgliedschaften für etwa 100 Euro, Mindestlaufzeit zwei Jahre.
######
In Deutschland gibt es hunderte regionale Mietervereine, in denen Anwält:innen Beratungen für Mitglieder mit Mietrechtsproblemen anbieten. Wenn sich in Ihrem Ort kein Verein befindet, ist eine Mitgliedschaft oft auch aus anderen Städten möglich.
`,
      tags: [Tag.consultation, Tag.solutionOptions],
    },
    {
      label: 'Rechtsberatung bei Anwält:innen',
      content: `
**Angebot**: 
- Rechtliche Beratung sowie außergerichtliche und gerichtliche Vertretung in allen Rechtsfragen.
######
**Verfügbarkeit**: 
- Deutschlandweit.
- Über die Anwaltsauskunft, ein Portal des Deutschen Anwaltvereins, können Sie eine Anwält:in in Ihrer Nähe finden.
######
**Kosten**: 
- Eine Erstberatung kostet maximal 149 Euro, kann aber auch deutlich günstiger sein.
- Kostenlose Beratung ist mit einer Rechtschutzversicherung, oder einem Beratungshilfeschein für finanzschwache Personen möglich.
######
Rechtsanwält:innen können Sie in Rechtsangelegenheiten gegenüber Ihren Vermietern oder dem Gericht vertreten. Jede Bürger:in hat das Recht, sich bei rechtlichen Fragen durch eine Rechtsanwält:in beraten und vertreten zu lassen.
`,
      tags: [Tag.consultation, Tag.solutionOptions, Tag.trial],
    },
    {
      label: 'Rechtsantragsstelle am Amtsgericht',
      content: `
**Angebot**: 
- Hilfe bei der Einreichung von Klagen und Anträgen
- Erklärung von Gerichtsbriefen.
######
**Verfügbarkeit**: 
- Amtsgerichte gibt es in jeder mittelgroßen Stadt.
- Die Rechtantragsstelle können Sie dort persönlich vor Ort oder per Telefon erreichen.
- Das nächste Amtsgericht für Ihren Wohnort können sie hier finden.
######
**Kosten**: 
- Kostenlos
######
Wenn Sie Hilfe bei der Formulierung einer Klage oder der Beantwortung eines Schreibens des Gericht brauchen, kann Ihnen die Rechtsantragsstelle eines Amtsgerichts weiterhelfen. Hierfür können Sie einen kostenfreien Termin mit einer ausgebildeten Rechtspfleger:in vereinbaren. Diese stellt sicher, dass Ihre Erklärungen alle rechtlich erforderlichen Informationen erhält. Eine individuelle rechtliche Beratung ist jedoch nicht möglich.
`,
      tags: [Tag.trial, Tag.free],
    },
  ];

  return (
    <PageBody marginInline={{ base: 0, md: 10 }} title={t`Mögliche Lösungen`}>
      <Heading px={{ base: 5, md: 0 }} alignSelf="center" paddingTop={5}>
        <Trans id="consultation.header">Beratungsangebote</Trans>
      </Heading>
      <Text px={{ base: 5, md: 0 }}>
        <Trans id="consultation.sub_header">
          Bürger:innen haben in Deutschland viele Rechte. Das macht unser Rechtssystem jedoch auch komplex. Da das
          Justizportal Sie nicht für Ihren Fall individuell informieren kann, haben wir hier einen Überblick zu
          kostengünstigen Beratungsstellen für Sie aufbereitet.
        </Trans>
      </Text>
      <VStack align="center" width="100%">
        <ButtonGroup variant="outline">
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
      <Accordion width="100%" flex="1" minW={'20em'} alignSelf="stretch" allowToggle>
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

      {/* <NavButtons linkBack={`${homeURL}/${Routes.PossibleEntitlements}?id=`} px={{ base: 5, md: 0 }} /> */}
      <Spacer w={5} />
    </PageBody>
  );
};
