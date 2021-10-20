import { Box, Button, Heading, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import * as React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { AnnotadedText } from '../components/shared/AnnotatedText';
import { PageBody } from '../components/shared/PageBody';
import { homeURL } from '../Const';

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

- Am Ende des Gerichtsprozesses gibt es ein verbindliches Ergebnis.
- Die Kosten eines Gerichtsprozesses sind gesetzlich festgeschrieben. Sie hängen vom materiellen Wert ab, über den verhandelt wird. Je höher der Wert, desto höher sind die Kosten.
- Der Verlierer des Prozesses trägt die Kosten. Abhängig von der Entscheidung, können die Kosten aber auch auf beide Parteien verteilt werden.
- Sie können Prozesskostenhilfe beantragen, falls sie finanziell nicht in der Lage sind, die Porzesskosten zu tragen.
- Ein Klageverfahren folgt einem festgelegten Ablauf und dauert üblicherweise zwischen 4 und 10 Monaten.
- Sie können auch ohne Anwalt klagen. Wenn Sie sich dabei unsicher fühlen, können Anwält:innen Sie beraten. Unteranderem können Anwält:innen die Erfolgsaussichten für Ihren Fall bewerten.    
  
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
Gibt die Richter:in einer Partei nicht vollständig Recht, werden die Kosten beider Parteien zusammengerechnet und aufgeteilt.
Dabei legt die Richter:in fest wie viel Prozent welche Partei von der Gesamtsumme übernehmen muss.
Die Kosten eines Gerichtsprozesses setzen sich aus den Gerichtsgebühren, den Anwaltshonoraren und weiteren Ausgaben zusammen.

#### Gerichtsgebühren
Die Gerichtsgebühren sind gesetzlich festgelegt und abhängig davon, wie hoch der verhandelte materielle Wert ist.
Diese Summe wird als Streitwert bezeichnet und am Anfang vom Gericht festgelegt.
Als Kläger müssen Sie die Gerichtsgebühren im Vorraus bezahlen.
Sollten Sie den Prozess gewinnen, bekommen Sie das Geld danach vom Gericht zurück.

#### Anwaltshonorare
Ihren eigenen Anwalt müssen Sie im Vorraus bezahlen.
Den Anwalt der Gegenpartei nur, wenn Sie den Prozess verlieren.
Die Anwaltshonorare werden nicht von den Anwälten:innen festgelegt, sondern sind auch per Gesetz abhängig vom Streitwert festgelegt.

#### Kostenrisiko
Mit Hilfe des Streitwerts lassen sich also die Gesamtkosten und damit das maximale Kostenrisiko ungefähr abschätzen.
Im Folgenden finden Sie eine ungefähre Orientierung wie hoch die Kosten für verschiedene Streitwerte ausfallen können.
Eine genaue Berechnung ist im Vorhinein nicht möglich, da auch weitere Kosten, wie die Vergütungen der Zeugen von den Parteien bezahlt werden müssen.
`;
  return (
    <PageBody title="ZPO Informationen">
      <Box>
        <Heading>Informationen zur Klage & Gerichtsverfahren</Heading>
        <AnnotadedText text={s} />
        <Table variant="simple">
          <TableCaption>Ungefähres Kostenrisiko</TableCaption>
          <Thead>
            <Tr>
              <Th rowspan="2">Streitwert</Th>
              <Th rowspan="2">Gerichtsgebühren</Th>
              <Th rowspan="2">Anwaltshonorar pro Partei</Th>
              <Th colspan="2">Kostenrisiko bei Verlust</Th>
            </Tr>
            <Tr>
              <Th>Eine Partei anwaltlich vertreten</Th>
              <Th>Beide Parteien anwaltlich vertreten</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>€0-€1.000</Td>
              <Td>ca. €150</Td>
              <Td>ca. €200</Td>
              <Td>ca. €350</Td>
              <Td>ca. €550</Td>
            </Tr>
            <Tr>
              <Td>€1.000-€2.000</Td>
              <Td>ca. €250</Td>
              <Td>ca. €350</Td>
              <Td>ca. €600</Td>
              <Td>ca. €950</Td>
            </Tr>
            <Tr>
              <Td>€2.000-€3.000</Td>
              <Td>ca. €300</Td>
              <Td>ca. €550</Td>
              <Td>ca. €850</Td>
              <Td>ca. €1400</Td>
            </Tr>
            <Tr>
              <Td>€3.000-€4.000</Td>
              <Td>ca. €420</Td>
              <Td>ca. €700</Td>
              <Td>ca. €1220</Td>
              <Td>ca. €1920</Td>
            </Tr>
            <Tr>
              <Td>€4.000-€5.000</Td>
              <Td>ca. €480</Td>
              <Td>ca. €850</Td>
              <Td>ca. €1330</Td>
              <Td>ca. €2180</Td>
            </Tr>
          </Tbody>
        </Table>
        <Text fontWeight="bold" paddingBlock="1.2em">
          Ich fühle mich ausreichend informiert und möchte Klage einreichen:
        </Text>
        <Button colorScheme="green" as={ReactLink} to={`${homeURL}/bryter?id=${id}`}>
          Klageschriftgenerator
        </Button>
      </Box>
    </PageBody>
  );
};
