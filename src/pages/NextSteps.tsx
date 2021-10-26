import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { IconType } from 'react-icons';
import { FaEnvelopeOpen, FaPencilAlt, FaUserTie } from 'react-icons/fa';
import { HiScale } from 'react-icons/hi';
import { TiArrowLoop } from 'react-icons/ti';
import { Link as ReactLink } from 'react-router-dom';
import { AnnotadedText } from '../components/shared/AnnotatedText';
import { Card } from '../components/shared/Card';
import { CardContent } from '../components/shared/CardContent';
import { CardHeader } from '../components/shared/CardHeader';
import { NavButtons } from '../components/shared/NavigationButtons';
import { PageBody } from '../components/shared/PageBody';
import { StaticProgress } from '../components/shared/StaticProgress';
import { homeURL, Routes } from '../Const';
import { MMGraph, NextStepsType } from '../logic/KMParser';

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
- Eine Schlichtung verursacht keine Kosten, die Entscheidung ist aber nicht verbindlich für die Fluglinie.
  
  
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
- Als Mieter:in sind Sie verpflichtet, Mängel in Ihrer Wohnung zu melden.
- Meistens beseitigen Vermieter:innen einen Mangel, sobald sie benachrichtigt werden. 
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
      label: t`Vermieter:in erneut kontaktieren`,
      icon: TiArrowLoop,
      buttonLink: '',
      buttonText: '',
      condition: nextSteps.indexOf(NextStepsType.LandlordLetterReview) != -1,
      content: `
**Warum?** 
- Ein zweites Schreiben kann Ihrer Forderung Nachdruck verleihen.
- Wenn Sie keine Reaktion von Ihrer Vermieter:in erhalten haben, hat Sie Ihre Mängelanzeige vielleicht auch nur übersehen.
- Wenn neue Kosten entstanden sind (z.B. Aufwendungen durch eigene Mängelbeseitigung), können Sie diese direkt von Ihrer Vermieter:in einfordern.  
  
  
**Wie gehe ich vor?** 
- Kontaktieren Sie ihre Vermieter:in und weisen Sie erneut auf das Problem hin. 
- Benennen Sie klar Ihre Forderung, und setzen Sie eine letzte Frist zur Mängelbeseitigung oder Zahlung, bevor Sie weitere rechtliche Schritte ergreifen.
- Bleiben Sie dabei freundlich und höflich.    
`,
      optional: true,
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
      condition: false,
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
      <PageBody marginInline={{ base: 0, md: 10 }} title="Optionen">
        <Heading px={{ base: 5, md: 0 }}>
          <Trans id="nextsteps.header">Ihre nächsten möglichen Schritte zur Problemlösung</Trans>
        </Heading>
        <Text px={{ base: 5, md: 0 }}>
          <Trans id="nextsteps.sub_header">
            Hier haben wir für Sie die möglichen Schritte zusammengefasst, um Ihre Ansprüche durchzusetzen. Klicken Sie
            nacheinander auf die Felder, um mehr darüber zu erfahren und Unterstützung zu erhalten.
          </Trans>
        </Text>
        <Flex flexDir={{ base: 'column', md: 'row' }} gridGap="2em">
          <Accordion flex="3" minW={'20em'} alignSelf="stretch" allowToggle>
            {data.map((acc, index) =>
              acc.condition ? (
                <AccordionItem>
                  <AccordionButton>
                    {<acc.icon size="2.5em" />}
                    <Text fontWeight="bold" padding="1em">
                      {acc.label}
                    </Text>
                    {/* <Tag size="sm" minW="fit-content" variant="solid" colorScheme={acc.optional ? 'gray' : 'primary'}>
                      {acc.optional ? 'Optional' : 'Empfohlen'}
                    </Tag> */}
                    <Spacer />
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <AnnotadedText text={acc.content} />
                    <Spacer height="1.5em" />
                    {acc.buttonLink && acc.buttonText ? (
                      <>
                        <Button colorScheme="secondary" paddingBlock="1em" as={ReactLink} to={`${acc.buttonLink}`}>
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

          <Card flex="2" mx={{ base: 5, md: 0 }}>
            <CardHeader IconLeft={FaUserTie} title={t`Rechtlich beraten lassen`} />
            <CardContent>
              <AnnotadedText
                text={`
**Fall Sie sich unsicher fühlen, kann ein Rechtsberatung für Sie sinnvoll sein**
- Hier kann eine Expert:in ihren Fall individuell bewerten. 
- Einige Beratungsstellen sind kostenlos. Insbesondere für eine Erstberatung oder Personen mit wenig Geld. 
  `}
              />
              <Spacer height={5} />
              <Button colorScheme="primary">Überblick Beratungsstellen</Button>
            </CardContent>
          </Card>
        </Flex>

        <NavButtons linkBack={`${homeURL}/${Routes.PossibleEntitlements}?id=${id}`} />
      </PageBody>
    </>
  );
};
