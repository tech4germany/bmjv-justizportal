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
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaEnvelopeOpen, FaPencilAlt, FaUserTie } from 'react-icons/fa';
import { HiScale } from 'react-icons/hi';
import { TiArrowLoop } from 'react-icons/ti';
import { Link as ReactLink } from 'react-router-dom';
import { AnnotadedText } from '../components/shared/AnnotatedText';
import { NavButtons } from '../components/shared/NavigationButtons';
import { PageBody } from '../components/shared/PageBody';
import { Claims, MMGraph } from '../logic/KMParser';

const AccItem = (props: {
  title: string;
  children: React.ReactNode;
  buttonLink?: string;
  buttonText?: string;
  icon?: React.ReactNode;
  display?: string | undefined;
}) => (
  <AccordionItem display={props.display}>
    <AccordionButton fontSize="xl" fontWeight="bold">
      {props.icon}
      {props.icon ? <Spacer minW="1em" flex="0" /> : ''}
      <Box flex="1" textAlign="left">
        {props.title}
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel pb={4}>
      <VStack align="start">
        {props.children}
        <Spacer />{' '}
        {props.buttonLink && props.buttonText ? (
          <Button colorScheme="green" rounded={'full'} as={ReactLink} to={props.buttonLink}>
            {props.buttonText}
          </Button>
        ) : null}
        <Spacer />{' '}
      </VStack>
    </AccordionPanel>
  </AccordionItem>
);

interface FeatureProps {
  id: string | null;
  mmobject: MMGraph;
}

export const Options = ({ id, mmobject, ...rest }: FeatureProps) => {
  const green = useColorModeValue('green.500', 'green.300');
  let claims: Claims[] = mmobject.getNode(id).claims;

  return (
    <PageBody title="Mögliche Lösungen">
      <Heading>Checkliste: Erste Schritte zur Problemlösung</Heading>
      <Spacer />

      <Accordion alignSelf="stretch" allowToggle allowMultiple>
        <AccItem
          title="Dokumentation des Mangels"
          icon={<FaPencilAlt size="2.5em" />}
          buttonText=""
          display={claims.indexOf(Claims.Mängelbeseitigung) != -1 ? 'inherit' : 'none'}>
          <AnnotadedText
            text={`
- **Warum?** 
	- Um Ihrer Vermieter:in den Mangel zeigen zu können, und einen Nachweis für den weiteren Prozess zu haben.
- **Wie gehe ich vor?** 
	- Ist der Mangel sichtbar, bspw. ein Schimmelfleck oder Wasserschaden, können Sie Fotos oder Videos von allen betroffenen Bereichen der Wohnung machen. 
	- Ist der Mangel nicht sichtbar, bspw. bei Lärmbelästigung, sollten Sie ein Protokoll anlegen, wann und in welcher Form dieser auftritt.
`}
          />
        </AccItem>
        <AccItem
          title="Mängelanzeige bei Ihrer Vermieter:in"
          icon={<FaEnvelopeOpen size="2.5em" />}
          buttonText="Zur Vorlage für die Mängelanzeige"
          buttonLink="#"
          display={claims.indexOf(Claims.Mietminderung) != -1 ? 'inherit' : 'none'}>
          <AnnotadedText
            text={`
- **Warum?** 
	- Ihre Vermieter:in direkt zu kontaktieren ist der schnellste und leichteste Weg, um Ihre Ansprüche durchzusetzen. 
	- Die meisten Konflikte lassen sich bereits im Dialog lösen. 
	- Mit einer schriftlichen Mängelanzeige haben Sie außerdem einen Nachweis für den weiteren Prozess

- **Wie gehe ich vor?** 
	- Kontaktieren Sie ihre Vermieter:in direkt und schildern Sie den Mangel konkret und sachlich. Benennen Sie klar Ihre Forderung (bspw. Mängelbeseitigung), und bleiben Sie dabei freundlich und höflich. 
	- Gleichzeitig sollten Sie eine schriftliche Mängelanzeige senden. Auch hier beschreiben Sie den Mangel und Ihre Forderung. Gleichzeitig setzen Sie eine realistische Frist, um den Mangel zu beseitigen. Um Ihre Miete mindern zu können, sollten Sie angeben, Ihre Miete ab sofort nur noch unter Vorbehalt zu zahlen.
`}
          />
        </AccItem>
        <AccItem
          title="Zweites Schreiben an die Vermieter:in senden"
          icon={<TiArrowLoop size="2.5em" />}
          buttonText="Zur Vorlage für die zweite Mängelanzeige"
          buttonLink="#"
          display={claims.indexOf(Claims.Mietminderung) != -1 ? 'inherit' : 'none'}>
          <AnnotadedText
            text={`
- **Warum?** 
	- Wenn Sie keine Reaktion von Ihrer Vermieter:in erhalten haben, hat Sie Ihre Mängelanzeige vielleicht nur übersehen. Dann kann sich eine zweite Kontaktaufnahme lohnen. 

- **Wie gehe ich vor?** 
	- Nutzen Sie erneut unsere Vorlage für eine Mängelanzeige und ergänzen Sie, dass Sie ein letztes Mal um Mängelbeseitigung bitten, bevor Sie weitere rechtliche Schritte einleiten.
`}
          />
        </AccItem>
        <AccItem
          title="Rechtlich beraten lassen"
          icon={<FaUserTie size="2.5em" />}
          buttonText="Zur Übersicht für Beratungsangebote"
          buttonLink="#"
          display={claims.indexOf(Claims.Mietminderung) != -1 ? 'inherit' : 'none'}>
          <AnnotadedText
            text={`
- **Warum?** 
	- In einer Rechtsberatung kann ihr Fall individuell von einer Expert:in bewertet werden. 
  - Diese kann außerdem erneut Kontakt mit Ihrer Vermieter:in aufnehmen. 
  - Manchmal kann beispielsweise ein Schreiben einer Anwält:in helfen, die Vermieter:in von Ihren Ansprüchen zu überzeugen. 

- **Wie gehe ich vor?** 
	-  In vielen Städten gibt es örtliche Beratungsangebote für Mieter:innen. 
  - Einige Beratungsstellen sind kostenlos erreichbar, insbesondere für eine Erstberatung oder finanzschwache Personen. 
  - Auf der nächsten Seite geben wir Ihnen einen Überblick zu Beratungsstellen, um ein Gespräch zu vereinbaren.
  `}
          />
        </AccItem>
        <AccItem
          title="Über das Justizportal eine Klage einreichen"
          icon={<HiScale size="2.5em" />}
          buttonText="Mehr Informationen zur Klage"
          buttonLink={`/zpo?id=${id}`}
          display={claims.indexOf(Claims.Mietminderung) != -1 ? 'inherit' : 'none'}>
          <AnnotadedText
            text={`
- **Warum?** 
  - Eine Klage ist ein Antrag auf eine gerichtliche Entscheidung durch eine Richter:in. 
  - Damit ist eine Klage der letzte Weg, Ihre Ansprüche durchzusetzen, wenn Ihre Vermieter:in diese nicht von sich erfüllt. 

- **Wie gehe ich vor?** 
	- Durch eine Klage wird ein Gerichtsverfahren eingeleitet.
  - Auch im Gericht wird erst versucht eine Einigung zu finden.
  - Sollte das nicht klappen wird eine Richter:in mit einem Urteil über ihren Fall entschieden. 
  - Hier informieren wir Sie, wie eine Klageeinreichung und das Gerichtsverfahren abläuft, und welche Kosten dabei entstehen. Im Anschluss können Sie selbst eine Klage einreichen.
`}
          />
        </AccItem>
      </Accordion>
      <AnnotadedText
        text={`Wenn sie nicht alle Punkte schriftlich kommuniziert haben, sollten Sie ein neues Schreiben erstellen.  
              Hier helfen wir Ihnen dabei: Wenn Sie den Vermietenden eine Frist zur Behebung des Mangels gesetzt haben, dann
              **warten** **Sie zunächst den Ablauf der Frist ab**, bevor Sie weitere Schritte unternehmen.
      `}
      />
      <Spacer height="2em" />

      <NavButtons linkBack={`/possibleentitlements?id=${mmobject.getParent(id)?.id}`} linkForward={`/zpo?id=${id}`} />
    </PageBody>
  );
};
