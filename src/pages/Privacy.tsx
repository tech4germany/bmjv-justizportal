import { Heading } from '@chakra-ui/layout';
import React from 'react';
import { AnnotadedText } from '../components/shared/AnnotatedText';
import { PageBody } from '../components/shared/PageBody';
import { t, Trans } from '@lingui/macro';
import { PageBlock } from '../components/shared/PageBlock';

export const Privacy = ({ ...props }) => {
  return (
    <PageBody title={t`Datenschutz`}>
      <PageBlock>
        <Heading>
          <Trans>Datenschutz</Trans>
        </Heading>
        <AnnotadedText
          text={`
In dieser Datenschutzerklärung informieren wir Sie über die Verarbeitung Ihrer personenbezogenen Daten.

### Verantwortlich
DigitalService4Germany GmbH, Prinzessinnenstraße 8-14, 10969 Berlin, DE,  [hallo@4germany.org](mailto:hallo@4germany.org) , +491709325017 (Montag – Freitag von 09:00 -14:00 Uhr)

### Hosting
**Dienst:** GitHub Pages
**Anbieter:** GitHub Inc, 88 Colin P Kelly Jr Street San Francisco, CA 94107 United States
**Datenschutzerklärung:**  [Link zur Datenschutzerklärung](https://docs.github.com/en/github/site-policy/github-privacy-statement) 
**Privacy Shield:**  [Link Privacy Shield](https://docs.github.com/en/github/site-policy/global-privacy-practices) 

### Externe Dienste
#### Google Fonts

Wir verarbeiten mit unserem Auftragsverarbeiter  [Google Fonts](https://fonts.google.com/) , Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland Verbindungsdaten und Browserdaten zum Zweck der Bereitstellung der vom Webbrowser zur Anzeige der Website benötigten Schriftarten. Diese Daten werden nur für die zur Auswahl und Übermittlung der Schriftarten benötigte Dauer verarbeitet.
Die Rechtsgrundlage für die Datenverarbeitung ist das berechtigte Interesse (unbedingte technische Notwendigkeit zur Bereitstellung und Auslieferung des von Ihnen durch Ihren Aufruf ausdrücklich gewünschten Dienstes „Website“) gemäß Art. 6 Abs. 1 lit. f DSGVO.
Soweit durch Google Fonts eine weitergehende eigenständige Verarbeitung der Daten erfolgt, ist Google dafür alleinige Verantwortliche. Details finden Sie in der  [Datenschutzerklärung](https://policies.google.com/privacy?gl=AT&hl=de#intro)  und in den  [FAQ](https://developers.google.com/fonts/faq)  von Google Fonts.

#### Mouseflow
Diese Website verwendet Mouseflow, ein Webanalyse-Tool der Mouseflow ApS, Flaesketorvet 68, 1711 Kopenhagen, Dänemark. Die Datenverarbeitung dient dem Zweck der Analyse dieser Website und ihrer Besucher. Dazu werden Daten zu Marketing- und Optimierungszwecken gesammelt und gespeichert. Aus diesen Daten können unter einem Pseudonym Nutzungsprofile erstellt werden. Hierzu können Cookies eingesetzt werden. Bei dem Webanalyse-Tool Mouseflow werden zufällig ausgewählte einzelne Besuche (nur mit anonymisierter IP-Adresse) aufgezeichnet. Hierbei entsteht ein Protokoll der Mausbewegungen und Klicks mit der Absicht einzelne Website-Besuche stichprobenartig abzuspielen und potentielle Verbesserungen für die Website daraus abzuleiten. Die mit Mouseflow erhobenen Daten werden nicht dazu benutzt, den Besucher dieser Website persönlich zu identifizieren und nicht mit personenbezogenen Daten über den Träger des Pseudonyms zusammengeführt. Die Verarbeitung erfolgt auf Grundlage des Art. 6 (1) f) DSGVO aus dem berechtigten Interesse an direkter Kundenkommunikation und an der bedarfsgerechten Gestaltung der Website. Sie haben das Recht aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen diese auf Art. 6 (1) f DSGVO beruhende Verarbeitung Sie betreffender personenbezogener Daten zu widersprechen. Dazu können Sie eine Aufzeichnung auf allen Websites, die Mouseflow einsetzen, global für Ihren gerade verwendeten Browser unter folgendem Link deaktivieren: https://mouseflow.de/opt-out/

Solltet ihr an einer Auftragsdatenverarbeitung interessiert sein, könnt ihr diese mit uns direkt via RightSignature online schließen: https://mouseflow.de



### Personenbezogene Daten, Zwecke und Rechtsgrundlage der Datenverarbeitung
#### 1. Umfang der Datenverarbeitung 
Auf unseren Seiten bieten wir Ihnen an verschiedenen Stellen Unterstützung durch sogenannte Legal-Tech-Anwendungen an. Beispiele sind ein Klagegenerator oder verschiedene Dokumentengeneratoren, mit denen Sie  individuelle Schreiben an Anbieter oder Behörden erstellen können, indem Sie online Fragebögen ausfüllen. 
Zum Zeitpunkt des Aufrufs der Seiten, auf denen diese Instrumente zur Verfügung gestellt werden, werden folgende Daten erhoben: 
- IP-Adresse des Nutzers 
- Datum und Uhrzeit 
Darüber hinaus werden für die Dauer der Sitzung die persönlichen Daten verarbeitet, die Sie als Nutzer gegebenenfalls in die Fragebögen eingeben und die sich dann in Ihrem individuellen Schreiben, das Sie versenden können, wiederfinden. Diese Daten können – beispielsweise – Ihr 
Name und Ihre Adresse, Ihr Geburtsdatum, aber auch Kundennummern oder Vertragsnummern sein. Eine Auswertung der Daten zu Marketingzwecken findet in diesem Zusammenhang nicht 
statt.

Um diese Anwendungen zur Verfügung stellen zu können, nutzen wir die Dienstleistungen der 
Firmen
- Bryter GmbH, Uhlandstraße 175, 10719 Berlin für die Anwendungen des 
Dokumentengenerators. 
Anwendungen des Dokumentengenerators sind mit “Built with BRYTER” in unserem Angebot gekennzeichnet. 

#### 2. Rechtsgrundlage 
Rechtsgrundlage für die Verarbeitung der personenbezogenen Daten, die von Ihnen bei der Nutzung von Legal-Tech-Instrumenten gegebenenfalls in die Fragebögen eingegeben werden, ist  Art. 6 Abs. 1 lit. a DSGVO. 
Rechtsgrundlage für die vorübergehende Erhebung und Speicherung der Daten und der Logfiles  ist Art. 6 Abs. 1 lit. f DSGVO. 

#### 3. Zweck 
Die Verarbeitung der personenbezogenen Daten, die Sie gegebenenfalls in die Fragebögen der Legal-Tech-Instrumente eingeben, erfolgt je nach dem, welches Legal-Tech-Instrument Sie nutzen, zum Zwecke der Erstellung eines auf Ihren Fall zugeschnittenen Informations- und Hinweistextes oder zur Erstellung von individuellen Schreiben an Vermieter oder Behörden, die Ihre individuellen Daten schon enthalten und von Ihnen nur noch versendet werden müssen.  Hierin liegt auch unser berechtigtes Interesse an der Verarbeitung der Daten. 
Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine Auslieferung der Website an den Rechner des Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers für die Dauer der Sitzung gespeichert bleiben. Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit der Website sicherzustellen. Zudem dienen uns die Daten zur Optimierung der Website und zur Sicherstellung der Sicherheit unserer informationstechnischen Systeme. Eine Auswertung der Daten zu Marketingzwecken findet in diesem Zusammenhang 
nicht statt. 

#### 4. Dauer der Speicherung 
Die Daten werden gelöscht, sobald sie für die Erreichung des Zwecks ihrer Erhebung nicht mehr erforderlich sind. Bezüglich der erfassten persönlichen Daten, die zur Erstellung von individuellen Informations- 
und Hinweistexten oder von individuellen Schreiben genutzt werden, ist dies der Fall, wenn die jeweilige Sitzung beendet ist. 
Bezüglich der erfassten Daten zur Bereitstellung der Website ist dies der Fall, wenn die jeweilige Sitzung beendet ist. Die in den Logfiles gespeicherten Daten werden spätestens nach 30 Tagen 
gelöscht. 

#### 5. Widerspruchs- und Beseitigungsmöglichkeit 
Die Erfassung der persönlichen Daten, die zur Erstellung von individuellen Informations- und Hinweistexten oder von individuellen Schreiben genutzt werden, ist zwingend erforderlich, wenn Sie von unserem Angebot, individuelle Texte zu erhalten, Gebrauch machen. Eine Speicherung über die laufende Sitzung hinaus erfolgt nicht, daher ist ein Widerspruch nicht möglich.

Die Erfassung der Daten zur Bereitstellung der Website und die Speicherung der Daten in Logfiles ist für den Betrieb der Internetseite zwingend erforderlich. Ein Löschungsverlangen ist daher nicht möglich.

### Betroffenenrechte
Die Datenschutz-Grundverordnung garantiert Ihnen gewisse Rechte, die Sie uns gegenüber – soweit die gesetzlichen Voraussetzungen vorliegen – geltend machen können.
Auskunftsrecht der betroffenen Person (Art. 15 DS-GVO): Sie haben das Recht, von uns eine Bestätigung darüber zu verlangen, ob Sie betreffende personenbezogene Daten verarbeitet werden und wenn ja, welche dies sind sowie die näheren Umstände der Datenverarbeitung.
Recht auf Berichtigung (Art. 16 DS-GVO): Sie haben das Recht, von uns unverzüglich die Berichtigung Sie betreffender unrichtiger personenbezogener Daten zu verlangen. Dabei haben Sie unter Berücksichtigung der Zwecke der Verarbeitung auch das Recht, die Vervollständigung unvollständiger personenbezogener Daten – auch mittels einer ergänzenden Erklärung – zu verlangen.
Recht auf Löschung (Art. 17 DS-GVO): Sie haben das Recht, von uns zu verlangen, dass Sie betreffende personenbezogene Daten unverzüglich gelöscht werden. Beachten Sie hier bitte die unter Punkt II. 4 beschriebene Ausnahme.
Recht auf Einschränkung der Verarbeitung (Art. 18 DS-GVO): Sie haben das Recht, von uns die Einschränkung der Verarbeitung zu verlangen.
Recht auf Datenübertragbarkeit (Art. 20 DS-GVO): Sie haben das Recht, im Falle der Verarbeitung aufgrund einer Einwilligung oder zur Erfüllung eines Vertrags, die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten, und diese Daten einem anderen Verantwortlichen ohne Behinderung durch uns zu übermitteln oder die Daten direkt an den anderen Verantwortlichen übermitteln zu lassen, soweit dies technisch machbar ist.
Widerspruchsrecht (Art. 21 DS-GVO): Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund eines berechtigten Interesses unsererseits oder zur Wahrung einer Aufgabe im öffentlichen Interesse erforderlich ist, oder die in Ausübung öffentlicher Gewalt erfolgt, Widerspruch einzulegen. Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen. Soweit wir Ihre personenbezogenen Daten verarbeiten, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung einzulegen. Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung, so werden wir Ihre personenbezogenen Daten nicht mehr für diese Zwecke verarbeiten.
Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO i. V. m. § 19 BDSG): Sie haben das Recht, jederzeit Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, einzulegen, wenn Sie der Ansicht sind, dass die Verarbeitung der sie betreffenden personenbezogenen Daten gegen geltendes Recht verstößt.
Wenden Sie sich zur Geltendmachung dieser Rechte bitte an  [datenschutz@4germany.org](mailto:datenschutz@4germany.org)  oder nehmen Sie telefonisch bzw. postalisch (siehe Impressum) Kontakt zu uns auf.

#### Wenn Sie Anmerkungen oder Fragen haben:
Wir treffen alle erdenklichen Vorkehrungen zum Schutz und zur Sicherheit Ihrer Daten. Ihre Fragen und Kommentare zum Datenschutz sind uns willkommen, schreiben Sie einfach eine Mail an  [datenschutz@4germany.org](mailto:datenschutz@4germany.org) .


`}
        />
      </PageBlock>
    </PageBody>
  );
};
