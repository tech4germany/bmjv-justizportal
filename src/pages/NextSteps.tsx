import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Heading,
  Spacer,
  Tag,
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
import { homeURL } from '../Const';
import { MMGraph, NextStepsType } from '../logic/KMParser';
import { IconType } from 'react-icons';
import { StaticProgress } from '../components/shared/StaticProgress';
import { t, Trans } from '@lingui/macro';
import { Card } from '../components/shared/Card';
import { Routes } from '../Const';

interface FeatureProps {
  id: string | null;
  mmobject: MMGraph;
}

interface NextStepData {
  label: string;
  icon: IconType;
  buttonLink: string;
  buttonText: string;
  condition: boolean;
  content: string;
  optional: boolean;
}

export const NextSteps = ({ id, mmobject, ...rest }: FeatureProps) => {
  let nextSteps: NextStepsType[] = mmobject.getNode(id).nextSteps;

  let data: NextStepData[] = [
    {
      label: t`Fluglinie kontaktieren`,
      icon: FaEnvelopeOpen,
      buttonLink: '',
      buttonText: '',
      condition: nextSteps.indexOf(NextStepsType.FluglinieKontaktieren) != -1,
      content: `
**Warum?** 
- Wenn Sie Ihre Fluglinie mit einem korrekten Anspruch kontaktieren, bezahlt diese meistens direkt Ihre Forderung. 
- Mit einer schriftlichen Aufforderung haben Sie außerdem einen Nachweis für den weiteren Prozess.  
  
  
**Wie gehe ich vor?** 
- Nutzen Sie das Kontaktformular Ihrer Fluglinie für EU-Fluggastrechte und stellen Sie Ihre Forderung. 
- Kontaktformulare finden Sie auf den Webseiten aller großen Fluglinien, beispielsweise bei [Ryanair](https://onlineform.ryanair.com/de/de/eu-261), [Lufthansa](https://www.lufthansa.com/de/de/feedback), 
[British Airways](https://www.britishairways.com/travel/customerportal/public/de_gb#/customer-service-portal), [AirFrance-KLM](https://wwws.airfrance.de/claim) oder [easyJet](https://www.easyjet.com/de/claim/EU261).
- Wenn Sie kein Formular finden, können Sie Ihre Forderung auch per Post oder E-Mail stellen. Schildern Sie dabei Ihren Fall konkret und setzen Sie eine Frist für die Zahlung, zum Beispiel zwei bis drei Wochen. 
- Nach Ablauf der Frist können Sie weitere Schritte unternehmen.
`,
      optional: false,
    },
    {
      label: t`Schlichtungsantrag stellen`,
      icon: FaEnvelopeOpen,
      buttonLink: '',
      buttonText: '',
      condition: nextSteps.indexOf(NextStepsType.Schlichtung) != -1,
      content: `
**Warum?** 
- Wenn Sie Ihre Fluglinie bereits kontaktiert haben, und diese Ihrer Forderung nicht nachgekommen ist, kann eine Schlichtung helfen.
- Eine Schlichtung verursacht keine Kosten, die Entscheidung ist aber nicht verpflichtend.
  
  
**Wie gehe ich vor?** 
- Stellen sie zwei Monate nach Ihrer ersten Kontaktaufnahme mit der Fluglinie einen [Schlichtungsantrag bei der söp (Schlichtungsstelle für den öffentlichen Personenverkehr e.V.)](https://soep-online.de/ihre-beschwerde/).
- Wenn Ihr Antrag zulässig und berechtigt ist, macht die söp eine Schlichtungsempfehlung an Sie und die Fluglinie.
- Falls dafür weitere Informationen notwendig sind, fragt sie söp diese bei Ihnen an.
- Das gesamte Schlichtungsverfahren dauert etwa drei Monate. Danach können Sie immer noch Klage einreichen.
`,
      optional: true,
    },
    {
      label: t`Dokumentation des Mangels`,
      icon: FaPencilAlt,
      buttonLink: '',
      buttonText: '',
      condition: nextSteps.indexOf(NextStepsType.Docu) != -1,
      content: `
**Warum?** 
- Um einen Nachweis für Ihre Vermieter:in und den weiteren Prozess zu haben, sollten Sie den Mangel dokumentieren.  
  
  
**Wie gehe ich vor?** 
- Ist der Mangel sichtbar, bspw. ein Schimmelfleck oder Wasserschaden, können Sie Fotos oder Videos von allen betroffenen Bereichen der Wohnung machen. 
- Ist der Mangel nicht sichtbar, bspw. bei Lärmbelästigung, sollten Sie aufschreiben wann und in welcher Form dieser auftritt.`,
      optional: false,
    },
    {
      label: t`Mängelanzeige bei Ihrer Vermieter:in`,
      icon: FaEnvelopeOpen,
      buttonText: 'Zur Vorlage für die Mängelanzeige',
      buttonLink: `${homeURL}/${Routes.Bryter}?mangelanzeige&id=${id}`,
      condition: nextSteps.indexOf(NextStepsType.LandlordLetter) != -1,
      content: `
**Warum?** 
- In den meisten Fällen beseitigen die Vermieter:innen einen Mangel, sobald sie benachrichtigt werden. 
- Mit einer schriftlichen Mängelanzeige haben Sie außerdem einen Nachweis für den weiteren Prozess.  
  
  
**Wie gehe ich vor?** 
- Kontaktieren Sie ihre Vermieter:in und schildern Sie den Mangel sachlich. 
- Benennen Sie klar Ihre Forderung, und setzen Sie Ihrer Vermieter:in eine realistische Frist, um den Mangel zu beseitigen. 
- Geben Sie an die Miete nur noch unter Vorbehalt zu zahlen, wenn Sie einen Anspruch auf Mietminderung haben.
- Bleiben Sie dabei freundlich und höflich.  
  
  
Hier helfen wir Ihnen, eine Mängelanzeige zu erstellen:
`,
      optional: false,
    },
    {
      label: t`Zweites Schreiben an die Vermieter:in senden`,
      icon: TiArrowLoop,
      buttonText: 'Zur Vorlage für die zweite Mängelanzeige',
      buttonLink: `${homeURL}/${Routes.Bryter}?mangelanzeige&id=${id}`,
      condition: nextSteps.indexOf(NextStepsType.LandlordLetterReview) != -1,
      content: `
**Warum?** 
- Wenn Sie keine Reaktion von Ihrer Vermieter:in erhalten haben, hat Sie Ihre Mängelanzeige vielleicht nur übersehen. Dann kann sich eine zweite Kontaktaufnahme lohnen.
- Mit der Androhung rechtlicher Schritte erhöhen Sie den Druck. Manche Vermieter:innen reagieren erst auf erhöhten Druck.  
  
  
**Wie gehe ich vor?** 
- Nutzen Sie unsere Vorlage und versenden Sie ein zweites Schreiben an Ihre Vermieter:in.
`,
      optional: false,
    },
    {
      label: t`Über das Justizportal eine Klage einreichen`,
      icon: HiScale,
      buttonText: 'Mehr Informationen zur Klage',
      buttonLink: `${homeURL}/${Routes.ZPOInformation}?id=${id}`,
      condition: nextSteps.indexOf(NextStepsType.Complaint) != -1,
      content: `
**Warum?** 
- Eine Klage ist der letzte Weg, Ihre Ansprüche durchzusetzen, wenn Ihre Vermieter:in diese nicht erfüllt. 
- Mit einer Klage beantragen Sie, dass eine Richter:in Ihren Fall vor Gericht entscheidet.
  
  
**Wie gehe ich vor?** 
- Zuerst können Sie sich bei uns über den Ablauf und die Kosten eines Gerichtsverfahrens informieren.
- Dann helfen wir Ihnen, eine Klageschrift zu erstellen und einzureichen.
- Vor Gericht versucht die Richter:in, eine Lösung für Sie und Ihre Vermieter:in zu finden.
- Können Sie sich nicht einigen, wird die Richter:in mit einem Urteil über ihren Fall entschieden. 
  
  
Hier informieren wir Sie über den Ablauf einer Klage und helfen Ihnen bei der Einreichung.
`,
      optional: true,
    },
    {
      label: t`Rechtlich beraten lassen`,
      icon: FaUserTie,
      buttonText: 'Zur Übersicht für Beratungsangebote',
      buttonLink: '#',
      condition: true,
      content: `
**Warum?** 
- In einer Rechtsberatung kann ihr Fall individuell von einer Expert:in bewertet werden. 
- Diese kann außerdem erneut Kontakt mit Ihrer Vermieter:in aufnehmen. 
- Manchmal kann beispielsweise ein Schreiben einer Anwält:in helfen, die Vermieter:in von Ihren Ansprüchen zu überzeugen. 
  
  
**Wie gehe ich vor?** 
- In vielen Städten gibt es örtliche Beratungsangebote für Mieter:innen. 
- Einige Beratungsstellen sind kostenlos erreichbar, insbesondere für eine Erstberatung oder finanzschwache Personen. 
  
  
Auf der nächsten Seite geben wir Ihnen einen Überblick zu Beratungsstellen.
  `,
      optional: true,
    },
  ];

  return (
    <>
      <StaticProgress currentStep={3} />
      <PageBody marginInline={{ base: '0em', md: '2em' }} title="Optionen">
        <Heading marginInline={{ base: '2em', md: '0em' }}>
          <Trans id="nextsteps.header">Ihre nächsten möglichen Schritte zur Problemlösung</Trans>
        </Heading>
        <Text>
          <Trans id="nextsteps.sub_header">
            Hier haben wir für Sie die möglichen Schritte zusammengefasst, um Ihre Ansprüche durchzusetzen. Klicken Sie
            nacheinander auf die Felder, um mehr darüber zu erfahren und Unterstützung zu erhalten.
          </Trans>
        </Text>
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
                  <Tag size="sm" variant="solid" colorScheme={acc.optional ? 'gray' : 'green'}>
                    {acc.optional ? 'Optional' : 'Empfohlen'}
                  </Tag>
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

        <NavButtons linkBack={`${homeURL}/${Routes.PossibleEntitlements}?id=${id}`} />
      </PageBody>
    </>
  );
};
