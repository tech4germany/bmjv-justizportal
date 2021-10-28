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
  Text,
} from '@chakra-ui/react';
import { Trans } from '@lingui/macro';
import * as React from 'react';
import { FaCheck } from 'react-icons/fa';
import { AnnotadedText } from '../components/shared/AnnotatedText';
import { PageBody } from '../components/shared/PageBody';
import { MMGraph } from '../logic/KMParser';
import { Blob } from './disclaimer';

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
    setFilter(
      filter.includes(tag)
        ? filter.filter((element) => element != tag)
        : filter.concat(tag)
    );

  const data: { title: string; content: string; tags: Tag[] }[] = [
    {
      title: 'Städtische Mietberatungen',
      content: `
- **Angebot:** Erste Anlaufstelle für drängende Mietfragen (Verträge, Mieterhöhung, Kündigung), teils Beratung in Fremdsprachen
- **Verfügbarkeit:** Telefonische oder persönliche Beratung in vielen großen Städten, zum Beispiel in Berlin, München, Hamburg, Stuttgart oder Nürnberg.
- **Kosten:** Die meisten Angebote sind kostenlos verfügbar.
- Einige große Städte bieten kostenfreie Mieterberatung an. Diese Beratungsstellen sind oft für drängende Probleme (fristlose Kündigung, Räumungsklage) oder Bürger:innen mit begrenzten finanziellen Mitteln gedacht.`,
      tags: [Tag.consultation, Tag.free],
    },
    {
      title: 'C',
      content: 'fsd  hg jh hjgjhssd',
      tags: [Tag.consultation],
    },
    {
      title: 'TS',
      content: 'fdsfhhfsdfsiu',
      tags: [Tag.trial, Tag.solutionOptions],
    },
  ];

  return (
    <PageBody
      marginInline={{ base: '0em', md: '2em' }}
      title="Mögliche Lösungen"
    >
      <Heading>
        <Trans>Beratungsangebote</Trans>
      </Heading>
      <Text>
        <Trans>Wobei benötigen Sie Unterstützung?</Trans>
      </Text>
      <ButtonGroup borderColor="#56B280" variant="outline">
        <Button
          onClick={() => {
            toggleFilterState(Tag.consultation);
          }}
          rightIcon={
            filter.includes(Tag.consultation) ? <FaCheck /> : undefined
          }
          rounded="full"
        >
          <Trans>Erstberatung</Trans>
        </Button>
        <Button
          onClick={() => {
            toggleFilterState(Tag.solutionOptions);
          }}
          rightIcon={
            filter.includes(Tag.solutionOptions) ? <FaCheck /> : undefined
          }
          rounded="full"
        >
          <Trans>Außergerichtliche Einigung</Trans>
        </Button>
        <Button
          onClick={() => {
            toggleFilterState(Tag.trial);
          }}
          rightIcon={filter.includes(Tag.trial) ? <FaCheck /> : undefined}
          rounded="full"
        >
          <Trans>Gerichtsverfahren</Trans>
        </Button>
      </ButtonGroup>
      <Checkbox
        checked={checkbox}
        onChange={(e) => setCheckbox(e.target.checked)}
      >
        <Trans>Nur kostenlose Angebote anzeigen</Trans>
      </Checkbox>

      <Accordion>
        {data.map(
          (element) =>
            (filter.filter((value) => element.tags.includes(value)).length !=
              0 ||
              filter.length == 0) &&
            (checkbox ? element.tags.includes(Tag.free) : true) && (
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      fontWeight="bold"
                      fontSize="lg"
                    >
                      {element.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <AnnotadedText text={element.content} />
                </AccordionPanel>
              </AccordionItem>
            )
        )}
      </Accordion>
    </PageBody>
  );
};
