import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { IconType } from 'react-icons';
import { FaEnvelopeOpen, FaRegEdit, FaUserTie } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { RiScales3Fill } from 'react-icons/ri';
import { Link as ReactLink } from 'react-router-dom';
import { AnnotadedText } from '../components/shared/AnnotatedText';
import { NavButtons } from '../components/shared/NavigationButtons';
import { PageBody } from '../components/shared/PageBody';
import { StaticProgress } from '../components/shared/StaticProgress';
import { homeURL, Primary, Routes } from '../Const';
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
  
###  
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
  
###  
**Wie gehe ich vor?** 
- Stellen sie zwei Monate nach Ihrer ersten Kontaktaufnahme mit der Fluglinie einen Schlichtungsantrag.
- Für die [meisten europäischen Fluglinien](https://soep-online.de/assets/files/20.07.soep-Mitgliederliste.pdf) können Sie einen [Antrag bei der söp (Schlichtungsstelle für den öffentlichen Personenverkehr e.V.)](https://soep-online.de/ihre-beschwerde/) stellen. Ansonsten ist die [Schlichtungsstelle Luftverkehr beim Bundesamt für Justiz](https://www.bundesjustizamt.de/DE/Themen/Buergerdienste/Luftverkehr/Schlichtungsstelle_node.html) für Ihren Fall zuständig.
- Wenn Ihr Antrag zulässig und berechtigt ist, macht die Stelle eine Schlichtungsempfehlung an Sie und die Fluglinie.
- Das gesamte Schlichtungsverfahren dauert etwa drei Monate. Danach können Sie immer noch Klage einreichen.
`,
      optional: true,
    },
    {
      label: t`Dokumentation des Mangels`,
      icon: FaRegEdit,
      buttonLink: '',
      buttonText: '',
      condition: nextSteps.indexOf(NextStepsType.Docu) != -1,
      content: `
**Warum?** 
- Um einen Nachweis für Ihre Vermieter:in und den weiteren Prozess zu haben, sollten Sie den Mangel dokumentieren.  
  
###  
**Wie gehe ich vor?** 
- Ist der Mangel sichtbar, bspw. ein Schimmelfleck oder Wasserschaden, können Sie Fotos oder Videos von allen betroffenen Bereichen der Wohnung machen. 
- Ist der Mangel nicht sichtbar, bspw. bei Lärmbelästigung, können Sie aufschreiben, wann und in welcher Form dieser auftritt. Auch ein Video kann helfen.`,
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
  
###  
**Wie gehe ich vor?** 
- Kontaktieren Sie Ihre Vermieter:in und schildern Sie den Mangel sachlich. 
- Benennen Sie klar Ihre Forderung, und setzen Sie Ihrer Vermieter:in eine realistische Frist, um den Mangel zu beseitigen. 
- Geben Sie an, die Miete nur noch unter Vorbehalt zu zahlen, wenn Sie einen Anspruch auf Mietminderung haben.
- Bleiben Sie dabei freundlich und höflich.  
  
###  
Hier helfen wir Ihnen, eine Mängelanzeige zu erstellen:
`,
      optional: false,
    },
    {
      label: t`Vermieter:in erneut kontaktieren`,
      icon: FiMail,
      buttonLink: '',
      buttonText: '',
      condition: nextSteps.indexOf(NextStepsType.LandlordLetterReview) != -1,
      content: `
**Warum?** 
- Ein zweites Schreiben kann Ihrer Forderung Nachdruck verleihen.
- Wenn Sie keine Reaktion von Ihrer Vermieter:in erhalten haben, hat Sie Ihre Mängelanzeige vielleicht auch nur übersehen.
- Wenn neue Kosten entstanden sind (z.B. Aufwendungen durch eigene Mängelbeseitigung), können Sie diese direkt von Ihrer Vermieter:in einfordern.  
  
###  
**Wie gehe ich vor?** 
- Kontaktieren Sie ihre Vermieter:in und weisen Sie erneut auf das Problem hin. 
- Benennen Sie klar Ihre Forderung, und setzen Sie eine letzte Frist zur Mängelbeseitigung oder Zahlung, bevor Sie weitere rechtliche Schritte ergreifen.
- Bleiben Sie dabei freundlich und höflich.    
`,
      optional: true,
    },
    {
      label: t`Online Klage einreichen`,
      icon: RiScales3Fill,
      buttonText: 'Zur Klageerstellung',
      buttonLink: `${homeURL}/${Routes.ZPOInformation}?id=${id}`,
      condition: nextSteps.indexOf(NextStepsType.Complaint) != -1,
      content: `
**Warum?** 
- Eine Klage ist der letzte Weg, Ihre Ansprüche durchzusetzen, wenn die Gegenseite diese nicht erfüllt. 
- Mit einer Klage beantragen Sie, dass eine Richter:in Ihren Fall vor Gericht entscheidet.  
  
###  
**Wie gehe ich vor?** 
- Zuerst können Sie sich bei uns über den Ablauf und die Kosten eines Gerichtsprozesses informieren.
- Dann helfen wir Ihnen, eine Klageschrift zu erstellen und einzureichen.
- Vor Gericht versucht die Richter:in, eine Lösung für Sie und die Gegenseite zu finden.
- Können Sie sich nicht einigen, wird die Richter:in mit einem Urteil über Ihren Fall entscheiden. 
  
###  
Wichtig ist, dass Sie die **Gegenseite schon direkt aufgefordert** haben, Ihre Ansprüche zu erfüllen.
  
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
  
###  
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
      <PageBody marginInline={{ base: 0, md: 10 }} title={t`Optionen`}>
        <StaticProgress currentStep={3} />
        <Heading px={{ base: 5, md: 0 }} alignSelf="center" paddingTop={5} fontSize="3xl">
          <Trans id="nextsteps.header">Ende des Lösungfinders: Mögliche nächste Schritte</Trans>
        </Heading>
        <Text px={{ base: 5, md: 0 }}>
          <Trans id="nextsteps.sub_header">
            Hier haben wir für Sie nächste Schritte zusammengefasst, um Ihre Ansprüche durchzusetzen. <br />
            Klicken Sie nacheinander auf die Felder, um mehr darüber zu erfahren.
          </Trans>
        </Text>
        <Accordion width="100%" flex="1" minW={'20em'} alignSelf="stretch" allowToggle>
          {data
            .filter((i) => i.condition)
            .map((acc, index) => (
              <AccordionItem>
                <AccordionButton>
                  {
                    <Box color={Primary()}>
                      <acc.icon size="2.5em" />
                    </Box>
                  }
                  <Text textAlign="left" fontWeight="bold" fontSize="lg" padding="1em">
                    <Trans>Schritt</Trans> {index + 1}: {acc.label}
                  </Text>
                  <Spacer />
                  <Text>
                    <Trans>Mehr erfahren</Trans>
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Spacer height={5} />
                  <AnnotadedText text={acc.content} />
                  <Spacer height={10} />
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
            ))}
        </Accordion>

        <Text px={{ base: 5, md: 0 }}>
          <Trans>
            Fall Sie sich unsicher fühlen, können Sie sich auch beraten lassen. Dafür haben wir{' '}
            <Link>hier Beratungsangebote zusammengefasst.</Link>
          </Trans>
        </Text>

        <NavButtons linkBack={`${homeURL}/${Routes.PossibleEntitlements}?id=${id}`} px={{ base: 5, md: 0 }} />
        <Spacer w={5} />
      </PageBody>
    </>
  );
};
