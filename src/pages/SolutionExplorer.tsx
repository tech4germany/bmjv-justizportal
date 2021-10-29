import {
  Flex,
  GridItem,
  HStack,
  IconButton,
  Radio,
  RadioGroup,
  SimpleGrid,
  Spacer,
  Text,
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
import { homeURL, Primary, Routes } from '../Const';
import { MMGraph } from '../logic/KMParser';
import { UserState } from '../logic/UserState';

interface FeatureProps {
  id: string | null;
  anchorId: string;
  mmobject: MMGraph;
  userState: UserState;
  setUserState: React.Dispatch<any>;
}

export const SolutionExplorer = ({ id, anchorId, mmobject, userState, setUserState, ...rest }: FeatureProps) => {
  const [stateVal, setState] = React.useState({ value: '0', showInfo: false });

  const setValue = (newVal: string) => {
    setState({ value: newVal, showInfo: stateVal['showInfo'] });
  };
  const resetState = () => {
    setState({ value: '0', showInfo: false });
  };

  const switchShowInfo = () => {
    setState({ value: stateVal['value'], showInfo: stateVal['showInfo'] ? false : true });
  };

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
      <PageBody title={t`Lösungsfinder`}>
        <StaticProgress currentStep={1} progressNextStepInput={(mmobject.getNumberOfParents(id) / 11) * 100} />
        <Text width="100%" fontSize={'2xl'} paddingTop={5}>
          {state != 'SE' ? (
            <HStack align={'top'}>
              <Text minH={'3em'}>
                {data.title}
                {'    '}
                <IconButton
                  color={Primary()}
                  height="1.2em"
                  variant="ghost"
                  aria-label=""
                  icon={<FaInfoCircle />}
                  fontSize={'xl'}
                  onClick={switchShowInfo}
                  display={data.info ? undefined : 'none'}
                />
              </Text>
            </HStack>
          ) : (
            t`In welchem Bereich Ihres Lebens haben Sie ein Problem?`
          )}
        </Text>
        {state == 'SE' ? (
          <>
            <SimpleGrid
              columns={{ base: 2, md: 3 }}
              gridGap={{ base: 8, md: 12 }}
              width="100%"
              flexWrap="wrap"
              justifyContent="space-between">
              {data!.children?.map((child) => (
                <GridItem key={child.id}>
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
                            // description: t`Bisher, konnte dieser Pfad leider noch nicht implementiert werden.`,
                            status: 'info',
                            duration: 8000,
                            isClosable: true,
                          })
                    }
                    title={child.title}
                    info={child.info}
                    icon={child.icon}
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
          <Flex direction={{ base: 'column-reverse', md: 'row' }}>
            <VStack align="left" spacing={'3.5em'} width="min-content">
              <RadioGroup size="lg" colorScheme="primary" onChange={setValue} value={stateVal['value']}>
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
                linkBack={
                  parent != undefined
                    ? parent.children?.length == 1
                      ? '?id=' + mmobject.getParent(parent.id)?.id
                      : '?id=' + parent.id
                    : `${homeURL}/`
                }
                linkForward={stateVal['value'] == '1' ? linkOnYes : linkOnNo}
                disableForward={stateVal['value'] != '2' && stateVal['value'] != '1'}
                onClick={() => resetState()}
              />
            </VStack>
            <Spacer w="3.5em" h="3.5em" flex="unset" />
            <Card
              flex={{ base: 'none', md: 1 }}
              display={data.info ? (stateVal['showInfo'] ? undefined : 'none') : 'none'}>
              <CardHeader IconLeft={FaInfoCircle} title={t`Info`} />
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
