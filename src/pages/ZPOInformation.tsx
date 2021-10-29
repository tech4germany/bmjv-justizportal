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
- Mit einer Klage eröffnen Sie einen Gerichtsprozess.
- Im Prozess stellen Sie und die andere Partei den Fall vor der Richter:in dar. Wenn nicht klar ist, welche Version stimmt, werden Beweise erhoben. 
- Zunächst kann die Richter:in Ihnen und der Gegenpartei eine Einigungsmöglichkeit als Vergleich vorschlagen, um den Streit schnell beizulegen.
- Kann kein Vergleich gefunden werden, wird am Ende des Prozesses ein verbindliches Urteil verkündet. Darin legt die Richter:in fest, welche Ansprüche Ihnen zustehen.
- Insgesamt dauert ein Prozess üblicherweise zwischen vier und zehn Monaten.
###
**Was kostet ein Gerichtsprozess?**
- Die Verlierer:in des Prozesses trägt die Kosten. Die Höhe der Kosten ist abhängig vom Wert der verhandelten Forderung. Wenn keine Partei ganz recht bekommt, werden die Kosten aufgeteilt.
- Wenn Sie eine Rechtsschutzversicherung haben, kann diese Ihre Kosten übernehmen. Manchmal sind Rechtsschutzversicherungen in Produkten oder Mitgliedschaften inbegriffen, zum Beispiel in einem Mieterverein.
- Sie können [Prozesskostenhilfe](https://www.bmjv.de/DE/Themen/GerichtsverfahrenUndStreitschlichtung/Prozesskostenhilfe/Prozesskostenhilfe_node.html) beantragen, falls sie finanziell nicht in der Lage sind, die Kosten zu zahlen.
###
**Wer kann klagen?**
- Jede Person ab 18 Jahren kann in Deutschland alleine am Amtsgericht klagen.
- Eltern können auch für Ihre minderjährigen Kinder eine Klage einreichen, zum Beispiel bei Ansprüchen aus der EU-Fluggastrechteverordnung.
- Wenn Sie sich dabei unsicher fühlen, können Anwält:innen Sie aber beraten oder ganz vertreten.
`;

  let costsText = `
  
  Die Kosten eines Gerichtsprozesses setzen sich aus **Gerichtsgebühren, Anwaltshonoraren und weiteren Ausgaben** zusammen.

###  
##### Gerichtsgebühren
Die Gerichtsgebühren sind gesetzlich festgelegt und abhängig vom verhandelten Wert Ihrer Forderung (circa 10-15%).
Diese Summe wird als Streitwert bezeichnet und am Anfang vom Gericht festgelegt.
Als Kläger:in müssen Sie die Gerichtsgebühren im Voraus bezahlen.
Sollten Sie den Prozess gewinnen, bekommen Sie das Geld danach von der Gegenseite zurück. Dafür stellen Sie einen kurzen [Kostenfestsetzungsantrag](https://www.justiz.nrw.de/BS/formulare/zivilsachen/ziv_zwischentext/kostenfestsetzungsantrag/index.php).

###  
##### Anwaltshonorare
Wenn Sie eine Anwält:in vertritt, müssen Sie im Voraus ein Honorar bezahlen.
Auch die Anwaltshonorare sind gesetzlich festgelegt, und abhängig vom Streitwert (circa 20%).
Wer den Prozess verliert, bezahlt auch alle Anwält:innen.  
  
###  
##### Weitere Kosten
Weitere Kosten können entstehen, wenn zur Beweisaufnahme beispielsweise Zeugen verhört werden. Diese erhalten dann eine Vergütung. 
Auch Sachverständigengutachten können weitere Kosten verursachen.
  
###  
##### Welche Kosten können für Sie insgesamt entstehen?
Die Kosten Ihres Falls können Sie mithilfe des Streitwerts abschätzen.
Ihren Streitwert berechnen wir im nächsten Schritt, wenn Sie eine Klage anlegen.
In der Tabelle finden Sie eine Orientierung, wie hoch die Kosten für verschiedene Streitwerte sein können.  
  
Beispiel: Bei Klagen zur EU-Fluggastrechteverordnung liegen Streitwerte häufig unter 1.000 Euro. Damit betragen die Gerichtsgebühren circa 150 Euro. Diese erhalten Sie bei Gewinn zurück.
`;

  let processInformation = [
    {
      title: `Klage einreichen`,
      text: `
Sie können eine Klage entweder **direkt hier über das Justizportal einreichen**.  
Oder, falls sie sich unsicher fühlen, mit Hilfe eines Anwaltes.

Wenn alle Dokumente vorhanden sind, sollte das Ausfüllen der Klage etwa **20 Minuten dauern.**
      `,
    },
    {
      title: `Schriftliches Vorverfahren (optional)`,
      text: `
Nachdem Sie die Klage beim Gericht eingereicht haben, wird die Klageschrift der Gegenseite zugestellt. 
Innerhalb einer **2-Wochen-Frist** muss der Beklagte schriftlich anzeigen, dass er sich gegen die Klage verteidigen will. Ansonsten ergeht ein Versäumnisurteil.

Anschließend haben dann wieder Sie als Kläger Gelegenheit, auf die **Klageerwiderung** – die Stellungnahme der Gegenseite – zu reagieren. Es ist nicht ungewöhnlich, dass Kläger und Beklagter mehrere Schreiben austauschen, bevor es zum Gerichtstermin kommt.

Gerade bei komplexen Rechtsstreitigkeiten kann die Richter:in so die gegensätzlichen Standpunkte beider Parteien in Ruhe nachvollziehen.

Bei dringenden Angelegenheiten (wie zB eine Wohnungsräumung), kann die Richter:in das schriftliche Vorverfahren aber auch überspringen und direkt mit einer Güteverhandlung starten.
`,
    },
    {
      title: `Güteverhandlung`,
      text: `
Die Güteverhandlung lässt sich am besten mit einer Streitschlichtung vergleichen.

Sie findet meist direkt vor der mündlichen Verhandlung statt. 
**Ziel** ist es, den **Prozess abzukürzen** und eine Lösung zu finden, mit der beide Parteien leben können. 

In der Regel müssen beide Parteien persönlich zur Güteverhandlung kommen.

Die Richter:in schildert den Sachverhalt, wie er ihn bisher verstanden hat, und erläutert seine vorläufige Bewertung des Rechtsstreits. Anschließend kann er einen Vorschlag für einen **Vergleich** machen – also eine angemessene, für beide Seiten akzeptable Lösung.

Mit einem Vergleich ist das Verfahren genauso **verbindlich abgeschlossen** wie durch ein Urteil. 

Eine **Güteverhandlung** kann zu **4 Ergebnissen** führen:
1 Kläger und Beklagter einigen sich auf einen Vergleich
2 Der Beklagte erkennt die Forderung an
3 Der Kläger zieht die Klage zurück
4 Kein Ergebnis

Mit den ersten drei Optionen ist der **Prozess beendet**. 
Bringt die Güteverhandlung kein Ergebnis, lädt die Richter:in die Parteien im nächsten Schritt zur **mündlichen Verhandlung**. 

Meistens hat die Richterin schon vorsorglich eine mündliche Verhandlung direkt nach der Güteverhandlung angesetzt. Somit geht es nach einer gescheiterten Güteverhandlung direkt mit der mündlichen Verhandlung weiter.
`,
    },

    {
      title: `Mündliche Verhandlung und Beweisaufnahmen`,
      text: `
Die mündliche Verhandlung – auch **Hauptverhandlung** genannt – beginnt mit einer Bestandsaufnahme und einem Zwischenfazit des Richters. 

Anschließend **diskutieren** die **Parteien untereinander**, warum die Klage begründet bzw. unbegründet ist. Der Richter erteilt und entzieht den Parteien als Prozessleiter das Wort. Er gibt zudem Hinweise über seine Sicht der Dinge oder fordert auf, weitere Informationen bei Gericht einzureichen.
Eine Gerichtsverhandlung ist außer bei Familiensachen **grundsätzlich öffentlich**.
Widersprechen sich die Darstellungen der Parteien, ordnet der Richter eine **Beweisaufnahme** an: Um den Sachverhalt eindeutig zu klären, vernimmt er die von den Parteien benannten **Zeugen**, hört **Sachverständige** an und sichtet **Beweise.**
Beide Parteien und der Richter erörtern das Ergebnis der Beweisaufnahme. Sobald alle Parteien ausreichend gehört wurden und das **Gericht** sich seine **Meinung gebildet** hat, ist die mündliche **Verhandlung beendet**.
`,
    },

    {
      title: `Urteil`,
      text: `
Sollten alle vorherigen Schritte eine Einigung zu finden scheitern, spricht die Richter:in ein Urteil. 
Richter:innen versuchen in der Regel ein Urteil zu vermeiden und die beiden Parteien zu einer Einigung zu bewegen.

Das Urteil kann entweder **direkt im Anschluss** an die mündliche Verhandlung **oder**, bei schwierigeren Fällen zu einem späteren Termin verkündet werden. 

Das Urteil ist ein **vollstreckbarer Titel**. Das bedeutet, dass die Gewinner:in des Rechtsstreits die Zwangsvollstreckung einleiten darf, wenn die unterlegene Seite ihre Pflichten nicht freiwillig erfüllt. Die passiert im Notfall mit der Hilfe von Gerichtsvollziehern und Polizei.

Sollten Sie oder die Gegenseite glauben, dass Urteil nicht dem geltenden Recht entspricht, können sie **innerhalb eines Monats** Berufung gehen. Der Fall wird dann von der **nächsthöheren Instanz** noch einmal aufgerollt. Bedingung ist, dass der Streitwert sich auf **mindestens 600 Euro** beläuft. 
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
                Gerichtsprozess folgen einem festen Ablauf, der im Gesetz geregelt ist. Allerdings gibt es für viele
                Fälle Sonderregelungen. Deswegen haben wir einen stark vereinfachten Ablauf gezeichnet, um Ihnen ein
                grobes Verständnis über den Verlauf einer Klage zu geben.
              </Text>
              <Spacer height={10} />
              <Image src={'data/ablauf.svg'} />
              <Spacer height={10} />

              <Tabs>
                <TabList>
                  <Tab>Mehr Infos →</Tab>
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
                  <TabPanel>Klicke auf die Buttons links, um mehr über die einzelnen Schritte zu erfahren.</TabPanel>
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
