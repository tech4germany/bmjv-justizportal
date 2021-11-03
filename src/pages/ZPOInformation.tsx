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
import * as React from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import { RiBankFill } from 'react-icons/ri';
import { Link as ReactLink } from 'react-router-dom';
import { AnnotadedText } from '../components/shared/AnnotatedText';
import { Card } from '../components/shared/Card';
import { PageBody } from '../components/shared/PageBody';
import { homeURL, Routes } from '../Const';
import { t, Trans } from '@lingui/macro';

interface FeatureProps {
  id: string | null;
}

export const ZPOInformation = ({ id, ...rest }: FeatureProps) => {
  let summaryText = `
**Wie funktioniert eine Klage?**
- Wenn Sie einen Konflikt mit einer Person oder einem Unternehmen nicht allein klären können, kann eine Richter:in diesen in einem Gerichtsprozess für Sie lösen.
- Mit einer Klage beginnen Sie einen Gerichtsprozess.
- Im Prozess stellen Sie und die andere Partei den Fall vor der Richter:in dar. Wenn nicht klar ist, welche Version stimmt, werden Beweise erhoben. 
- Zunächst kann die Richter:in Ihnen und der Gegenpartei eine Einigungsmöglichkeit als Vergleich vorschlagen, um den Streit schnell beizulegen.
- Kann keine Einigung gefunden werden, wird am Ende des Prozesses ein verbindliches Urteil verkündet. Darin legt die Richter:in fest, welche Ansprüche Ihnen zustehen.
- Insgesamt dauert ein Prozess üblicherweise zwischen vier und zehn Monaten.
###
**Was kostet ein Gerichtsprozess?**
- Die Verlierer:in des Prozesses trägt die Kosten. Die Höhe der Kosten ist abhängig vom Wert der verhandelten Forderung. Wenn keine Partei ganz Recht bekommt, werden die Kosten aufgeteilt.
- Wenn Sie eine Rechtsschutzversicherung haben, kann diese Ihre Kosten übernehmen. Manchmal sind Rechtsschutzversicherungen in Produkten oder Mitgliedschaften inbegriffen, zum Beispiel in einem Mieterverein.
- Sie können [Prozesskostenhilfe](https://www.bmjv.de/DE/Themen/GerichtsverfahrenUndStreitschlichtung/Prozesskostenhilfe/Prozesskostenhilfe_node.html) beantragen, falls Sie finanziell nicht in der Lage sind, die Kosten zu zahlen.
###
**Wer kann klagen?**
- Jede Person ab 18 Jahren kann in Deutschland alleine am Amtsgericht klagen.
- Eltern können auch für ihre minderjährigen Kinder eine Klage einreichen, zum Beispiel bei Ansprüchen aus der EU-Fluggastrechteverordnung.
- Wenn Sie sich dabei unsicher fühlen, können Anwält:innen Sie aber beraten oder ganz vertreten.
`;

  let costsText = `
  
  Die Kosten eines Gerichtsprozesses setzen sich aus **Gerichtsgebühren, Anwaltshonoraren und weiteren Ausgaben** zusammen.

###  
##### Gerichtsgebühren
- Die Gerichtsgebühren sind gesetzlich festgelegt und abhängig vom Wert Ihrer Forderung (circa 10-15%).
- Diese Summe wird als Streitwert bezeichnet und am Anfang vom Gericht festgelegt.
- Als Kläger:in müssen Sie die Gerichtsgebühren im Voraus bezahlen.
- Sollten Sie den Prozess gewinnen, bekommen Sie das Geld danach von der Gegenseite zurück. Dafür stellen Sie einen kurzen [Kostenfestsetzungsantrag](https://www.justiz.nrw.de/BS/formulare/zivilsachen/ziv_zwischentext/kostenfestsetzungsantrag/index.php).

###  
##### Anwaltshonorare
- Wenn Sie eine Anwält:in vertritt, müssen Sie im Voraus ein Honorar bezahlen.
- Auch die Anwaltshonorare sind gesetzlich festgelegt, und abhängig vom Streitwert (circa 20%).
- Wer den Prozess verliert, bezahlt auch alle Anwält:innen.  
  
###  
##### Weitere Kosten
- Weitere Kosten können entstehen, wenn zur Beweisaufnahme beispielsweise Zeug:innen verhört werden. Diese erhalten dann eine Vergütung. 
- Auch Sachverständige (Experten) können Kosten verursachen, wenn zusätzliche Gutachten benötigt werden.
  
###  
##### Welche Kosten können für Sie insgesamt entstehen?
- Die Kosten Ihres Falls können Sie mithilfe des Streitwerts abschätzen.  
- Ihren Streitwert berechnen wir im nächsten Schritt, wenn Sie eine Klage erstellen.  
- In der Tabelle finden Sie eine Orientierung, wie hoch die Kosten für verschiedene Streitwerte sein können.  
- Wenn Sie nicht genug Geld für einen Gerichtsprozess haben, können Sie [Prozesskostenhilfe](https://www.bmjv.de/DE/Themen/GerichtsverfahrenUndStreitschlichtung/Prozesskostenhilfe/Prozesskostenhilfe_node.html) beantragen.
  
###
Beispiel: Bei Klagen zur EU-Fluggastrechteverordnung liegen Streitwerte häufig unter 1.000 Euro. Damit betragen die Gerichtsgebühren circa 150 Euro. Diese erhalten Sie bei Gewinn zurück. Sollten Sie verlieren, zahlen Sie die Anwält:in der Gegenseite (circa 200 Euro).
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

Antwortet die Gegenseite mit einer **Klageerwiederung**, haben Sie erneut die Möglichkeit zu reagieren. Es ist nicht ungewöhnlich, dass Klagende und Beklagte mehrere Schreiben vor dem ersten Gerichtstermin austauschen. Bei dringenden Angelegenheiten (wie zum Beispiel einer Wohnungsräumung) kann die Richter:in das schriftliche Vorverfahren aber auch überspringen.
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
  
  
In etwa 50% der Fälle endet der Gerichtsprozess hier. Bringt die Güteverhandlung kein Ergebnis, lädt das Gericht zur **mündlichen Verhandlung**, die oft am selben Tag stattfindet. Alle Verhandlungen sind dabei grundsätzlich öffentlich, außer im Familienrecht.
`,
    },

    {
      title: `Mündliche Verhandlung und Beweisaufnahmen`,
      text: `
Die mündliche **Verhandlung** beginnt mit einer Bestandsaufnahme durch die Richter:in. Anschließend diskutieren die Parteien, ob die Klage begründet ist. Die Richter:in moderiert das Gespräch und ergänzt Ihre Sichtweise oder fordert weitere Informationen.

Widersprechen sich die Darstellungen der Parteien, ordnet die Richter:in eine **Beweisaufnahme** an: Dazu werden von den Parteien benannte **Zeugen** befragt, **Sachverständige** angehört und **Beweise** gesichtet.

Sobald alle Parteien gehört wurden und das Gericht sich eine Meinung gebildet hat, ist die mündliche Verhandlung beendet. Alle Verhandlungen sind dabei grundsätzlich öffentlich, außer im Familienrecht. Im Anschluss spricht die Richter:in ein **Urteil**. Dazu kommt es in etwa 20% der Gerichtsverfahren.

Das Urteil wird entweder **direkt im Anschluss** an die mündliche Verhandlung **oder** bei schwierigen Fällen zu einem **späteren Termin** verkündet. Dabei besteht keine Anwesenheitspflicht, denn das Urteil wird beiden Parteien auch per Post geschickt.

Das Urteil ist ein **vollstreckbarer Titel**. Das bedeutet, dass die Gewinner:in des Rechtsstreits die Zwangsvollstreckung einleiten darf, wenn die unterlegene Seite ihre Pflichten nicht freiwillig erfüllt. Dies passiert im Notfall mit der Hilfe von Gerichtsvollziehern und Polizei.

Sollten Sie oder die Gegenseite glauben, dass das Urteil nicht dem Gesetz entspricht, können sie innerhalb eines Monats in Berufung gehen. Der Fall wird dann vom Landgericht noch einmal aufgerollt. Bedingung ist, dass der Streitwert sich auf mindestens 600 Euro beläuft. 
`,
    },
  ];
  return (
    <PageBody title={t`ZPO Informationen`}>
      <Box>
        <Heading textAlign="center">Eine Klage am Amtsgericht einreichen</Heading>
        <Spacer height={12} />
        <Card p={{ base: 10, md: 14 }}>
          <Heading textAlign="center" variant="subheading">
            Die wichtigsten Informationen auf einen Blick
          </Heading>
          <Spacer height={14} />
          <AnnotadedText text={summaryText} />
        </Card>
        <Spacer height="3em" />
        <Accordion alignSelf="stretch" allowToggle>
          <AccordionItem>
            <AccordionButton>
              {<FaMoneyBill size="2.5em" />}
              <Heading variant="subheading" padding="1em">
                Welche Kosten entstehen in einem Gerichtsprozess?
              </Heading>
              <Spacer />
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <AnnotadedText text={costsText} />
              <Spacer height={5} />
              <Table variant="simple">
                <TableCaption>Ungefähre Kosten in einem Gerichtsverfahren für verschiedene Streitwerte.</TableCaption>
                <Thead>
                  <Tr>
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
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem bg="gray.50">
            <AccordionButton>
              {<RiBankFill size="2.5em" />}
              <Heading variant="subheading" padding="1em">
                Wie läuft ein Gerichtsprozess genau ab?
              </Heading>
              <Spacer />
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text>
                Gerichtsprozesse folgen einem festen Ablauf, der im Gesetz geregelt ist. Dabei gibt es viele
                Sonderregelungen. Um Ihnen einen Überblick zu geben, haben wir hier eine vereinfachte Grafik erstellt.
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

        <Heading variant="subheading" py={6}>
          <Trans>Nächste Schritte</Trans>
        </Heading>
        <AnnotadedText
          text={t({
            id: 'zpo.nextsteps',
            message: `
1. Auf der kommenden Seite können Sie das Dokument für eine Klage zu Ihrem Fall erstellen.  
2. Dabei schätzen wir die Gerichtskosten für Sie ab und informieren Sie über die nötigen nächsten Schritte.  
3. Nach der Erstellung können Sie alle Informationen zunächst überprüfen. **Über die Einreichung entscheiden Sie erst dann.**`,
          })}
        />
        <Spacer h={8} />
        <Button colorScheme="secondary" as={ReactLink} to={`${homeURL}/${Routes.Bryter}?id=${id}`}>
          Zur Erstellung des Klagedokuments
        </Button>
        <Spacer h={8} />
      </Box>
    </PageBody>
  );
};
