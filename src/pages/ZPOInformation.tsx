import { Box, useColorModeValue } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import { Hero } from "../components/shared/Hero";

interface FeatureProps {}

export const ZPOInformation = (props: FeatureProps) => {
  const green = useColorModeValue("green.500", "green.300");
  const s: string = `
# Informationen zur Klage & Gerichtsverfahren

## Zusammenfassung

Wenn sich ein Streit oder ein Konflikt nicht einvernehmlich lösen lassen, kann es als letzte Konsequenz nötig sein, vor Gericht zu gehen. Gerichte können Streitigkeiten verbindlich klären und Entscheidungen dazu treffen. Vor Gericht entscheiden Richterinnen und Richter.  Grundlage ihrer Entscheidungen ist die von den Parteien geschilderte Situation. Es kommt also darauf an, was die Parteien (also Kläger:innen und Beklagte) dem Gericht vortragen. Wenn nicht klar ist, welche Version einer Geschichte stimmt, wird Beweis erhoben. Das Gericht ermittelt den Sachverhalt also nicht selbst, sondern fällt sein Urteil allein auf Basis der Informationen, die Kläger und Beklagter dem Gericht geben. 

Die Rechtslage - also die rechtliche Bewertung der Streitfrage - und möglicherweise auch das Ergebnis einer solchen Beweisaufnahme sind dann dafür entscheidend, ob man ganz oder teilweise verliert oder gewinnt. Wer verliert, muss die Prozesskosten tragen. Das sind die Kosten des Gerichts, die eigenen und die Kosten der anderen Partei. Oft verliert oder gewinnt eine Partei auch nur teilweise. Jeder trägt dann die Kosten in Höhe des Anteils, den er verloren hat.  

## **Auf einen Blick**

- Wer klagt, stellt damit einen Antrag auf Eröffnung eines Gerichtsverfahrens.
- Klage einreichen können alle in der Regel volljährigen Bürger und die gesetzlichen Vertreter von Minderjährigen.
- Welches Gericht zuständig ist, hängt vom Rechtsproblem und dem Streitwert ab.
- Bei Streitigkeiten vor den Landgerichten und den Oberlandesgerichten besteht die Pflicht, sich von Anwält:innen vertreten zu lassen. Vor dem Amtsgericht, an dem alle auf unserem Portal geschilderten Fälle verhandelt werden, können Sie sich selbst vertreten.
- Ein Klageverfahren folgt einem festgelegten Ablauf und dauert üblicherweise zwischen 4 und 10 Monaten.
- Das Gericht ermittelt in bürgerlich-rechtlichen Streitigkeiten nicht selbst, sondern urteilt allein auf Basis der Informationen, die Kläger:innen und Beklagte liefern.
- Wer vor Gericht verliert, muss in der Regel die Kosten des Verfahrens in der Höhe tragen, in der er verloren hat.
- Wenn Sie nicht in der Lage sind, die Kosten für ein Gerichtsverfahren zu tragen, können Sie unter Umständen eine Prozesskostenhilfe beantragen. Wird diese bewilligt, müssen Sie keine Kosten tragen. Diese können Sie später im Prozess ebenfalls über unser Portal beantragen.
- Anwält:innen können die Erfolgsaussichten schon vor Klageeinreichung bewerten und Ihre Chancen im Verfahren durch ihre Erfahrung und eine angemessene Verhandlungsstrategie steigern.

**Ich fühle mich ausreichend informiert und möchte Klage einreichen.**  [Login ](https://www.notion.so/Login-28847db9c60445bb9584bb8dbd779615) 

## **Inhaltsverzeichnis**

# 1. Was ist eine Klage?

Mit einer Klage können Bürger:innen, aber auch Organisationen ihre eigenen rechtlichen Positionen vor Gericht geltend machen. Die Klage selbst besteht aus einem konkreten Anliegen (dem Klageantrag), das darauf abzielt, einen eigenen Rechtsanspruch durchzusetzen. 

Mit der Klage wird zunächst ein **Gerichtsverfahren eingeleitet.** Wer Klage einreicht, hat das Ziel, einen Streitfall durch einen Richter / eine Richterin verbindlich klären zu lassen.

Jeder **volljährige Bürger** kann Klage erheben. Für Minderjährige können regelmäßig **stellvertretend** die Eltern bzw. der Vormund Klage erheben. Bei juristischen Personen (Unternehmen) steht dieses Recht dem Vorstand bzw. dem Geschäftsführer zu.

# 2. Wann sollte man klagen?

Zu Gericht geht man in der Regel dann, wenn die Versuche, sich ohne Gericht zu einigen gescheitert sind. Deswegen sollte man in der Regel nur klagen, wenn man vorher versucht hat sich zu einigen. Natürlich gibt es immer Ausnahmefälle. Außerdem sollte man sich gut überlegen, ob einem der Anspruch, den man geltend macht auch wirklich zustehen kann. Es geht also auch darum abzuschätzen, ob man mit der Klage gute Chancen auf Erfolg haben kann. 

**Tipps, wie Du versuchen kannst, Dich zu einigen, findest du hier.**

Hat es nicht geklappt, sich zu einigen kannst Du mit einer Klage das Gericht über Deinen Streit entscheiden lassen.

# 3. Was macht eine Klage?

In einem **Zivilprozess** ermittelt das Gericht nicht selbst. Stattdessen gilt der sogenannte **Beibringungsgrundsatz**: Der Richter entscheidet nur auf Basis der Ausführungen und Beweise, die ihm Kläger und Beklagter zutragen. Die Argumentation in der Klageschrift und während der Verhandlung kann für den Ausgang eines Verfahrens also entscheidend sein.

Auch kann der Prozess schon zu Ende sein, bevor er überhaupt anfängt: Das Gericht prüft zunächst anhand der Klageschrift, ob die Klage überhaupt begründet sein kann. Ist in der Klageschrift nicht schlüssig erläutert, warum eine Klage notwendig und angebracht ist, weist das Gericht die **Klage** als **unbegründet** ab.

## Auswirkung einer Klage

Auch in einer Klage wird erst einmal versucht eine Einigung zu finden. Das nennt man Güteverhandlung. 

Wenn das nicht klappt, spricht der Richter am Ende der Verhandlungen ein sogenanntes streitiges Urteil. 

Das Urteil ist ein **vollstreckbarer Titel**. Das bedeutet, dass der Gewinner des Rechtsstreits die Zwangsvollstreckung einleiten darf, wenn die unterlegene Seite ihre Pflichten nicht freiwillig erfüllt.

zB ein Mieter klagt wegen Schimmel in der Wohnung und gewinnt. Jetzt kann er den Vermieter zwingen ihm die Mietminderung zu zahlen. Notfalls mit Hilfe von Gerichtsvollziehern und Polizei. 

Gegen das Urteil des Amts- oder Landgerichts können Sie **binnen eines Monats** [Berufung einlegen](https://www.advocado.de/ratgeber/verfahrensrecht/prozessrecht/berufung-einlegen.html). Der Fall wird dann von der **nächsthöheren Instanz** noch einmal aufgerollt. Bedingung ist, dass der Streitwert mindestens 600 Euro ist.

# 4. Kosten

Bei der Klageeinreichung entstehen **Gerichtskosten**. Der Kläger muss zunächst in Vorleistung treten und den sogenannten **Gerichtskostenvorschuss** einzahlen. Erst wenn die Gebühr eingegangen ist, fängt das Gericht an zu arbeiten.
Wer sich anwaltlich vertreten lässt, muss zusätzlich auch das **Anwaltshonorar** zahlen. Wie hoch die Kosten für den Anwalt und das Gericht sind, hängt vom **Streitwert** ab.
Das Anwaltshonorar ist in der Gebührentabelle des Rechtsanwaltsvergütungsgesetzes (RVG) festgelegt. Die Gerichtskosten sind im Gerichtskostengesetz (GKG) geregelt. Um das Prozesskostenrisiko möglichst gering zu halten und eine aussichtslose Klage zu vermeiden, können Sie die Kosten vorab z. B. mit einem  [Prozesskostenrechner](https://www.advocado.de/ratgeber/vertragsrecht/anwaltskosten/prozesskostenrechner-gerichtskostenrechner.html)  abschätzen.

Die folgende Tabelle zeigt die Kosten **exemplarisch** für unterschiedliche Streitwerte. **Gerichtsgebühren fallen dabei mehrfach an.**

[Gerichtskosten](https://www.notion.so/c25cf942a9d24d6a96e00aa997423e52)

*In der Beispielrechnung beinhaltet das Anwaltshonorar die außergerichtliche Tätigkeit, die Vertretung im Klageverfahren und die Mehrwertsteuer.

Wenn Sie nicht in der Lage sind, die Kosten für ein Gerichtsverfahren zu tragen, können Sie unter Umständen eine Prozesskostenhilfe beantragen. Wird diese bewilligt, müssen Sie keine Kosten tragen. Diese können Sie später im Prozess ebenfalls über unser Portal beantragen.

## Wer zahlt?

Wenn Sie den Rechtsstreit vor Gericht gewinnen, muss in den allermeisten Fällen die **Gegenseite alle entstandenen Kosten** tragen: die vollen Gerichtsgebühren, Ihre [Anwaltskosten](https://www.advocado.de/ratgeber/vertragsrecht/anwaltskosten/anwaltskostenrechner-anwaltskosten-fuer-erstberatung-und-beratung-berechnen.html) und auch alle Auslagen für Zeugen und Sachverständigengutachten.
**Ausnahmen:**

- Kommt es zu einem Vergleich, handeln die Parteien aus, wer welche Prozesskosten trägt.
- Bei Prozessen vor dem Arbeitsgericht zahlt jede Partei immer ihren eigenen Anwalt, unabhängig vom Ausgang des Prozesses.
Andersherum müssen Sie als Kläger alle Kosten übernehmen, wenn Sie vor Gericht unterliegen.

## Prozesskostenhilfe

Wer finanziell nicht in der Lage ist, einen Prozess zu bezahlen, kann Prozesskostenhilfe beantragen. Der Kläger muss dazu seine **Finanzen offenlegen**. Anschließend prüft ein Richter, ob die wirtschaftlichen Voraussetzungen gegeben sind und ob die Klage Aussicht auf Erfolg hat.
Wird der Prozesskostenhilfe bewilligt, übernimmt die Gerichtskasse alle anfallenden Gerichtsgebühren und die eigenen Anwaltskosten – je nach finanziellen Verhältnissen entweder als **Vollzuschuss oder als Darlehen**, das in Raten zurückzuzahlen ist.
Die Prozesskostenhilfe muss nicht zurückzahlen, wer vom Sozialhilfesatz lebt und nicht mehr als 3.000 Euro Ersparnisse hat. Nicht angerechnet wird eine selbst genutzte Immobilie.

Kosten können dem Kläger auch trotz Prozesskostenhilfe entstehen: Wer den Prozess verliert, muss das Anwaltshonorar der Gegenseite aus eigener Tasche bezahlen.

# 5. Ablauf

Jeder Zivilprozess folgt einem festen Ablauf:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b07f029-62df-4260-b894-0067d51964b0/Untitled.png)

- I. Schriftliches Vorverfahren
    
    Nachdem Sie die Klage beim Gericht eingereicht haben, wird die Klageschrift der Gegenseite zugestellt. Innerhalb einer **2-Wochen-Frist** muss der Beklagte schriftlich anzeigen, dass er sich gegen die Klage verteidigen will. Ansonsten ergeht ein Versäumnisurteil.
    
    Anschließend haben dann wieder Sie als Kläger Gelegenheit, auf die **Klageerwiderung** – die Stellungnahme der Gegenseite – zu reagieren. Es ist nicht ungewöhnlich, dass Kläger und Beklagter mehrere Schreiben austauschen, bevor es zum Gerichtstermin kommt.
    
    Gerade bei komplexen Rechtsstreitigkeiten kann der Richter so die gegensätzlichen Standpunkte beider Parteien in Ruhe nachvollziehen.
    
- II. Güteverhandlung
    
    Nach dem schriftlichen Vorverfahren lädt das Gericht zur Güteverhandlung. Sie findet vor der eigentlichen mündlichen Verhandlung statt. **Ziel** ist es, den **Prozess abzukürzen** und Ressourcen zu schonen. Das Gericht ordnet in der Regel an, dass beide Parteien persönlich zur Güteverhandlung erscheinen.
    
    > Wer trotz Ladungen des Gerichts unentschuldigt bei der mündlichen Verhandlung fehlt, dem können prozessuale Nachteile und Ordnungsmittel drohen.
    
    > Das Gericht frühzeitig zu informieren, wenn Sie durch eine Reise oder krankheitsbedingt verhindert sind und Nachweise (Attest bzw. Urlaubsbuchung) einzureichen, kann deshalb sinnvoll sein.
    
    Der Richter schildert den Sachverhalt, wie er ihn bisher verstanden hat, und erläutert seine vorläufige Bewertung des Rechtsstreits. Anschließend kann er einen Vorschlag für einen **Vergleich** machen – also eine angemessene, für beide Seiten akzeptable Lösung.
    
    Mit einem Vergleich ist das Verfahren genauso **verbindlich abgeschlossen** wie durch einen Urteilsspruch. Der Kläger kann seine Forderung wenn nötig per Zwangsvollstreckung durchsetzen.
    
    Eine **Güteverhandlung** kann zu **4 Ergebnissen** führen:
    
    1. Kläger und Beklagter einigen sich auf einen Vergleich
    2. Der Beklagte erkennt die Forderung an
    3. Der Kläger zieht die Klage zurück
    4. Kein Ergebnis
    
    Tritt eine der ersten 3 Optionen ein, ist der **Prozess beendet**. Bringt die Güteverhandlung kein Ergebnis, lädt das Gericht die Streitparteien im nächsten Schritt zur **mündlichen Verhandlung**. Diese kann entweder direkt im Anschluss an die Güteverhandlung oder zu einem späteren Termin stattfinden.
    
- III. Mündliche Verhandlung und ggf. Beweisaufnahme
    
    Die mündliche Verhandlung – auch **Hauptverhandlung** genannt – beginnt mit einer Bestandsaufnahme und einem Zwischenfazit des Richters. Anschließend **diskutieren** die **Parteien untereinander,**warum die Klage begründet bzw. unbegründet ist. Der Richter erteilt und entzieht den Parteien als Prozessleiter das Wort. Er gibt zudem Hinweise über seine Sicht der Dinge oder fordert auf, weitere Informationen bei Gericht einzureichen.
    
    Eine Gerichtsverhandlung ist außer bei Familiensachen grundsätzlich öffentlich.
    
    Widersprechen sich die Darstellungen der Parteien, ordnet der Richter eine **Beweisaufnahme** an: Um den Sachverhalt eindeutig zu klären, vernimmt er die von den Parteien benannten **Zeugen**, hört **Sachverständige** an und sichtet **Beweise.**
    
    Beide Parteien und der Richter erörtern das Ergebnis der Beweisaufnahme. Sobald alle Parteien ausreichend gehört wurden und das **Gericht** sich seine **Meinung gebildet** hat, ist die mündliche **Verhandlung beendet**.
    
- IV. Urteil
    
    Der Richter verkündet das Urteil entweder **direkt im Anschluss** an die mündliche Verhandlung **oder** aber zu einem späteren Termin. Bei einem **separaten Verkündungstermin** besteht keine Anwesenheitspflicht, das Urteil kann auch telefonisch in der Geschäftsstelle des Gerichts abgefragt werden und geht dem Kläger und dem Beklagten postalisch zu.
    
    Das Urteil ist ein **vollstreckbarer Titel**. Das bedeutet, dass der Gewinner des Rechtsstreits die Zwangsvollstreckung einleiten darf, wenn die unterlegene Seite ihre Pflichten nicht freiwillig erfüllt.
    
    Gegen das Urteil des Amts- oder Landgerichts können Sie  **binnen eines Monats** [Berufung einlegen](https://www.advocado.de/ratgeber/verfahrensrecht/prozessrecht/berufung-einlegen.html). Der Fall wird dann von der **nächsthöheren Instanz** noch einmal aufgerollt. Bedingung ist, dass der Streitwert sich auf **mindestens 600 Euro** beläuft.
    

# 6. Dauer?

Wie lange ein Zivilprozess dauert, lässt sich nicht pauschal sagen. Als **Faustformel** gilt:

- Verfahren mit **Vergleich**: ca. 4-6 Monate
- Verfahren mit **Urteilsspruch**: ca. 5–10 Monate

# Fallbeispiel im Mietrecht (Mieterhöhung)

Der Vermieter will die Miete von 600 Euro auf 750 Euro erhöhen. Für die 100 Quadratmeter Wohnung bedeutet das eine Erhöhung 6 auf 7,50 Euro pro Quadratmeter. Der örtliche Mietspiegel sieht 6 Euro am unteren Rand und 7 Euro am oberen Rand vor für eine vergleichbar große Wohnung. Die Tabelle unten zeigt mögliche Schritte auf dem Weg zur Einigung.

# 7. Wie kann ich klagen?

Sie können selbstständig eine Klage über unser Portal einreichen. Auf den folgenden Seiten helfen wir Ihnen dabei. Alternativ können Sie eine Klage über eine Anwält:in einreichen lassen.
`;
  return (
    <Box textAlign="left">
      <Hero title="">
        <ReactMarkdown components={ChakraUIRenderer()} children={s} />
      </Hero>
    </Box>
  );
};
