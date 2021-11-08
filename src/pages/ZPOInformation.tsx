import { HStack } from '@chakra-ui/layout';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Tab,
  Table,
  TableCaption,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import { RiBankFill } from 'react-icons/ri';
import { Link as ReactLink } from 'react-router-dom';
import { AnnotadedText } from '../components/shared/AnnotatedText';
import { Card } from '../components/shared/Card';
import { PageBlock } from '../components/shared/PageBlock';
import { PageBody } from '../components/shared/PageBody';
import { homeURL, Primary, Routes } from '../Const';

interface FeatureProps {
  id: string | null;
}

export const ZPOInformation = ({ id, ...rest }: FeatureProps) => {
    let summaryText = `
  **Wie funktioniert eine Klage?**
  - Wenn Sie einen Konflikt mit einer Person oder einem Unternehmen nicht allein klären können, kann eine Richter:in diesen in einem Gerichtsprozess für Sie lösen.
  - Mit einer Klage beginnen Sie einen Gerichtsprozess.
  - Im Prozess stellen Sie und die andere Partei den Fall vor der Richter:in dar. Wenn nicht klar ist, welche Version stimmt, werden Beweise erhoben.
  - Zunächst wird die Richter:in Ihnen und der Gegenpartei eine Einigungsmöglichkeit als Vergleich vorschlagen, um den Streit schnell beizulegen.
  - Wird keine Einigung gefunden, verkündet die Richter:in am Ende des Prozesses ein verbindliches Urteil verkündet. Darin steht, welche Ansprüche Ihnen zustehen.
  - Insgesamt dauert ein Prozess üblicherweise zwischen drei und zehn Monaten.
  ###
  **Was kostet ein Gerichtsprozess?**
  - Die Verlierer:in des Prozesses trägt die Kosten. Wenn keine Partei ganz Recht bekommt, werden die Kosten aufgeteilt.
  - Die Höhe der Kosten ist abhängig vom Wert der verhandelten Forderung.
  - Sie können [Prozesskostenhilfe](https://www.bmjv.de/DE/Themen/GerichtsverfahrenUndStreitschlichtung/Prozesskostenhilfe/Prozesskostenhilfe_node.html) beantragen, falls Sie wenig Geld haben.
  ###
  **Wer kann klagen?**
  - Jede Person ab 18 Jahren kann alleine am Amtsgericht klagen.
  - Eltern können für minderjährigen Kinder klagen, zum Beispiel bei Ansprüchen aus der EU-Fluggastrechteverordnung.
  - Wenn Sie sich dabei unsicher fühlen, können Anwält:innen Sie beraten oder ganz vertreten.
  `;

  let costsText = `
Die Kosten eines Gerichtsprozesses setzen sich aus **Gerichtsgebühren, Anwaltshonoraren und weiteren Ausgaben** zusammen.

###  
### Gerichtsgebühren
- Die Gerichtsgebühren sind gesetzlich festgelegt und abhängig vom Wert Ihrer Forderung (circa 10-15%).
- Der Wert der Forderung wird als Streitwert bezeichnet und am Anfang vom Gericht festgelegt.
- Als Kläger:in müssen Sie die Gerichtsgebühren im Voraus bezahlen.
- Sollten Sie den Prozess gewinnen, bekommen Sie das Geld danach von der Gegenseite zurück. Dafür stellen Sie einen kurzen [Kostenfestsetzungsantrag](https://www.justiz.nrw.de/BS/formulare/zivilsachen/ziv_zwischentext/kostenfestsetzungsantrag/index.php).

###  
### Anwaltshonorare
- Wenn Sie eine Anwält:in vertritt, müssen Sie im Voraus ein Honorar bezahlen.
- Auch die Anwaltshonorare sind gesetzlich festgelegt, und abhängig vom Streitwert (circa 20%).
- Wer den Prozess verliert, bezahlt auch alle Anwält:innen.  
  
###  
### Weitere Kosten
- Weitere Kosten können entstehen, wenn zur Beweisaufnahme beispielsweise Zeug:innen gehört werden. Diese erhalten dann eine Vergütung. 
- Auch Sachverständige (Expert:innen) können Kosten verursachen, wenn zusätzliche Gutachten benötigt werden.
  
###  
### Welche Kosten können für Sie insgesamt entstehen?
- Die Kosten Ihres Falls können Sie mithilfe des Streitwerts abschätzen.  
- Ihren Streitwert berechnen wir im nächsten Schritt, wenn Sie eine Klage erstellen.  
- In der Tabelle finden Sie eine Orientierung, wie hoch die Kosten für verschiedene Streitwerte sein können.  
- Wenn Sie eine Rechtsschutzversicherung haben, kann diese Ihre Kosten übernehmen. Manchmal sind Rechtsschutzversicherungen in Mitgliedschaften inbegriffen, z.B. bei einem Mieterverein.
- Wenn Sie nicht genug Geld für einen Gerichtsprozess haben, können Sie [Prozesskostenhilfe](https://www.bmjv.de/DE/Themen/GerichtsverfahrenUndStreitschlichtung/Prozesskostenhilfe/Prozesskostenhilfe_node.html) beantragen.
  
###
Beispiel: Bei Klagen zur EU-Fluggastrechteverordnung liegen Streitwerte häufig unter 1.000 Euro. Damit betragen die Gerichtsgebühren circa 150 Euro. Diese erhalten Sie bei Gewinn zurück. Sollten Sie verlieren, zahlen Sie die Gerichtskosten und gegebenenfalls die Honorare ihrer und der gegnerischen Anwält:in (je circa 200 Euro). Das Kostenrisiko beträgt daher circa 300 bis 450 Euro.
`;

  let processInformation = [
    {
      title: `Klage einreichen`,
      text: `
Sie können eine Klage **direkt hier über das Justizportal einreichen**. Wenn Sie sich unsicher fühlen, kann Ihnen auch eine Anwält:in dabei helfen.

Wenn alle Dokumente vorhanden sind, sollte das Ausfüllen der Klage **etwa 20 Minuten** dauern.
      `,
    },
    {
      title: `Schriftliches Vorverfahren`,
      text: `
Nachdem Sie die Klage beim Gericht eingereicht haben, wird diese der Gegenseite zugestellt. Innerhalb von zwei Wochen muss die Gegenseite schriftlich erklären, dass sie sich verteidigen will. Ansonsten entscheidet die Richter:in allein nach Ihrer Klage, was oft zu Ihrem Vorteil ausfällt - das nennt sich **Versäumnisurteil**. Die Gegenseite kann Ihre Klage auch als berechtigt anerkennen (**Anerkenntnisurteil**), wobei Sie direkt Recht erhalten. In beiden Fällen ist der Prozess dann vorbei, was bei circa 30% aller Gerichtsverfahren vorkommt. 

Antwortet die Gegenseite mit einer **Klageerwiederung**, haben Sie erneut die Möglichkeit zu reagieren. Es ist nicht ungewöhnlich, dass Klagende und Beklagte mehrere Schreiben vor dem ersten Gerichtstermin austauschen. 

Alternativ zum schriftlichen Vorverfahren kann die Richter:in aber auch gleich nach Eingang der Klage einen Gerichtstermin vereinbaren.
`,
    },
    {
      title: `Güteverhandlung`,
      text: `
Nach dem schriftlichen Vorverfahren gibt es eine (meistens persönliche) **Güteverhandlung vor Gericht**, um eine schnelle Lösung zu finden. 

Hier schildert die Richter:in ihr Verständnis des Falls und gibt eine vorläufige Bewertung ab. Dabei kann Sie einen Vorschlag für einen **Vergleich** machen, mit dem beide Parteien leben können. Die Verhandlung ist also vergleichbar mit einer Streitschlichtung. Mit einem Vergleich ist das Verfahren genauso **verbindlich abgeschlossen** wie durch ein Urteil. 

Eine Güteverhandlung kann zu drei Ergebnissen führen, mit denen der Prozess beendet wird:
- Kläger:in und Beklagte einigen sich auf einen Vergleich
- Die Beklagte erkennt die Forderung an
- Die Kläger:in zieht die Klage zurück  
  
  
In etwa 50% der Fälle endet der Gerichtsprozess hier. Bringt die Güteverhandlung kein Ergebnis, findet oft gleich im selben Termin die mündliche Verhandlung statt. Alle Verhandlungen sind dabei grundsätzlich öffentlich, außer im Familien- und Betreuungsrecht.
`,
    },

    {
      title: `Mündliche Verhandlung und Beweisaufnahmen`,
      text: `
Die mündliche **Verhandlung** beginnt mit einer Bestandsaufnahme durch die Richter:in. Anschließend diskutieren die Parteien, ob die Klage begründet ist. Die Richter:in moderiert das Gespräch und ergänzt Ihre Sichtweise oder fordert weitere Informationen.

Widersprechen sich die Darstellungen der Parteien, ordnet die Richter:in eine **Beweisaufnahme** an: Dazu werden von den Parteien benannte **Zeugen** befragt, **Sachverständige** angehört und **Beweise** gesichtet.

Sobald alle Parteien gehört wurden und das Gericht sich eine Meinung gebildet hat, ist die mündliche Verhandlung beendet. Alle Verhandlungen sind dabei grundsätzlich öffentlich, außer im Familien- und Betreuungsrecht. Im Anschluss spricht die Richter:in ein **Urteil**. Dazu kommt es in etwa 20% der Gerichtsverfahren.

Das Urteil wird entweder **direkt im Anschluss** an die mündliche Verhandlung **oder** bei schwierigen Fällen zu einem **späteren Termin** verkündet. Dabei besteht keine Anwesenheitspflicht, denn das Urteil wird beiden Parteien auch per Post geschickt.

Das Urteil ist ein **vollstreckbarer Titel**. Das bedeutet, dass die Gewinner:in des Rechtsstreits die Zwangsvollstreckung einleiten darf, wenn die unterlegene Seite ihre Pflichten nicht freiwillig erfüllt. Dies passiert im Notfall mit der Hilfe von Gerichtsvollziehern und Polizei.

Sollten Sie oder die Gegenseite glauben, dass das Urteil nicht dem Gesetz entspricht, können sie innerhalb eines Monats in Berufung gehen. Der Fall wird dann vom Landgericht noch einmal aufgerollt. Bedingung ist, dass der Streitwert sich auf mindestens 600 Euro beläuft. 
`,
    },
  ];
  return (
    <PageBody title={t`Eine Klage am Amtsgericht einreichen`}>
      <PageBlock>
        <Heading textAlign="center">
          <Trans id="zpo.heading">Eine Klage am Amtsgericht einreichen</Trans>
        </Heading>

        <Spacer height={12} />
          <Card p={{ base: 10, md: 14 }}>
            <Heading textAlign="center" variant="subheading">
              Die wichtigsten Informationen auf einen Blick
            </Heading>
            <Spacer height={14} />
            <AnnotadedText text={summaryText} />
          </Card>
          <Spacer height="3em" />

        {/* <Text>
          <Trans id="zpo.heading_info">
            Mit einer Klage beginnen Sie einen Gerichtsprozess. Was das bedeutet, erklären wir ihnen hier. Am Ende helfen wir Ihnen, eine Klage zu erstellen und einzureichen.{' '}
          </Trans>
        </Text>
        <Spacer />
        <Box>
          <Heading variant="subheading">
            <Trans id="zpo.subheading">Die wichtigsten Informationen auf einen Blick</Trans>
          </Heading>
          <Spacer height={5} />
          <HStack align="start">
            <AnnotadedText
              flex={2}
              text={t({
                id: 'zpo.info1',
                message: `
### Wie läuft ein Gerichtsprozess ab?
- Wenn Sie einen Konflikt mit einer Person oder einem Unternehmen nicht allein klären können, kann eine Richter:in diesen in einem Gerichtsprozess für Sie lösen.
- Im Prozess stellen Sie und die andere Partei den Fall vor der Richter:in dar. Wenn nicht klar ist, welche Version stimmt, werden Beweise erhoben. 
- Zunächst kann die Richter:in Ihnen und der Gegenpartei eine Einigung (Vergleich) vorschlagen, um den Streit schnell beizulegen.
- Wird keine Einigung gefunden, verkündet die Richter:in am Ende des Prozesses ein verbindliches Urteil. Darin steht, welche Ansprüche wem zustehen.
- Insgesamt dauert ein Prozess üblicherweise zwischen drei und zehn Monaten.`,
              })}
            />
            <Box flex={2} display={{ base: 'none', sm: 'unset' }}>
              <Image src="https://image.freepik.com/free-vector/female-attorney-standing-front-judge-talking-isolated-flat-illustration_74855-10653.jpg" />
            </Box>
          </HStack>
        </Box>
        <Spacer height={5} />

        <HStack align="start">
          <Box flex={2} display={{ base: 'none', sm: 'unset' }}>
            <Image src="https://image.freepik.com/free-vector/team-crisis-managers-solving-businessman-problems-employees-with-lightbulb-unraveling-tangle-vector-illustration-teamwork-solution-management-concept_74855-10162.jpg" />
          </Box>
          <AnnotadedText
            flex={2}
            text={t({
              id: 'zpo.info2',
              message: `
### Was kostet ein Gerichtsprozess?
- Die Verlierer:in des Prozesses trägt die Kosten. Wenn keine Partei ganz Recht bekommt, werden die Kosten aufgeteilt.
- Die Höhe der Kosten ist abhängig vom Wert der verhandelten Forderung.
- Wenn Sie eine Rechtsschutzversicherung haben, kann diese Ihre Kosten übernehmen.
- Sie können [Prozesskostenhilfe](https://www.bmjv.de/DE/Themen/GerichtsverfahrenUndStreitschlichtung/Prozesskostenhilfe/Prozesskostenhilfe_node.html) beantragen, wenn die Kosten für Sie zu hoch sind.
`,
            })}
          />
        </HStack>
        <Spacer height={5} />

        <HStack align="start">
          <AnnotadedText
            flex={2}
            text={t({
              id: 'zpo.info3',
              message: `
### Wer kann klagen?
- Jede Person ab 18 Jahren kann alleine am Amtsgericht klagen.
- Wenn Sie sich dabei unsicher fühlen, können Anwält:innen Sie beraten oder ganz vertreten.
- Eltern können auch für ihre minderjährigen Kinder klagen, zum Beispiel bei Ansprüchen aus der EU-Fluggastrechteverordnung.
`,
            })}
          />
          <Box flex={2} display={{ base: 'none', sm: 'unset' }}>
            <Image src="https://image.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg" />
          </Box>
        </HStack>

        <Spacer height="3em" />

        <Heading variant="subheading">
          <Trans>Weitere Fragen</Trans> 
        </Heading>*/}
        <Accordion alignSelf="stretch" allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box color={Primary()}>
                <FaMoneyBill size="2.5em" />
              </Box>
              <Text textAlign="left" fontWeight="bold" fontSize="lg" padding="1em">
                <Trans>Welche Kosten entstehen in einem Gerichtsprozess?</Trans>
              </Text>
              <Spacer />
              <Text>
                <Trans>Mehr erfahren</Trans>
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <AnnotadedText text={costsText} />
              <Spacer height={5} />
              <Table variant="simple">
                <TableCaption>Ungefähre Kosten in einem Gerichtsverfahren für verschiedene Streitwerte.</TableCaption>
                <Thead>
                  <Tr>
                    <Trans>
                      <Th>Streitwert</Th>
                      <Th>
                        Gerichtsgebühren
                        <br />
                        (Vorschuss)
                      </Th>
                      <Th>
                        Anwaltshonorar
                        <br />
                        (pro Seite)
                      </Th>
                    </Trans>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>€0-€1.000</Td>
                    <Td>ca. €150</Td>
                    <Td>ca. €200</Td>
                  </Tr>
                  <Tr>
                    <Td>€1.000-€2.000</Td>
                    <Td>ca. €250</Td>
                    <Td>ca. €350</Td>
                  </Tr>
                  <Tr>
                    <Td>€2.000-€3.000</Td>
                    <Td>ca. €300</Td>
                    <Td>ca. €550</Td>
                  </Tr>
                  <Tr>
                    <Td>€3.000-€4.000</Td>
                    <Td>ca. €420</Td>
                    <Td>ca. €700</Td>
                  </Tr>
                  <Tr>
                    <Td>€4.000-€5.000</Td>
                    <Td>ca. €480</Td>
                    <Td>ca. €850</Td>
                  </Tr>
                </Tbody>
              </Table>
              <Spacer h={5} />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box color={Primary()}>
                <RiBankFill size="2.5em" />
              </Box>
              <Text textAlign="left" fontWeight="bold" fontSize="lg" padding="1em">
                <Trans>Wie läuft ein Gerichtsprozess ab?</Trans>
              </Text>
              <Spacer />
              <Text>
                <Trans>Mehr erfahren</Trans>
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                <Trans>
                  Gerichtsprozesse folgen einem festen Ablauf, der im Gesetz geregelt ist. Dabei gibt es viele
                  Sonderregelungen. Um Ihnen einen Überblick zu geben, haben wir hier eine vereinfachte Grafik erstellt.
                </Trans>
              </Text>
              <Spacer height={10} />
              <Image src={'data/ablauf.svg'} />
              <Spacer height={10} />

              <Tabs>
                <TabList>
                  {/* <Tab>Mehr Infos →</Tab> */}
                  {processInformation.map((element, i) => (
                    <Tab>
                      <Flex w={7} h={7} bg="primary.500" rounded="full" align="center" justify="center">
                        <Text fontSize="lg" textAlign="center" fontWeight="bold" textColor="white">
                          {i + 1}
                        </Text>
                      </Flex>
                    </Tab>
                  ))}
                </TabList>
                <TabPanels>
                  {processInformation.map((element, i) => (
                    <TabPanel>
                      <Heading variant="subheading">{element.title}</Heading>
                      <Spacer height={5} />

                      <AnnotadedText text={element.text} />
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>
              <Spacer height={10} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Spacer h={10} />

        {/* <HStack>
          <Box flex={2}> */}
            <Heading variant="subheading">
              <Trans>Nächste Schritte</Trans>
            </Heading>
            {/* <Spacer h={5} /> */}
            <AnnotadedText
              text={t({
                id: 'zpo.nextsteps',
                message: `
1. Auf der kommenden Seite können Sie das Dokument für eine Klage zu Ihrem Fall erstellen.  
2. Dabei schätzen wir die Gerichtskosten für Sie ab und informieren Sie über die nötigen nächsten Schritte.  
3. Nach der Erstellung können Sie alle Informationen zunächst überprüfen. **Über die Einreichung entscheiden Sie erst dann.**`,
              })}
            />
{/*           </Box>
          <Box flex={2} display={{ base: 'none', sm: 'unset' }}>
            <Image src="https://image.freepik.com/free-vector/manager-prioritizing-tasks-list_74855-5272.jpg" />
          </Box> 
        </HStack>*/}
        <Button colorScheme="secondary" as={ReactLink} to={`${homeURL}/${Routes.Bryter}?id=${id}`}>
          <Trans>Zur Erstellung des Klagedokuments</Trans>
        </Button>
      </PageBlock>
    </PageBody>
  );
};
