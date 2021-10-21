import {
  Flex,
  GridItem,
  Heading,
  Progress,
  Radio,
  RadioGroup,
  SimpleGrid,
  Spacer,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { AnnotadedText } from '../components/shared/AnnotatedText';
import { Card } from '../components/shared/Card';
import { CardContent } from '../components/shared/CardContent';
import { CardHeader } from '../components/shared/CardHeader';
import { NavButtons } from '../components/shared/NavigationButtons';
import { PageBody } from '../components/shared/PageBody';
import { StaticProgress } from '../components/shared/StaticProgress';
import { StatsCard } from '../components/shared/StatsCard';
import { homeURL } from '../Const';
import { MMGraph } from '../logic/KMParser';
import { UserState } from '../logic/UserState';
import { Routes } from '../Routes';

interface FeatureProps {
  id: string | null;
  anchorId: string;
  mmobject: MMGraph;
  userState: UserState;
  setUserState: React.Dispatch<any>;
}

export const SolutionExplorer = ({ id, anchorId, mmobject, userState, setUserState, ...rest }: FeatureProps) => {
  const [value, setValue] = React.useState('0');

  const toast = useToast();
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
        (child.title == '{EXIT}' ? `${homeURL}/${Routes.Exit}` : '') +
        (child.title == '{CONTINUE}' ? `${homeURL}/${Routes.PossibleEntitlements}` : '');

      linkOnYes = child.type == 'YESANSWERD' ? `${pre}?id=${child.id}` : linkOnYes;
      linkOnNo = child.type == 'NOANSWERD' ? `${pre}?id=${child.id}` : linkOnNo;
    });
  }

  userState.currentNode = id!;
  setUserState(userState);

  return (
    <>
      <StaticProgress currentStep={1} progressNextStepInput={(mmobject.getNumberOfParents(id) / 11) * 100} />

      <PageBody title={t`Lösungsfinder`} paddingTop={4}>
        <Heading>{state != 'SE' ? data.title : t`In welchem Bereich Ihres Lebens haben Sie ein Problem?`}</Heading>
        {state == 'SE' ? (
          <>
            <SimpleGrid columns={[2, null, 3]} spacing="40px">
              {data!.children!.map((child) => (
                <GridItem key={child.id} w={{ base: '6.5em', sm: '9em', md: '10.5em', lg: '11em' }}>
                  <StatsCard
                    link={
                      child.children
                        ? `?id=${child.children.length == 1 ? child.children[0].id : child.id}#s`
                        : `?id=${id}#notimplemented:${child.id}`
                    }
                    onClick={() =>
                      child.children
                        ? undefined
                        : toast({
                            title: t`Diese Option ist leider noch nicht verfügbar.`,
                            // description: t`Bisher , konnte dieser Pfad leider noch nicht implementiert werden.`,
                            status: 'info',
                            duration: 8000,
                            isClosable: true,
                          })
                    }
                    {...child}
                  />
                </GridItem>
              ))}
            </SimpleGrid>

            <NavButtons
              linkBack={
                parent != undefined
                  ? parent.children?.length == 1
                    ? '?id=' + mmobject.getParent(parent.id)?.id + '#s'
                    : '?id=' + parent.id + '#s'
                  : `${homeURL}/`
              }
            />
          </>
        ) : (
          <Flex
            align="top"
            wrap="nowrap"
            alignSelf="stretch"
            padding={{ base: 0, md: '1em' }}
            gridGap={{ base: '1em', md: '2em' }}
            flexDir={{ base: 'column-reverse', md: 'row' }}>
            <VStack flex="1" justify="end" align={{ base: 'center', md: 'start' }}>
              <RadioGroup size="lg" colorScheme="green" onChange={setValue} value={value} padding="1em">
                <Flex gridGap="1em" alignItems="left" flexDir={{ base: 'row', md: 'column' }}>
                  <Radio value="1">
                    <Trans>Ja</Trans>
                  </Radio>
                  <Radio value="2">
                    <Trans>Nein</Trans>
                  </Radio>
                </Flex>
              </RadioGroup>
              <NavButtons
                padding="1em"
                linkBack={
                  parent != undefined
                    ? parent.children?.length == 1
                      ? '?id=' + mmobject.getParent(parent.id)?.id
                      : '?id=' + parent.id
                    : `${homeURL}/`
                }
                linkForward={value == '1' ? linkOnYes : linkOnNo}
                disableForward={value != '2' && value != '1'}
                onClick={() => setValue('0')}
              />
            </VStack>
            <Card flex={{ base: 'none', md: 2 }} minWidth="15em" display={data.info ? undefined : 'none'}>
              <CardHeader title={t`Info`} action={<FaInfoCircle size="1.2em" />} />
              <CardContent padding="1em">
                <AnnotadedText text={data.info ? data.info : ''} />
              </CardContent>
            </Card>
          </Flex>
        )}
        <Spacer minH="3em" />
      </PageBody>
    </>
  );
};
