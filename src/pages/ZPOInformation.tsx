import { Box, Button, Heading, Spacer, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import * as React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { AnnotadedText } from '../components/shared/AnnotatedText';
import { PageBody } from '../components/shared/PageBody';
import { homeURL } from '../Const';
import { Routes } from '../Routes';

interface FeatureProps {
  id: string | null;
}

export const ZPOInformation = ({ id, ...rest }: FeatureProps) => {
  const s: string = `
[comment]: <> (## Zusammenfassung)

[comment]: <> (Wenn ein Konflikt nicht gelöst werden kann, kann es als letzte Konsequenz nötig sein, vor Gericht zu gehen. Gerichte können Konflikte verbindlich klären und Entscheidungen dazu treffen.)
[comment]: <> (Vor Gericht entscheiden Richter:innen. Bei einer Klage unterscheidet man zwischen der Klagendenpartei und der Beklagtenpartei. Beide Parteien haben die Möglichkeit ihre Ansicht darzustellen. Mit den dargestellten Informationen treffen die Richter:innen eine Entscheidung. Wenn nicht klar ist, welche Version einer Geschichte stimmt, müssen Beweis erbracht werden. )

[comment]: <> (Mit einem Urteil legen die Richter:innen fest, was beiden Parteien aus dem Konflikt zu steht. Außerdem wird festgelegt, wer die Kosten des Prozesses bezahlen muss. Abhängig von der Bewertung der Richter:innen muss entweder eine Partei alle Kosten tragen oder die Kosten werden geteilt. Die Höhe der Kosten richtet sich nach dem materiellen Wert, um den gestritten wird. Je höher der Wert desto höher die Kosten. )

### **Auf einen Blick**

- Wenn Sie einen Streit mit einer Person oder einem Unternehmen nicht allein lösen können, kann eine Richter:in diesen in einem Gerichtsprozess für Sie entscheiden.
- Eine Klage ist ein Antrag für die Eröffnung eines Gerichtsprozesses.
- Ein Prozess dauert üblicherweise zwischen 4 und 10 Monaten.
- Vor Gericht stellen Sie und die andere Partei den Fall dar. Wenn nicht klar ist, welche Version stimmt, werden Beweise erhoben. 
- Am Ende des Prozess wird ein Urteil verkündet. Darin legt die Richter:in fest, welche Ansprüche Ihnen zustehen.
- Der Verlierer des Prozesses trägt die Kosten. Wenn keine Partei ganz recht bekommt, werden die Kosten aufgeteilt.
- Die Kosten eines Gerichtsprozesses sind abhängig von Ihrer Forderung.
- Sie können [Prozesskostenhilfe](https://www.bmjv.de/DE/Themen/GerichtsverfahrenUndStreitschlichtung/Prozesskostenhilfe/Prozesskostenhilfe_node.html) beantragen, falls sie finanziell nicht in der Lage sind, die Kosten zu tragen.
- Jede Bürger:in ab 18 Jahren kann allein Klage erheben. Wenn Sie sich dabei unsicher fühlen, können Anwält:innen Sie beraten, und die Erfolgsaussichten für Ihren Fall bewerten.    


[comment]: <>  (**Ich fühle mich ausreichend informiert und möchte Klage einreichen:**)

[comment]: <> (## **Was erwartet Sie, wenn Sie eine Klage einreichen?**  )

[comment]: <> (Auch in einer Klage wird erst einmal versucht eine Einigung zu finden. Hierfür kommunizieren Sie mit der Gegenpartei unter Aufsicht des Gerichts erst schriftlich und dann mündlich in einer Verhandlung. )
[comment]: <> (Sie oder Ihre Anwalt:in erklären dabei Ihr Problem mit allen relevanten Fakten und stellen eine Vorderung an Ihre Gegenpartei. )
[comment]: <> (Wenn die Gegenpartei ihrer Darstellung oder ihrer Vorstellung wiederspricht, versucht die Richter:in einen Kompromis zwischen Ihnen und der Gegenpartei zu vermitteln. )
[comment]: <> (Wird kein Kompromis gefunden spricht die Richter:in ein Urteil. In dem Urteil legt sie fest und begründet welche Ihrer Forderungen berechtigt sind. )
[comment]: <> (Im Anschluss ist die Gegenpartei verpflichtet Ihre Forderungen zu erfüllen oder in Berufung zu gehen.)


### **Kosten für einen Gerichtsprozess**

Während des Gerichtsprozesses entstehen beiden Parteien Kosten.
Die unterlegende Partei des Prozesses trägt die Kosten von beiden Seiten.
Gibt die Richter:in einer Partei nicht vollständig Recht, werden die Kosten durch die Richter:in aufgeteilt.
Die Kosten eines Gerichtsprozesses setzen sich aus den Gerichtsgebühren, den Anwaltshonoraren und weiteren Ausgaben zusammen.

#### Gerichtsgebühren
Die Gerichtsgebühren sind gesetzlich festgelegt und abhängig vom verhandelten Wert.
Diese Summe wird als Streitwert bezeichnet und am Anfang vom Gericht festgelegt.
Als Kläger müssen Sie die Gerichtsgebühren im Vorraus bezahlen.
Sollten Sie den Prozess gewinnen, bekommen Sie das Geld danach vom Gericht zurück.

#### Anwaltshonorare
Wenn Sie eine Anwält:in vertritt, müssen Sie im Vorraus ein Honorar bezahlen.
Auch die Anwaltshonorare sind gesetzlich abhängig vom Streitwert festgelegt.
Wenn Sie den Prozess verlieren, bezahlen Sie ihre Anwält:in und die der Gegenseite.

#### Kostenrisiko
Mit Hilfe des Streitwerts können Sie die maximalen Kosten abschätzen.
Hier finden Sie eine Orientierung, wie hoch die Kosten für verschiedene Streitwerte sein können.
Eine genaue Berechnung ist im Vorhinein nicht möglich, da weitere Kosten entstehen können, beispielsweise durch die Vergütungen von Zeugen.
`;
  return (
    <PageBody title="ZPO Informationen">
      <Box>
        <Heading>Informationen zur Klage und einem Gerichtsprozess</Heading>
        <AnnotadedText text={s} />
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
          text="**Beispiel:** 
- Der Streitwert Ihrer Klage beträgt €1500. 
- Ca. €250 müssen Sie bei Klageeinreichung an das Gericht zahlen. 
- Gewinnen Sie, bekommen Sie den vollen Betrag zurück. 
- Verlieren Sie, müssen Sie zusätzlich ca. €350 für den Anwalt der Gegenpartei zahlen."
        />
        <Spacer h="3em" />
        <Text>Wenn Sie eine Klage über das Justizportal einreichen, schätzen wir die Gerichtskosten für Sie ab.</Text>
        <Text fontWeight="bold" paddingBlock="1.2em">
          Ich fühle mich ausreichend informiert und möchte Klage einreichen:
        </Text>
        <Button colorScheme="green" as={ReactLink} to={`${homeURL}/${Routes.Bryter}?id=${id}`}>
          Klageschriftgenerator
        </Button>
      </Box>
    </PageBody>
  );
};
