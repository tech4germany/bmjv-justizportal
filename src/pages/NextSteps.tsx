import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaEnvelopeOpen, FaPencilAlt, FaUserTie } from 'react-icons/fa';
import { HiScale } from 'react-icons/hi';
import { TiArrowLoop } from 'react-icons/ti';
import { Link as ReactLink } from 'react-router-dom';
import { AnnotadedText } from '../components/shared/AnnotatedText';
import { NavButtons } from '../components/shared/NavigationButtons';
import { PageBody } from '../components/shared/PageBody';
import { MMGraph, NextStepsType } from '../logic/KMParser';

interface FeatureProps {
  id: string | null;
  mmobject: MMGraph;
}

export const NextSteps = ({ id, mmobject, ...rest }: FeatureProps) => {
  let nextSteps: NextStepsType[] = mmobject.getNode(id).nextSteps;

  let data = [
    {
      label: 'Dokumentation des Mangels',
      icon: FaPencilAlt,
      buttonLink: '',
      buttonText: '',
      condition: nextSteps.indexOf(NextStepsType.Docu) != -1,
      content: `
- **Warum?** 
	- Um Ihrer Vermieter:in den Mangel zeigen zu können und einen Nachweis für den weiteren Prozess zu haben.
- **Wie gehe ich vor?** 
	- Ist der Mangel sichtbar, bspw. ein Schimmelfleck oder Wasserschaden, können Sie Fotos oder Videos von allen betroffenen Bereichen der Wohnung machen. 
	- Ist der Mangel nicht sichtbar, bspw. bei Lärmbelästigung, sollten Sie aufschreiben wann und in welcher Form dieser auftritt.
`,
    },
    {
      label: 'Mängelanzeige bei Ihrer Vermieter:in',
      icon: FaEnvelopeOpen,
      buttonText: 'Zur Vorlage für die Mängelanzeige',
      buttonLink: '#',
      condition: nextSteps.indexOf(NextStepsType.LandlordLetter) != -1,
      content: `
- **Warum?** 
	- In den meisten Fällen beseitigen die Vermieter:innen den Mangel sobald sie benachrichtigt werden. 
	- Mit einer schriftlichen Mängelanzeige haben Sie außerdem einen Nachweis für den weiteren Prozess

- **Wie gehe ich vor?** 
	- Kontaktieren Sie ihre Vermieter:in direkt und schildern Sie den Mangel konkret und sachlich. Benennen Sie klar Ihre Forderung (bspw. Mängelbeseitigung). Bleiben Sie dabei freundlich und höflich. 
	- **Wichtig bei einer Mängelanzeige:** 
        - Beschreiben Sie den Mangel und Ihre Forderung. 
        - Setzen Sie ihrer Vermieter:in eine realistische Frist, um den Mangel zu beseitigen. 
        - Geben Sie an die Miete nur noch unter Vorbehalt zu zahlen. Wenn Sie einen Anspruch auf Mietminderung haben, können Sie diese nachträglich einforndern. Sollten Sie keinen Anspruch haben, entstehen Ihnen und Ihrer Vermieter:in keine Nachteile.
`,
    },
    {
      label: 'Zweites Schreiben an die Vermieter:in senden',
      icon: TiArrowLoop,
      buttonText: 'Zur Vorlage für die zweite Mängelanzeige',
      buttonLink: '#',
      condition: nextSteps.indexOf(NextStepsType.LandlordLetterReview) != -1,
      content: `
- **Warum?** 
	- Wenn Sie keine Reaktion von Ihrer Vermieter:in erhalten haben, hat Sie Ihre Mängelanzeige vielleicht nur übersehen. Dann kann sich eine zweite Kontaktaufnahme lohnen.
  - Mit der Androhung rechtlicher Schritte erhöhen Sie den Druck. Manche Vermieter:innen reagieren erst auf erhöhten Druck.

- **Wie gehe ich vor?** 
	- Nutzen Sie erneut unsere Vorlage für eine Mängelanzeige und ergänzen Sie: "Ich bitte ein letztes Mal um Mängelbeseitigung. Danach behalte ich mir vor weitere rechtliche Schritte einzuleiten."
`,
    },
    {
      label: 'Rechtlich beraten lassen',
      icon: FaUserTie,
      buttonText: 'Zur Übersicht für Beratungsangebote',
      buttonLink: '#',
      condition: true,
      content: `
- **Warum?** 
	- In einer Rechtsberatung kann ihr Fall individuell von einer Expert:in bewertet werden. 
  - Diese kann außerdem erneut Kontakt mit Ihrer Vermieter:in aufnehmen. 
  - Manchmal kann beispielsweise ein Schreiben einer Anwält:in helfen, die Vermieter:in von Ihren Ansprüchen zu überzeugen. 

- **Wie gehe ich vor?** 
	- In vielen Städten gibt es örtliche Beratungsangebote für Mieter:innen. 
  - Einige Beratungsstellen sind kostenlos erreichbar, insbesondere für eine Erstberatung oder finanzschwache Personen. 
  - Auf der nächsten Seite geben wir Ihnen einen Überblick zu Beratungsstellen, um ein Gespräch zu vereinbaren.
  `,
    },
    {
      label: 'Über das Justizportal eine Klage einreichen',
      icon: HiScale,
      buttonText: 'Mehr Informationen zur Klage',
      buttonLink: `/zpo?id=${id}`,
      condition: nextSteps.indexOf(NextStepsType.Complaint) != -1,
      content: `
- **Warum?** 
  - Eine Klage ist ein Antrag auf eine gerichtliche Entscheidung durch eine Richter:in. 
  - Damit ist eine Klage der letzte Weg, Ihre Ansprüche durchzusetzen, wenn Ihre Vermieter:in diese nicht von sich erfüllt. 
  - Widersetzt sich Ihre Vermieter:in einem gerichtlichen Urteil, drohen ihr hohe Strafen.

- **Wie gehe ich vor?** 
  - Als erstes erstellen Sie eine Klageschrift.
	- Wenn Sie diese bei Gericht einreichen, wird ein Gerichtsverfahren eingeleitet.
  - Auch im Gericht wird erst versucht eine Einigung zu finden.
  - Sollte das nicht klappen wird eine Richter:in mit einem Urteil über ihren Fall entschieden. 
  - Hier informieren wir Sie, wie eine Klageeinreichung und das Gerichtsverfahren abläuft, und welche Kosten dabei entstehen. Im Anschluss können Sie selbst eine Klage einreichen.
`,
    },
  ];

  return (
    <PageBody marginInline={{ base: '0em', md: '2em' }} title="Mögliche Lösungen">
      <Heading marginInline={{ base: '2em', md: '0em' }}>Checkliste: Erste Schritte zur Problemlösung</Heading>
      <Spacer />
      <Accordion alignSelf="stretch" allowToggle>
        {data.map((acc, index) =>
          acc.condition ? (
            <AccordionItem>
              <AccordionButton>
                {<acc.icon size="2.5em" />}
                <Text fontWeight="bold" padding="1em">
                  {acc.label}
                </Text>
                <Spacer />
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <AnnotadedText text={acc.content} />
                <Spacer height="1.5em" />
                {acc.buttonLink && acc.buttonText ? (
                  <>
                    <Button colorScheme="green" paddingBlock="1em" as={ReactLink} to={acc.buttonLink}>
                      {acc.buttonText}
                    </Button>
                  </>
                ) : null}
                <Spacer height="1em" />
              </AccordionPanel>
            </AccordionItem>
          ) : null
        )}
      </Accordion>

      {/* <Tabs colorScheme="green" size="md" variant="enclosed" defaultIndex={0} isLazy>
        <TabList>
          {tabData.map((tab, index) => (
            <Tab key={index}>
              {<tab.icon size="2em" />}
              <Text>{tab.label}</Text>
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabData.map((tab, index) => (
            <TabPanel key={index} borderInline="1px solid" borderBlockEnd="1px solid" borderColor="inherit">
              <AnnotadedText text={tab.content} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs> */}
      {/* <AnnotadedText
        text={`Wenn sie nicht alle Punkte schriftlich kommuniziert haben, sollten Sie ein neues Schreiben erstellen.  
              Hier helfen wir Ihnen dabei: Wenn Sie den Vermietenden eine Frist zur Behebung des Mangels gesetzt haben, dann
              **warten** **Sie zunächst den Ablauf der Frist ab**, bevor Sie weitere Schritte unternehmen.
      `}
      /> */}

      <NavButtons linkBack={`/possibleentitlements?id=${id}`} />
    </PageBody>
  );
};
