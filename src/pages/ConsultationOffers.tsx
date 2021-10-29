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
  Link,
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
- **Angebot:** Erste Anlaufstelle für drängende Mietfragen (Verträge, Mieterhöhung, Kündigung), teils Beratung in Fremdsprachen
- **Verfügbarkeit:** Telefonische oder persönliche Beratung in vielen großen Städten, zum Beispiel in Berlin, München, Hamburg, Stuttgart oder Nürnberg.
- **Kosten:** Die meisten Angebote sind kostenlos verfügbar.
- Einige große Städte bieten kostenfreie Mieterberatung an. Diese Beratungsstellen sind oft für drängende Probleme (fristlose Kündigung, Räumungsklage) oder Bürger:innen mit begrenzten finanziellen Mitteln gedacht.`,
      tags: [Tag.consultation, Tag.free],
    },
    {
      label: 'C',
      content: 'fsd  hg jh hjgjhssd',
      tags: [Tag.consultation],
    },
    {
      label: 'TS',
      content: 'fdsfhhfsdfsiu',
      tags: [Tag.trial, Tag.solutionOptions],
    },
  ];

  return (
    <PageBody marginInline={{ base: 0, md: 10 }} title={t`Mögliche Lösungen`}>
      <Heading px={{ base: 5, md: 0 }} alignSelf="center" paddingTop={5}>
        <Trans id="consultation.header">Beratungsangebote</Trans>
      </Heading>
      <Text px={{ base: 5, md: 0 }}>
        <Trans id="consultation.sub_header">Wobei benötigen Sie Unterstützung?</Trans>
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

      <Text px={{ base: 5, md: 0 }}>
        <Trans>
          Fall Sie sich unsicher fühlen, können Sie sich auch beraten lassen. Dafür haben wir{' '}
          <Link>hier Beratungsangebote zusammengefasst.</Link>
        </Trans>
      </Text>

      {/* <NavButtons linkBack={`${homeURL}/${Routes.PossibleEntitlements}?id=`} px={{ base: 5, md: 0 }} /> */}
      <Spacer w={5} />
    </PageBody>
  );
};
