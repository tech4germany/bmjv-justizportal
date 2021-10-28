import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { FaMoneyBill, FaMoneyCheck, FaMugHot, FaReceipt, FaTools } from 'react-icons/fa';
import { FiTrendingDown } from 'react-icons/fi';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import { Link as ReactLink } from 'react-router-dom';
import { AnnotadedText } from '../components/shared/AnnotatedText';
import { PageBody } from '../components/shared/PageBody';
import { StaticProgress } from '../components/shared/StaticProgress';
import { homeURL, Primary, Routes } from '../Const';
import { Claims, MMGraph } from '../logic/KMParser';

interface FeatureProps {
  id: string | null;
  mmobject: MMGraph;
}

export const PossibleEntitlements = ({ id, mmobject, ...rest }: FeatureProps) => {
  let claims: Claims[] = mmobject.getNode(id).claims;

  let data = [
    {
      label: t`Ausgleichszahlung`,
      icon: FaMoneyBill,
      buttonLink: '',
      buttonText: '',
      condition: claims.indexOf(Claims.Ausgleichszahlung) != -1,
      content: t`
- Ein Anspruch auf **Ausgleichszahlung** ist das Recht auf eine **Entschädigung** durch Ihre Fluglinie.
- Sie bekommen eine Ausgleichszahlung, wenn Sie Ihr Ziel wegen **Verspätung**, **Annulierung** oder **Überbuchung** nicht oder nur verspätet erreichen konnten.
- Die **Höhe der Zahlung** richtet sich nach der **Flugstrecke** und beträgt **250€ (unter 1.500km)**, **400€ (zwischen 1.500km und 3.500km)** oder **600€ (über 3.500km)**.
`,
    },
    {
      label: t`Rückerstattung der Flugscheinkosten`,
      icon: FaMoneyCheck,
      buttonLink: '',
      buttonText: '',
      condition: claims.indexOf(Claims.Rückerstattung) != -1,
      content: t`
- Ein Anspruch auf **Rückerstattung der Flugscheinkosten** ist das Recht, Ihren gezahlten Ticketpreis bei Annulierung innerhalb einer Woche zurückzuerhalten.
- Zusätzlich erhalten Sie einen Rückflug zu Ihrem ersten Abflugort, wenn ein Anschlussflug annuliert wurde.
- Statt der Rückerstattung können Sie auch eine anderweitige Beförderung zu Ihrem Zielort durch die Fluglinie wählen.`,
    },
    {
      label: t`Betreuungsleistungen (Essen, Getränke & Unterbringung)`,
      icon: FaMugHot,
      buttonLink: '',
      buttonText: '',
      condition: claims.indexOf(Claims.Betreuungsleistung) != -1,
      content: t`
- Ein Anspruch auf **Betreuungsleistungen** ist das Recht auf zusätzliche Unterstützung wie Essen und Getränke, wenn sich Ihr Abflug stark verzögert.
- Betreuungsleistungen müssen angemessen zur Wartezeit und Tageszeit sein. (Kleine) Mahlzeiten und Getränke sowie Zugang zu  Telefon oder Internet sind immer angemessen.
- Wenn **lange Wartezeiten am Flughafen bei Nacht** entstehen, kann auch das Recht auf eine **Hotelunterbringung** mit Transport dorthin bestehen. 
`,
    },
    {
      label: t`Beseitigung des Mangels durch die Vermieter:in`,
      icon: FaTools,
      buttonLink: '',
      buttonText: '',
      condition: claims.indexOf(Claims.Mängelbeseitigung) != -1,
      content: t`


- Ein Anspruch auf **Mängelbeseitigung** ist das Recht, Ihre **Vermieter:in aufzufordern, den Mangel zu beseitigen**.
- Vermieter:innen haben die Pflicht, die Mietwohnung in einem nutzbaren Zustand zu übergeben und zu erhalten.
- Wenn während der Mietzeit ein Mangel auftritt, muss die Vermieter:in ihn beseitigen.
- Ausnahme: Mietende können für Kleinreperaturen bis etwa 100 Euro veranwortlich sein, wenn das im Mietvertrag festgelegt wurde.`,
    },
    {
      label: t`Mietminderung`,
      icon: FiTrendingDown,
      buttonLink: '',
      buttonText: '',
      condition: claims.indexOf(Claims.Mietminderung) != -1,
      content: t`
      
- Ein Anspruch auf **Mietminderung** ist das Recht, eine **geringere Gesamtmiete zu zahlen**, wenn die **Nutzung der Wohnung**
durch einen Mangel **erheblich eingeschränkt** ist. 
- Ein **erheblicher Mangel** liegt vor, wenn der Mangel nicht nur optisch und die Wohnqualität stark beeinträchtigt ist.
- Der Zeitraum der Minderung **beginnt mit der Anzeige des Mangels** bei der Vermieter:in, und **endet mit der Beseitigung**.
- Sie sollten nicht sofort eine geringere Miete zahlen, da Sie so eine Kündigung wegen Mietverzug riskieren können. Stattdessen können Sie Ihrer Vermieterin melden, die **Miete unter Vorbehalt zu zahlen**. Nach Beseitigung des Mangels können Sie dann einen Anteil zurückfordern.
- Um **wie viel Prozent** die Gesamtmiete gekürzt werden kann, hängt von der **Schwere des Mangels** ab. Einen Anhaltspunkt für Ihren Fall können Sie in einer **Mietminderungstabelle** im Internet finden.

`,
    },
    {
      label: t`Aufwendungsersatz`,
      icon: FaReceipt,
      buttonLink: '',
      buttonText: '',
      condition: claims.indexOf(Claims.Aufwendungsersatz) != -1,
      content: t`
      
- Ein Anspruch auf **Aufwendungsersatz** ist das Recht auf **Erstattung der Kosten**, die bei der **Beseitigung des Mangels** entstanden sind.
- Sie dürfen den Mangel selbst beseitigen, wenn die Vermieterin **mit der Beseitigung des Mangels in Verzug** ist, oder es sich um eine **Not- oder Eilmaßnahme** handelt.
- Meistens sollten Sie den Mangel erst selbst beseitigen, wenn Sie Ihre Vermieterin mit einer Frist zur Beseitigung aufgefordert haben, und der Mangel danach nicht behoben wurde. 
`,
    },
    {
      label: t`Schadensersatz`,
      icon: FaMoneyBill,
      buttonLink: '',
      buttonText: '',
      condition: claims.indexOf(Claims.Schadensersatz) != -1,
      content: t`
- Ein Anspruch auf **Schadensersatz** ist das Recht, sich **Geld** für durch den Mangel **entstandene Schäden erstatten** zu lassen.
- **Mögliche Schäden** sind entstandene **Hotelkosten**, Wertverlust bei unbrauchbar gewordenen **Möbeln**, oder auch Schmerzensgeld bei körperlichen Schäden.
- Wichtig ist, dass die Vermieter:in den Mangel zu vertreten hat, mit der Beseitigung in Verzug ist, oder diesen bei Vertragsabschluss verschwiegen hat.
`,
    },
  ];

  return (
    <>
      <PageBody marginInline={{ base: 0, md: 10 }} title={t`Mögliche Lösungen`}>
        <StaticProgress currentStep={3} />
        <Heading px={{ base: 5, md: 0 }} alignSelf="center" paddingTop={5} fontSize="3xl">
          <Trans id="pe.header">Aus Ihren Angaben könnten sich diese Ansprüche ergeben</Trans>
        </Heading>
        <AnnotadedText
          px={{ base: 5, md: 0 }}
          text={t({
            id: 'pe.sub_header',
            message: `
Ein Anspruch ist das Recht, etwas von einer anderen Person oder einem Unternehmen zu fordern. Sie können mehrere Ansprüche durchsetzen. 
Klicken Sie auf die Ansprüche, um mehr darüber zu erfahren. Auf der nächsten Seite informieren wir Sie dann über mögliche nächste Schritte. `,
          })}
        />

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
                    {acc.label}
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

        <AnnotadedText
          px={{ base: 5, md: 0 }}
          text={t`
          Wenn Sie sich über Ihre Ansprüche informiert haben, zeigen wir Ihnen, 
          wie Sie diese durchsetzen können. Klicken Sie dafür einfach auf Weiter. `}
        />

        <HStack spacing="1em" px={{ base: 5, md: 0 }}>
          <Button
            as={ReactLink}
            to={`${homeURL}/${Routes.SolutionExplorer}?id=${mmobject.getParent(id)?.id}`}
            leftIcon={<IoMdArrowRoundBack />}>
            <Trans id="back">Zurück</Trans>
          </Button>
          <Button
            colorScheme="secondary"
            as={ReactLink}
            to={`${homeURL}/${Routes.NextSteps}?id=${id}`}
            rightIcon={<IoMdArrowRoundForward />}>
            <Trans id="pe.to_next_steps">Zu den nächsten Schritten</Trans>
          </Button>
        </HStack>

        <Spacer w={5} />
      </PageBody>
    </>
  );
};
