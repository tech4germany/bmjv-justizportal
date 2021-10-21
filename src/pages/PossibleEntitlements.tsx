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
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { FaMoneyBill, FaReceipt, FaTools } from 'react-icons/fa';
import { FiTrendingDown } from 'react-icons/fi';
import { Link as ReactLink } from 'react-router-dom';
import { AnnotadedText } from '../components/shared/AnnotatedText';
import { NavButtons } from '../components/shared/NavigationButtons';
import { PageBody } from '../components/shared/PageBody';
import { StaticProgress } from '../components/shared/StaticProgress';
import { homeURL } from '../Const';
import { Claims, MMGraph } from '../logic/KMParser';
import { Routes } from '../Routes';

interface FeatureProps {
  id: string | null;
  mmobject: MMGraph;
}

export const PossibleEntitlements = ({ id, mmobject, ...rest }: FeatureProps) => {
  // const green = useColorModeValue('.500', 'green.300');
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
- Die **Höhe der Zahlung** richtet sich nach der **Flugstrecke** und beträgt **250€ (unter 1500km)**, **400€ (bis zu 3500km)** oder **600€ (über 3500km)**.
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
- Wenn während der Mietzeit ein Mangel auftritt, muss die Vermieter:in ihn beseitigen.`,
    },
    {
      label: t`Mietminderung`,
      icon: FiTrendingDown,
      buttonLink: '',
      buttonText: '',
      condition: claims.indexOf(Claims.Mietminderung) != -1,
      content: `
      
- Ein Anspruch auf **Mietminderung** ist das Recht, eine **geringere Gesamtmiete zu zahlen**, wenn die **Nutzung der Wohnung**
durch einen Mangel **erheblich eingeschränkt** ist. 
- Ein **erheblicher Mangel** liegt vor, wenn mehr als **10% der Wohnfläche** durch den Mangel nicht mehr nutzbar ist, zum Beispiel bei Schimmel in einem Raum.
- Der Zeitraum der Minderung **beginnt mit der Anzeige des Mangels** bei der Vermieter:in, und **endet mit der Beseitigung**.
- Die Miete sollte nicht allein gekürzt werden, da man so eine Kündigung wegen Mietverzug riskiert. Stattdessen sollten Sie Ihrer Vermieterin melden, die **Miete unter Vorbehalt zu zahlen**.
- Um **wie viel Prozent** die Gesamtmiete gekürzt werden kann, hängt von der **Größe des Mangels** ab. Einen Anhaltspunkt für Ihren Fall können Sie in einer **Mietminderungstabelle** im Internet finden.


`,
    },
    {
      label: t`Aufwendungsersatz`,
      icon: FaReceipt,
      buttonLink: '',
      buttonText: '',
      condition: claims.indexOf(Claims.Aufwendungsersatz) != -1,
      content: `
      
- Ein Anspruch auf **Aufwendungsersatz** ist das Recht auf **Erstattung der Kosten**, die bei der **Beseitigung des Mangels** entstanden sind.
- Sie dürfen den Mangel selbst beseitigen, wenn die Vermieterin **mit der Beseitigung des Mangels in Verzug** ist, oder es sich um eine **Not- oder Eilmaßnahme** handelt.
`,
    },
    {
      label: t`Schadensersatz`,
      icon: FaMoneyBill,
      buttonLink: '',
      buttonText: '',
      condition: claims.indexOf(Claims.Schadensersatz) != -1,
      content: `
- Ein Anspruch auf **Schadensersatz** ist das Recht, sich **Geld** für durch den Mangel **entstandene Schäden erstatten** zu lassen.
- **Mögliche Schäden** sind **Hotelkosten**, unbrauchbar gewordene **Möbel**, oder auch Schmerzensgeld bei körperlichen Schäden.
- Wichtig ist, dass die Vermieter:in den Mangel zu vertreten hat, mit der Beseitigung in Verzug ist, oder diesen bei Vertragsabschluss verschwiegen hat.
`,
    },
  ];

  return (
    <>
      <StaticProgress currentStep={2} />
      <PageBody marginInline={{ base: '0em', md: '2em' }} title="Mögliche Lösungen">
        <Heading marginInline={{ base: '2em', md: '0em' }}>
          <Trans>Geschafft! Aus Ihren Angaben könnten sich folgende Ansprüche ergeben</Trans>
        </Heading>
        <AnnotadedText
          text={t`
Ein Anspruch ist das Recht, etwas von einer anderen Person oder einem Unternehmen zu fordern. Klicken Sie auf die Ansprüche, um mehr darüber zu erfahren. `}
        />
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
                      <Button colorScheme="green" paddingBlock="1em" as={ReactLink} to={`${homeURL}${acc.buttonLink}`}>
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
        <AnnotadedText
          text={t`
          Wenn Sie sich über Ihre Ansprüche informiert haben, zeigen wir Ihnen, 
          wie Sie diese durchsetzen können. Klicken Sie dafür einfach auf Weiter. `}
        />
        <NavButtons
          linkBack={`${homeURL}/${Routes.SolutionExplorer}?id=${mmobject.getParent(id)?.id}`}
          linkForward={`${homeURL}/${Routes.NextSteps}?id=${id}`}
        />
      </PageBody>
    </>
  );
};
