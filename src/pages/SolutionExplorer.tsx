import { Flex, Heading, Radio, RadioGroup, Spacer, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import * as React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { AnnotadedText } from '../components/shared/AnnotatedText';
import { Card } from '../components/shared/Card';
import { CardContent } from '../components/shared/CardContent';
import { CardHeader } from '../components/shared/CardHeader';
import { NavButtons } from '../components/shared/NavigationButtons';
import { PageBody } from '../components/shared/PageBody';
import { StatsCard } from '../components/shared/StatsCard';
import { MMGraph } from '../logic/KMParser';
import { UserState } from '../logic/UserState';

interface FeatureProps {
  id: string | null;
  mmobject: MMGraph;
  userState: UserState;
  setUserState: React.Dispatch<any>;
}

export const SolutionExplorer = ({ id, mmobject, userState, setUserState, ...rest }: FeatureProps) => {
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
      const pre =
        (child.title == '{EXIT}' ? '/exit' : '') + (child.title == '{CONTINUE}' ? '/possibleentitlements' : '');

      linkOnYes = child.type == 'YESANSWERD' ? `${pre}?id=${child.id}` : linkOnYes;
      linkOnNo = child.type == 'NOANSWERD' ? `${pre}?id=${child.id}` : linkOnNo;
    });
  }

  userState.currentNode = id!;
  setUserState(userState);

  return (
    <PageBody title="Lösungsfinder">
      {state == 'SE' ? (
        <>
          <Heading>In welchem Bereich Ihres Lebens haben Sie ein Problem?</Heading>
          <Wrap spacing="1.2em" justify="center" align="stretch">
            {data!.children!.map((child) => (
              <WrapItem key={child.id} w={{ base: '9em', md: '10.5em' }}>
                <StatsCard
                  link={child.children ? `?id=${child.children.length == 1 ? child.children[0].id : child.id}#s` : '#s'}
                  {...child}
                />
              </WrapItem>
            ))}
          </Wrap>

          <NavButtons
            linkBack={
              parent != undefined
                ? parent.children?.length == 1
                  ? '?id=' + mmobject.getParent(parent.id)?.id + '#s'
                  : '?id=' + parent.id + '#s'
                : '/'
            }
          />
        </>
      ) : (
        <>
          <Heading>{data.title}</Heading>
          <Flex
            align="top"
            wrap="nowrap"
            alignSelf="stretch"
            padding={{ base: 0, md: '1em' }}
            gridGap={{ base: '1em', md: '2em' }}
            flexDir={{ base: 'column-reverse', md: 'row' }}>
            <VStack flex="1" justify="end" align={{ base: 'center', md: 'start' }}>
              <RadioGroup size="lg" onChange={setValue} value={value} padding="1em">
                <Flex gridGap="1em" alignItems="left" flexDir={{ base: 'row', md: 'column' }}>
                  <Radio value="1">Ja</Radio>
                  <Radio value="2">Nein</Radio>
                </Flex>
              </RadioGroup>
              <NavButtons
                padding="1em"
                linkBack={
                  parent != undefined
                    ? parent.children?.length == 1
                      ? '?id=' + mmobject.getParent(parent.id)?.id
                      : '?id=' + parent.id
                    : '/'
                }
                linkForward={value == '1' ? linkOnYes : linkOnNo}
                disableForward={value != '2' && value != '1'}
                onClick={() => setValue('0')}
              />
            </VStack>
            <Card flex={{ base: 'none', md: 2 }} minWidth="15em" display={data.info ? undefined : 'none'}>
              <CardHeader title="Info" action={<FaInfoCircle size="1.2em" />} />
              <CardContent padding="1em">
                <AnnotadedText text={data.info ? data.info : ''} />
              </CardContent>
            </Card>
          </Flex>
          <Spacer minH="3em" />
        </>
      )}
    </PageBody>
  );
};
