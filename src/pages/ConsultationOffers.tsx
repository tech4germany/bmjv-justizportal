import * as React from 'react';
import { PageBody } from '../components/shared/PageBody';
import { Claims, MMGraph } from '../logic/KMParser';
import {
  Heading,
  Text,
  Button,
  ButtonGroup,
  Checkbox,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import { Trans } from '@lingui/macro';
import { FaReceipt, FaCheck } from 'react-icons/fa';

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

  const [filter, setFilter] = React.useState([Tag.consultation]);

  const data: { title: string; content: string; tags: Tag[] }[] = [
    {
      title: 'trherhregwerge',
      content: 'fdsfdfsd',
      tags: [Tag.consultation, Tag.free],
    },
    {
      title: 'dvdsfd',
      content: 'fsd  hg jh hjgjhssd',
      tags: [Tag.consultation],
    },
    {
      title: 'fdfsf',
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
        <Button rightIcon={<FaCheck />} rounded="full">
          <Trans>Erstberatung</Trans>
        </Button>
        <Button rightIcon={<FaCheck />} rounded="full">
          <Trans>Außergerichtliche Einigung</Trans>
        </Button>
        <Button rightIcon={<FaCheck />} rounded="full">
          <Trans>Gerichtsverfahren</Trans>
        </Button>
      </ButtonGroup>
      <Checkbox>
        <Trans>Nur kostenlose Angebote anzeigen</Trans>
      </Checkbox>

      <Accordion>
        {data.map(
          (element) =>
            filter.filter((value) => element.tags.includes(value)).length !=
              0 && (
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {element.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{element.content}</AccordionPanel>
              </AccordionItem>
            )
        )}
      </Accordion>
    </PageBody>
  );
};
