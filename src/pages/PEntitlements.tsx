import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import * as React from 'react';
import { FaMoneyBill, FaReceipt, FaTools } from 'react-icons/fa';
import { FiTrendingDown } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
import { NavButtons } from '../components/shared/NavigationButtons';
import { PageBody } from '../components/shared/PageBody';
import { Claims, MMGraph } from '../logic/KMParser';

const AccItem = (props: {
  title: string;
  children: React.ReactNode;
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
      <VStack align="start">{props.children}</VStack>
    </AccordionPanel>
  </AccordionItem>
);

interface FeatureProps {
  id: string | null;
  mmobject: MMGraph;
}

export const PossibleEntitlements = ({ id, mmobject, ...rest }: FeatureProps) => {
  // const green = useColorModeValue('.500', 'green.300');
  let claims: Claims[] = mmobject.getNode(id).claims;

  return (
    <PageBody title="Mögliche Ansprüche">
      <Heading>Aus Ihren Angaben könnten sich folgende Ansprüche ergeben</Heading>
      <Spacer />

      <Accordion alignSelf="stretch" allowToggle allowMultiple>
        <AccItem
          title="Beseitigung des Mangels"
          icon={<FaTools size="2.5em" />}
          display={claims.indexOf(Claims.Mängelbeseitigung) != -1 ? 'inherit' : 'none'}>
          <Text>
            Einen Anspruch auf Beseitigung des Mangels geltend zu machen heißt: <br />
            Den Vermieter bitten, diese zu beseitigen. Vermieter:innen haben die Pflicht, die Mietsache in einem Zustand
            zu übergeben und zu erhalten, die der vertraglichen Vereinbarung entspricht. Dafür zahlen die Mietenden die
            Miete. Wenn während der Mietzeit ein Mangel auftritt, dann muss die Vermieter:in ihn beseitigen. <br />
            <br />
            Ausnahme: <br />
            bei Kleinreparaturen bis zu einem Betrag von ca. 100 Euro pro Reparatur, wenn das im Vertrag so steht und
            ein Jahres-Höchstbetrag festgelegt wurde. Den Anspruch auf Beseitigung des Mangels kann man gegenüber dem
            Vermieter geltend machen, indem man ihn auffordert, den Mangel zu beseitigen. Oft geschieht dies gemeinsam
            mit der Mitteilung über den Mangel.
          </Text>
        </AccItem>
        <AccItem
          title="Mietminderung"
          icon={<FiTrendingDown size="2.5em" />}
          display={claims.indexOf(Claims.Mietminderung) != -1 ? 'inherit' : 'none'}>
          <ReactMarkdown components={ChakraUIRenderer()}>
            {`Einen Anspruch auf Mietminderung geltend zu machen heißt: 
Für einen Zeitraum, in der die Nutzung der Wohnung durch einen Mangel erheblich eingeschränkt wurde, eine geringere Miete zu bezahlen. Ein Anspruch auf Mietminderung kann zusätzlich neben dem Anspruch auf Mängelbeseitigung bestehen. Die Minderung der Miete tritt automatisch ein, wenn die Mängel in der Wohnung festgestellt werden. Vorher müssen die Mietenden den Mangel aber den Vermietenden anzeigen. 

**Wie hoch darf die Mietminderung ausfallen?** 
Die Miete sollte zunächst nicht eigenmächtig gekürzt werden, sondern unter **Vorbehalt** gestellt und in voller Höhe weitergezahlt werden. Denn um wieviel die Miete gekürzt werden kann, hängt davon ab, wie schwer der Mangel ist und wie lange er vorliegt. Eine fehlende Einbauküche, die laut Mietvertrag in der Wohnung hätte sein müssen, kann bspw. eine Minderung von 20 Prozent rechtfertigen. Solche Entscheidungen lassen sich in Mietminderungstabellen finden. Die Urteile dort sind aber nur Richtwerte und bieten lediglich eine grobe Orientierung. Eine zu hohe Kürzung ist gefährlich, weil sie unter Umständen eine **Kündigung** rechtfertigen kann. 

**Bezugspunkt für die Mietminderung ist die Bruttomiete** einschließlich aller von den Mietenden endgültig zu tragenden Betriebs- und Nebenkosten. 

**Wie stellt man die Mietzahlungen unter Vorbehalt? —> [Vorlage Mängelanzeige](https://www.notion.so/Vorlage-M-ngelanzeige-a6d70b4dbd7d4140bd146218f997025c)** 

> Die Herabsetzung der Miete durch Mietminderung setzt voraus, dass der Mangel erheblich ist. Ein unerheblicher Mangel liegt vor, wenn der Mangel leicht erkennbar und mit geringen Kosten zu beseitigen ist. Geringfügig kann ein Mangel bspw. dann sein, wenn einmalig Lärm aus der Nachbarwohnung dringt und die Schalldämmung nur ein wenig unterschritten wurde oder bei einem sehr kurzen Heizungsausfall. Wenn die **Wohnungsgröße** mehr als **10%** von der im Mietvertrag vereinbarten Größe abweicht, kann ein erheblicher Mangel vorliegen. 
`}
          </ReactMarkdown>
        </AccItem>
        <AccItem
          title="Aufwendungsersatz"
          icon={<FaReceipt size="2.5em" />}
          display={claims.indexOf(Claims.Aufwendungsersatz) != -1 ? 'inherit' : 'none'}>
          <ReactMarkdown components={ChakraUIRenderer()}>
            {`Ein Anspruch auf Aufwendungsersatz kann bestehen, wenn Mieter:innen einen Mangel selbstständig beseitigen und sich die Kosten dafür ersetzen lassen möchten.

In den folgenden Fällen dürfen Mietende den Mangel selbst beseitigen (sogenannte Ersatzvornahme) und sich die Aufwendungen ersetzen lassen: Entweder wenn der Vermietende **mit der Beseitigung des Mangels in Verzug** ist oder wenn die Mangelbeseitigung **umgehend erforderlich** war, weil es sich um eine **Not- oder Eilmaßnahme**  handelte.
`}
          </ReactMarkdown>
        </AccItem>
        <AccItem
          title="Schadensersatz"
          icon={<FaMoneyBill size="2.5em" />}
          display={claims.indexOf(Claims.Schadensersatz) != -1 ? 'inherit' : 'none'}>
          <ReactMarkdown components={ChakraUIRenderer()}>
            {`Einen Anspruch auf Schadensersatz geltend zu machen heißt:
Sich weitere Kosten für Schäden, die durch den Mietmangel entstanden sind, erstatten lassen.

Andere Schäden wie etwa Lebensmittel, die wegen eines Stromausfalls verdorben sind, Hotelkosten oder Möbel, die infolge eines Brandes, Feuchtigkeitseinwirkung, Schimmel- oder Parasitenbefalls unbrauchbar geworden sind, können unter Umständen ebenfalls ersetzt werden. Auch wenn die mietende Person körperliche Schädigungen erleidet. In diesem Fall können Ansprüche auf Ersatz der Heilbehandlungskosten und des Verdienstausfalls oder auch auf Zahlung eines angemessenen Schmerzensgelds bestehen.

Es gilt: Wenn der Mangel schon bei Vertragsschluss vorlag, dann haften die Vermietenden unabhängig von ihrem etwaigen Verschulden. Entstand der Mangel erst nach Vertragsschluss, dann kommt es darauf an, ob die vermietende Person den Mangel zu vertreten hat oder mit der Beseitigung des Mangels in Verzug war.
`}
          </ReactMarkdown>
        </AccItem>
      </Accordion>
      <Spacer height="2em" />

      <NavButtons linkBack={`/solutionexplorer?id=${mmobject.getParent(id)?.id}`} linkForward={`/nextsteps?id=${id}`} />
    </PageBody>
  );
};
