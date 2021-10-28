import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  Image,
  Spacer,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import * as React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { AnnotadedText } from '../components/shared/AnnotatedText';
import { PageBody } from '../components/shared/PageBody';
import { homeURL } from '../Const';
import { Routes } from '../Const';
import { FaMoneyBill } from 'react-icons/fa';
import { RiBankFill } from 'react-icons/ri';
import { Card } from '../components/shared/Card';

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
**Was kostet ein Gerichtsverfahren?**
- Die Verlierer:in des Prozesses trägt die Kosten. Die Höhe der Kosten ist abhängig vom Wert der verhandelten Forderung. Wenn keine Partei ganz recht bekommt, werden die Kosten aufgeteilt.
- Wenn Sie eine Rechtsschutzversicherung haben, kann diese Ihre Kosten übernehmen. Manchmal sind Rechtsschutzversicherungen in Produkten oder Mitgliedschaften inbegriffen, zum Beispiel in einem Mieterverein.
- Sie können [Prozesskostenhilfe](https://www.bmjv.de/DE/Themen/GerichtsverfahrenUndStreitschlichtung/Prozesskostenhilfe/Prozesskostenhilfe_node.html) beantragen, falls sie finanziell nicht in der Lage sind, die Kosten zu zahlen.
###
**Wer kann klagen?**
- Jede Person ab 18 Jahren kann in Deutschland alleine am Amtsgericht klagen.
- Wenn Sie sich dabei unsicher fühlen, können Anwält:innen Sie aber beraten oder ganz vertreten.
`;

  let costsText = `
  
  Die Kosten eines Gerichtsprozesses setzen sich aus **Gerichtsgebühren, Anwaltshonoraren und weiteren Ausgaben** zusammen.

###  
##### Gerichtsgebühren
Die Gerichtsgebühren sind gesetzlich festgelegt und abhängig vom verhandelten Wert Ihrer Forderung (circa 10-15%).
Diese Summe wird als Streitwert bezeichnet und am Anfang vom Gericht festgelegt.
Als Kläger müssen Sie die Gerichtsgebühren im Voraus bezahlen.
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
##### Welche Kosten können mir insgesamt entstehen?
Die Kosten Ihres Falls können Sie mithilfe des Streitwerts abschätzen.
Ihren Streitwert berechnen wir im nächsten Schritt, wenn Sie eine Klage anlegen.
In der Tabelle finden Sie eine Orientierung, wie hoch die Kosten für verschiedene Streitwerte sein können.  
  
Beispiel: Bei Klagen zur EU-Fluggastrechteverordnung liegen Streitwerte häufig unter 1.000 Euro. Damit betragen die Gerichtsgebühren circa 150 Euro. Diese erhalten Sie bei Gewinn zurück.
`;

  let processInformation = `
Jeder Gerichtsprozess folgt einem festen Ablauf:

#### I. Schriftliches Vorverfahren
    
Nachdem Sie die Klage beim Gericht eingereicht haben, wird diese der Gegenseite zugestellt. Innerhalb von zwei Wochen muss die Gegenseite schriftlich erklären, dass sie sich verteidigen will. Ansonsten entscheidet die Richter:in allein nach Ihrer Klage, was oft zu Ihrem Vorteil ausfällt - das nennt sich Versäumnisurteil.

Antwortet die Gegenseite mit einer Klageerwiederung, haben Sie erneut die Möglichkeit zu reagieren. Es ist nicht ungewöhnlich, dass Klagende und Beklagte mehrere Schreiben austauschen, bevor es zu einem Gerichtstermin kommt.

#### II. Güteverhandlung
    
Nach dem schriftlichen Vorverfahren gibt es eine (meistens persönliche) Güteverhandlung, um eine schnelle Lösung zu finden. Gerichtsverhandlungen sind außer im Familienrecht grundsätzlich öffentlich. 

Hier schildert die Richter:in Ihr Verständnis des Falls und gibt eine vorläufige Bewertung ab. Dabei kann Sie einen Vorschlag für einen Vergleich machen, mit dem beide Parteien leben könnten.


Eine **Güteverhandlung** kann zu **4 Ergebnissen** führen:
1. Kläger und Beklagter einigen sich auf einen Vergleich.
2. Der Beklagte erkennt die Forderung an
3. Der Kläger zieht die Klage zurück
4. Kein Ergebnis  
  
  
Tritt eine der ersten 3 Optionen ein, ist der **Prozess verbindlich abgeschlossen**. Bringt die Güteverhandlung kein Ergebnis, lädt das Gericht zur **mündlichen Verhandlung**, die oft am selben Tag stattfindet.
    
#### III. Mündliche Verhandlung und Beweisaufnahmen
    
Die mündliche Verhandlung beginnt mit einer Bestandsaufnahme durch die Richter:in. Anschließend diskutieren die Parteien, ob die Klage begründet ist. Die Richter:in moderiert das Gespräch und ergänzt Ihre Sichtweise oder fordert weitere Informationen.

Widersprechen sich die Darstellungen der Parteien, ordnet die Richter:in eine **Beweisaufnahme** an: Dazu werden von den Parteien benannte **Zeugen** befragt, **Sachverständige** angehört und **Beweise** gesichtet.

Sobald alle Parteien ausreichend gehört wurden und das Gericht sich eine Meinung gebildet hat, ist die mündliche Verhandlung beendet.
    
#### IV. Urteil
    
Die Richter:in verkündet das Urteil entweder **direkt im Anschluss** an die mündliche Verhandlung **oder** zu einem späteren Termin. Bei einem separaten Termin besteht keine Anwesenheitspflicht, denn das Urteil geht beiden Parteien auch per Post zu.

Das Urteil ist ein **vollstreckbarer Titel**. Das bedeutet, dass die gewinnende Partei eine Zwangsvollstreckung einleiten dürfte, wenn die gegenseite ihre Pflichten nicht freiwillig erfüllt.

Gegen das Urteil des Amts- oder Landgerichts können beide Parteien **innerhalb eines Monats** Berufung einlegen, wenn der Streitwert mindestens 600 Euro beträgt. Der Fall wird dann von einem höheren Gericht neu beurteilt, was den Prozess verlängert.`;
  return (
    <PageBody title="ZPO Informationen">
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
              <Spacer height="1em" />
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
          <AccordionItem>
            <AccordionButton>
              {<RiBankFill size="2.5em" />}
              <Text fontWeight="bold" fontSize="lg" padding="1em">
                Wie läuft ein Gerichtsprozesses genau ab?
              </Text>
              <Spacer />
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Spacer height="3em" />
              <Image src={'data/ablauf.svg'} />
              <AnnotadedText text={processInformation} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Spacer h={10} />

        <Heading variant="subheading" py={6}>
          Nächste Schritte
        </Heading>
        <AnnotadedText
          text="
1. Auf der kommenden Seite können Sie das Dokument für eine Klage zu Ihrem Fall erstellen.  
2. Dabei schätzen wir die Gerichtskosten für Sie ab und informieren Sie über die nötigen nächsten Schritte.  
3. Nach der Erstellung können Sie alle Informationen zunächst überprüfen. **Über die Einreichung entscheiden Sie erst dann.**"
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
