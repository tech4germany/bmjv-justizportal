import { Box, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link as ReactLink } from 'react-router-dom';
import { PageBody } from '../components/shared/PageBody';

interface FeatureProps {
  id: string;
}

export const ZPOInformation = (props: FeatureProps) => {
  const green = useColorModeValue('green.500', 'green.300');
  const s: string = `
[comment]: <> (## Zusammenfassung)

[comment]: <> (Wenn ein Konflikt nicht gelöst werden kann, kann es als letzte Konsequenz nötig sein, vor Gericht zu gehen. Gerichte können Konflikte verbindlich klären und Entscheidungen dazu treffen.)
[comment]: <> (Vor Gericht entscheiden Richter:innen. Bei einer Klage unterscheidet man zwischen der Klagendenpartei und der Beklagtenpartei. Beide Parteien haben die Möglichkeit ihre Ansicht darzustellen. Mit den dargestellten Informationen treffen die Richter:innen eine Entscheidung. Wenn nicht klar ist, welche Version einer Geschichte stimmt, müssen Beweis erbracht werden. )

[comment]: <> (Mit einem Urteil legen die Richter:innen fest, was beiden Parteien aus dem Konflikt zu steht. Außerdem wird festgelegt, wer die Kosten des Prozesses bezahlen muss. Abhängig von der Bewertung der Richter:innen muss entweder eine Partei alle Kosten tragen oder die Kosten werden geteilt. Die Höhe der Kosten richtet sich nach dem materiellen Wert, um den gestritten wird. Je höher der Wert desto höher die Kosten. )

#### **Auf einen Blick**

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

[comment]: <> (Während des Gerichtsprozesses entstehen Ihnen Kosten, die Sie aber erstattet bekommen, sollten Ihnen die Richter:in Recht geben. )
[comment]: <> (Gibt Ihnen die Richter:in nicht vollständig Recht, werden die Kosten beider Parteien zusammengerechnet und aufgeteilt. )
[comment]: <> (Dabei legt die Richter:in fest wie viel Prozent Sie von der Gesamtsumme übernehmen müssen. )
[comment]: <> (Die Kosten eines Gerichtsprozesses sind gesetzlich festgelegt und abhängig davon, wie hoch der verhandelte materielle Wert ist. )
[comment]: <> (Diese Summe wird als Streitwert bezeichnet und am Anfang vom Gericht festgelegt. )
[comment]: <> (Abhängig davon ob sich eine oder beide Parteien von Anwaltin:innen vertreten lassen, können sich die Kosten weiter erhöhen. )
[comment]: <> (Allerdings wird die Höhe der zusätzlichen Kosten nicht von den Anwälten:innen festgelegt, sondern ist auch per Gesetz abhängig vom Streitwert festgelegt. )
[comment]: <> (Mit Hilfe des Streitwerts lassen sich die Gesamtkosten und damit das maximale Kostenrisiko ungefähr abschätzen. )
[comment]: <> (Eine genaue Berechnung ist im Vorhinein nicht möglich, da auch weitere Kosten, wie die Vergütungen der Zeugen von den Parteien bezahlt werden müssen. )
[comment]: <> (Im Folgenden finden Sie daher nur eine ungefähre Orientierung wie hoch die Kosten für verschiedene Streitwerte ausfallen können. )
`;
  return (
    <PageBody title="ZPO Informationen">
      <Box>
        <Heading>Informationen zur Klage & Gerichtsverfahren</Heading>
        <ReactMarkdown components={ChakraUIRenderer()} children={s} />
        <Text fontWeight="bold" paddingBlock="1.2em">
          Ich fühle mich ausreichend informiert und möchte Klage einreichen:
        </Text>
        <Button colorScheme="green" rounded={'full'} as={ReactLink} to={`/bryter?id=${props.id}`}>
          Klageschriftgenerator
        </Button>
      </Box>
    </PageBody>
  );
};
