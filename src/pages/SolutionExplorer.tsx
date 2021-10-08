import { Box, Flex, Heading, HStack, Radio, RadioGroup, Spacer, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import * as React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { Card } from '../components/shared/Card';
import { CardContent } from '../components/shared/CardContent';
import { CardHeader } from '../components/shared/CardHeader';
import { NavButtons } from '../components/shared/NavigationButtons';
import { StatsCard } from '../components/shared/StatsCard';
import { MMGraph } from '../logic/KMParser';

interface FeatureProps {
  id: string | null;
  mmobject: MMGraph;
}

export const SolutionExplorer = (props: FeatureProps) => {
  const { id, mmobject } = props;
  const [value, setValue] = React.useState('0');

  const data = mmobject.getNode(id);
  const parent = mmobject.getParent(id);

  const state: string =
    data.children &&
    (data.children.length == 1 ||
      (data.children.length == 2 &&
        ['NOANSWERD', 'YESANSWERD'].includes(data.children[0].type) &&
        ['NOANSWERD', 'YESANSWERD'].includes(data.children[1].type)))
      ? 'EC'
      : 'SE';

  let linkOnYes: string = '';
  let linkOnNo: string = '';

  if (data.children != undefined) {
    data.children.forEach((child) => {
      const pre = (child.title == '{EXIT}' ? '/exit' : '') + (child.title == '{CONTINUE}' ? '/options' : '');

      linkOnYes = child.type == 'YESANSWERD' ? `${pre}?id=${child.id}` : linkOnYes;
      linkOnNo = child.type == 'NOANSWERD' ? `${pre}?id=${child.id}` : linkOnNo;
    });
  }

  return (
    <Box textAlign="left" padding={'2em'}>
      <VStack spacing={{ base: '2em', md: '3em' }}>
        {state == 'SE' ? (
          <>
            <Heading>In welchem Bereich Ihres Lebens haben Sie ein Problem?</Heading>
            <Wrap spacing="1.2em" justify="center" align="stretch">
              {data!.children!.map((child) => (
                <WrapItem w={{ base: '9em', md: '10.5em' }}>
                  <StatsCard
                    link={child.children ? `?id=${child.children.length == 1 ? child.children[0].id : child.id}` : '#'}
                    {...child}
                  />
                </WrapItem>
              ))}
            </Wrap>
          </>
        ) : (
          <Flex align="top" wrap="wrap" spacing="2em">
            <VStack spacing="2em" flex="1" align="left" minWidth="20em">
              <Heading>{data.title}</Heading>
              <RadioGroup size="lg" onChange={setValue}>
                <VStack spacing="24px" alignItems="left">
                  <Radio value="1">Ja</Radio>
                  <Radio value="2">Nein</Radio>
                </VStack>
              </RadioGroup>
              <Spacer height={{ base: '1em', md: '1em' }} />
            </VStack>
            <Card flex="1" minWidth="20em">
              <CardHeader title="Info" action={<FaInfoCircle size="1.2em" />} />
              <CardContent padding="1em">
                <ReactMarkdown components={ChakraUIRenderer()}>{data.info ? data.info : ''}</ReactMarkdown>
              </CardContent>
            </Card>
          </Flex>
        )}
        <NavButtons
          linkBack={
            parent != undefined
              ? parent.children?.length == 1
                ? '?id=' + mmobject.getParent(parent.id)?.id
                : '?id=' + parent.id
              : '/'
          }
          linkForward={state == 'SE' ? undefined : value == '1' ? linkOnYes : linkOnNo}
          disableForward={value != '2' && value != '1'}
        />
      </VStack>
    </Box>
  );
};
