import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
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

interface FeatureProps {
  id: string | null;
}

export const ZPOInformation = ({ id, ...rest }: FeatureProps) => {
  let summaryText = `
[comment]: <> (## Zusammenfassung)

[comment]: <> (Wenn ein Konflikt nicht gelöst werden kann, kann es als letzte Konsequenz nötig sein, vor Gericht zu gehen. Gerichte können Konflikte verbindlich klären und Entscheidungen dazu treffen.)
[comment]: <> (Vor Gericht entscheiden Richter:innen. Bei einer Klage unterscheidet man zwischen der Klagendenpartei und der Beklagtenpartei. Beide Parteien haben die Möglichkeit ihre Ansicht darzustellen. Mit den dargestellten Informationen treffen die Richter:innen eine Entscheidung. Wenn nicht klar ist, welche Version einer Geschichte stimmt, müssen Beweis erbracht werden. )

[comment]: <> (Mit einem Urteil legen die Richter:innen fest, was beiden Parteien aus dem Konflikt zu steht. Außerdem wird festgelegt, wer die Kosten des Prozesses bezahlen muss. Abhängig von der Bewertung der Richter:innen muss entweder eine Partei alle Kosten tragen oder die Kosten werden geteilt. Die Höhe der Kosten richtet sich nach dem materiellen Wert, um den gestritten wird. Je höher der Wert desto höher die Kosten. )

### **Auf einen Blick**
- Wenn Sie einen Streit mit einer Person oder einem Unternehmen nicht allein lösen können, kann eine Richter:in diesen in einem Gerichtsprozess für Sie entscheiden.
- Mit einer Klage eröffnen Sie einen Gerichtsprozesses.
- Der Verlierer des Prozesses trägt die Kosten. Die Höhe der Kosten ist abhängig von Ihrer Forderung. Wenn keine Partei ganz recht bekommt, werden die Kosten aufgeteilt.
- Vor Gericht stellen Sie und die andere Partei den Fall dar. Wenn nicht klar ist, welche Version stimmt, werden Beweise erhoben. 
- Am Ende des Prozess wird ein Urteil verkündet. Darin legt die Richter:in fest, welche Ansprüche Ihnen zustehen.
- Ein Prozess dauert üblicherweise zwischen 4 und 10 Monaten.
- Sie können [Prozesskostenhilfe](https://www.bmjv.de/DE/Themen/GerichtsverfahrenUndStreitschlichtung/Prozesskostenhilfe/Prozesskostenhilfe_node.html) beantragen, falls sie finanziell nicht in der Lage sind, die Kosten zu zahlen.
- Sie können alleine Klage erheben, also auch ohne Anwält:in. Wenn Sie sich dabei unsicher fühlen, können Anwält:innen Sie beraten, und die Erfolgsaussichten für Ihren Fall bewerten.    
`;

  let costsText = `
Während des Gerichtsprozesses entstehen beiden Parteien Kosten.
Die unterlegene Partei des Prozesses trägt die Kosten von beiden Seiten.
Gibt die Richter:in einer Partei nicht vollständig Recht, werden die Kosten durch die Richter:in aufgeteilt.
Die Kosten eines Gerichtsprozesses setzen sich aus den Gerichtsgebühren, den Anwaltshonoraren und weiteren Ausgaben zusammen.

#### Gerichtsgebühren
Die Gerichtsgebühren sind gesetzlich festgelegt und abhängig vom verhandelten Wert.
Diese Summe wird als Streitwert bezeichnet und am Anfang vom Gericht festgelegt.
Als Kläger müssen Sie die Gerichtsgebühren im Voraus bezahlen.
Sollten Sie den Prozess gewinnen, bekommen Sie das Geld danach vom Gericht zurück.

#### Anwaltshonorare
Wenn Sie eine Anwält:in vertritt, müssen Sie im Voraus ein Honorar bezahlen.
Auch die Anwaltshonorare sind gesetzlich abhängig vom Streitwert festgelegt.
Wenn Sie den Prozess verlieren, bezahlen Sie ihre Anwält:in und die der Gegenseite.

#### Kostenrisiko
Mit Hilfe des Streitwerts können Sie die maximalen Kosten abschätzen.
Hier finden Sie eine Orientierung, wie hoch die Kosten für verschiedene Streitwerte sein können.
Eine genaue Berechnung ist im Vorhinein nicht möglich, da weitere Kosten entstehen können, beispielsweise durch die Vergütungen von Zeugen.
`;

  let processInformation = `
Jeder Zivilprozess folgt einem festen Ablauf:

#### I. Schriftliches Vorverfahren
    
Nachdem Sie die Klage beim Gericht eingereicht haben, wird die Klageschrift der Gegenseite zugestellt. Innerhalb einer **2-Wochen-Frist** muss der Beklagte schriftlich anzeigen, dass er sich gegen die Klage verteidigen will. Ansonsten ergeht ein Versäumnisurteil.

Anschließend haben dann wieder Sie als Kläger Gelegenheit, auf die **Klageerwiderung** – die Stellungnahme der Gegenseite – zu reagieren. Es ist nicht ungewöhnlich, dass Kläger und Beklagter mehrere Schreiben austauschen, bevor es zum Gerichtstermin kommt.

Gerade bei komplexen Rechtsstreitigkeiten kann der Richter so die gegensätzlichen Standpunkte beider Parteien in Ruhe nachvollziehen.

#### II. Güteverhandlung
    
Nach dem schriftlichen Vorverfahren lädt das Gericht zur Güteverhandlung. Sie findet vor der eigentlichen mündlichen Verhandlung statt. **Ziel** ist es, den **Prozess abzukürzen** und Ressourcen zu schonen. Das Gericht ordnet in der Regel an, dass beide Parteien persönlich zur Güteverhandlung erscheinen.

> Wer trotz Ladungen des Gerichts unentschuldigt bei der mündlichen Verhandlung fehlt, dem können prozessuale Nachteile und Ordnungsmittel drohen.

> Das Gericht frühzeitig zu informieren, wenn Sie durch eine Reise oder krankheitsbedingt verhindert sind und Nachweise (Attest bzw. Urlaubsbuchung) einzureichen, kann deshalb sinnvoll sein.
  

Der Richter schildert den Sachverhalt, wie er ihn bisher verstanden hat, und erläutert seine vorläufige Bewertung des Rechtsstreits. Anschließend kann er einen Vorschlag für einen **Vergleich** machen – also eine angemessene, für beide Seiten akzeptable Lösung.

Mit einem Vergleich ist das Verfahren genauso **verbindlich abgeschlossen** wie durch einen Urteilsspruch. Der Kläger kann seine Forderung wenn nötig per Zwangsvollstreckung durchsetzen.

Eine **Güteverhandlung** kann zu **4 Ergebnissen** führen:

1. Kläger und Beklagter einigen sich auf einen Vergleich
2. Der Beklagte erkennt die Forderung an
3. Der Kläger zieht die Klage zurück
4. Kein Ergebnis

Tritt eine der ersten 3 Optionen ein, ist der **Prozess beendet**. Bringt die Güteverhandlung kein Ergebnis, lädt das Gericht die Streitparteien im nächsten Schritt zur **mündlichen Verhandlung**. Diese kann entweder direkt im Anschluss an die Güteverhandlung oder zu einem späteren Termin stattfinden.
    
#### III. Mündliche Verhandlung und ggf. Beweisaufnahme
    
Die mündliche Verhandlung – auch **Hauptverhandlung** genannt – beginnt mit einer Bestandsaufnahme und einem Zwischenfazit des Richters. Anschließend **diskutieren** die **Parteien untereinander,**warum die Klage begründet bzw. unbegründet ist. Der Richter erteilt und entzieht den Parteien als Prozessleiter das Wort. Er gibt zudem Hinweise über seine Sicht der Dinge oder fordert auf, weitere Informationen bei Gericht einzureichen.

Eine Gerichtsverhandlung ist außer bei Familiensachen grundsätzlich öffentlich.

Widersprechen sich die Darstellungen der Parteien, ordnet der Richter eine **Beweisaufnahme** an: Um den Sachverhalt eindeutig zu klären, vernimmt er die von den Parteien benannten **Zeugen**, hört **Sachverständige** an und sichtet **Beweise.**

Beide Parteien und der Richter erörtern das Ergebnis der Beweisaufnahme. Sobald alle Parteien ausreichend gehört wurden und das **Gericht** sich seine **Meinung gebildet** hat, ist die mündliche **Verhandlung beendet**.
    
#### IV. Urteil
    
Der Richter verkündet das Urteil entweder **direkt im Anschluss** an die mündliche Verhandlung **oder** aber zu einem späteren Termin. Bei einem **separaten Verkündungstermin** besteht keine Anwesenheitspflicht, das Urteil kann auch telefonisch in der Geschäftsstelle des Gerichts abgefragt werden und geht dem Kläger und dem Beklagten postalisch zu.

Das Urteil ist ein **vollstreckbarer Titel**. Das bedeutet, dass der Gewinner des Rechtsstreits die Zwangsvollstreckung einleiten darf, wenn die unterlegene Seite ihre Pflichten nicht freiwillig erfüllt.

Gegen das Urteil des Amts- oder Landgerichts können Sie  **binnen eines Monats** [Berufung einlegen](https://www.advocado.de/ratgeber/verfahrensrecht/prozessrecht/berufung-einlegen.html). Der Fall wird dann von der **nächsthöheren Instanz** noch einmal aufgerollt. Bedingung ist, dass der Streitwert sich auf **mindestens 600 Euro** beläuft.`;
  return (
    <PageBody title="ZPO Informationen">
      <Box>
        <Heading>Informationen zur Klage und einem Gerichtsprozess</Heading>
        <AnnotadedText text={summaryText} />
        <Spacer height="3em" />
        <Accordion alignSelf="stretch" allowToggle>
          <AccordionItem>
            <AccordionButton>
              {<FaMoneyBill size="2.5em" />}
              <Text fontWeight="bold" padding="1em">
                Kosten für einen Gerichtsprozess
              </Text>
              <Spacer />
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <AnnotadedText text={costsText} />
              <Spacer height="1em" />
              <Table variant="simple">
                <TableCaption>Ungefähre Kosten in einem Gerichtsverfahren.</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Streitwert</Th>
                    <Th>
                      Gerichtsgebühren
                      <br /> (Vorab zu bezahlen)
                    </Th>
                    <Th>
                      Anwaltshonorar Gegenpartei
                      <br /> (Bei Verlust zu zahlen)
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
              <AnnotadedText
                text="**Beispielrechnung:** 
- Der Streitwert einer Klage beträgt €1500. 
- Ca. €250 muss nach Klageeinreichung als Vorschuss an das Gericht gezahlt werden. 
- Gewinnen Sie, bekommen Sie den vollen Betrag zurück. 
- Verlieren Sie, müssen Sie zusätzlich ca. €350 für den Anwalt der Gegenpartei zahlen."
              />
              <Spacer height="1em" />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              {<RiBankFill size="2.5em" />}
              <Text fontWeight="bold" padding="1em">
                Ablauf eines Gerichtsprozesses
              </Text>
              <Spacer />
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <AnnotadedText text={processInformation} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Spacer h="3em" />

        <AnnotadedText text="
- Auf der kommenden Seite können Sie eine Klage für Ihren Fall erstellen.  
- Dabei schätzen wir die Gerichtskosten für Sie ab und informieren Sie über die nötigen nächsten Schritte.  
- Nach der Erstellung können Sie alle Informationen zunächst überprüfen. Über die Einreichung können Sie danach entscheiden."
        />
        <Spacer h="1.5em" />
        <Button colorScheme="secondary" as={ReactLink} to={`${homeURL}/${Routes.Bryter}?id=${id}`}>
          Zur Erstellung einer Klage
        </Button>
      </Box>
    </PageBody>
  );
};
