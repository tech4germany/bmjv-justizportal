import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { useEffect } from 'react';
import { Prompt } from 'react-router-dom';
import { CaseTypes, Claims, MMGraph, CaseTopics } from '../logic/KMParser';

interface FeatureProps {
  id: string | null;
  query: URLSearchParams;
  mmobject: MMGraph;
}

// function test(name: string) {
export const Bryter = ({ id, query, mmobject, ...rest }: FeatureProps) => {
  const baseURL = 'https://tech4germany.bryter.io/s/';
  const bryterURLs = {
    landlordLetter: `${baseURL}EnTaPD7jRUKEHZA86ss5QA/mietmangel-vermieterschreiben?`,
    claimRent: `${baseURL}ekV7FMipRvG6G3gpT6TgxQ/mietmangel-klage?`,
    claimFlight: `${baseURL}tcm04C0OQFyJDyMdsDUGDQ/eu-fluggastrechteverordnung-klage?`,
  };

  // Show warning on reload or close event
  window.onbeforeunload = (event) => {
    const e = event || window.event;
    // Cancel the event
    e.preventDefault();
    if (e) {
      e.returnValue = ''; // Legacy method for cross browser support
    }
    return ''; // Legacy method for cross browser support
  };

  useEffect(() => {
    function handleResize() {
      if (
        document.getElementsByTagName('iframe')[0].offsetHeight != document.getElementById('iframeBox')!.offsetHeight
      ) {
        document.getElementsByTagName('iframe')[0].height = String(document.getElementById('iframeBox')!.offsetHeight);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);
  });
  let currentNode = mmobject.getNode(id);
  var bryterLink = '';
  if (query.get('mangelanzeige') != null) {
    bryterLink = bryterURLs.landlordLetter;
    switch (currentNode.caseTopic) {
      case CaseTopics.Schimmel:
        bryterLink += 'mangelart=schimmel';
        break;
    }
  } else {
    switch (currentNode.caseType) {
      case CaseTypes.Fluggastrecht:
        bryterLink = bryterURLs.claimFlight;
        break;

      case CaseTypes.Mietmangel:
        bryterLink = bryterURLs.claimRent;
        break;
      default:
        throw new Error('Unrecongnized Case Type');
    }
    switch (currentNode.caseTopic) {
      case CaseTopics.Schimmel:
        bryterLink += 'mangelart=schimmel';
        break;
      case CaseTopics.Verspätung:
        bryterLink += 'klagegrund=Verspätung';
        break;
      case CaseTopics.Annullierung:
        bryterLink += 'klagegrund=Annullierung';
        break;
      case CaseTopics.Überbuchung:
        bryterLink += 'klagegrund=Beförderungsverweigerung';
        break;
    }
  }
  if (currentNode.claims.length > 0) {
    bryterLink += '&antraege=';
    if (currentNode.claims.indexOf(Claims.Aufwendungsersatz) != -1) {
      bryterLink += 'Aufwendungsersatz, ';
    }
    if (currentNode.claims.indexOf(Claims.Ausgleichszahlung) != -1) {
      bryterLink += 'Ausgleichszahlung, ';
    }
    if (currentNode.claims.indexOf(Claims.Mängelbeseitigung) != -1) {
      bryterLink += 'Mängelbeseitigung, ';
    }
    if (currentNode.claims.indexOf(Claims.Mietminderung) != -1) {
      bryterLink += 'Mietminderung, ';
    }
    if (currentNode.claims.indexOf(Claims.Schadensersatz) != -1) {
      bryterLink += 'Schadensersatz, ';
    }
    bryterLink = bryterLink.substring(0, bryterLink.length - 2) // Delete last ", " for readability
  }

  return (
    <>
      <Prompt when={true} message="Wenn Sie die Seite verlassen, gehen alle eingegebenen Informationen verloren." />
      <Box id="iframeBox" flex="1">
        <iframe
          title="Bryter"
          src={bryterLink}
          onLoad={(o) => {}}
          style={{
            minHeight: '40em',
            width: '100%',
            display: 'inline',
            border: 'none',
            overflow: 'hidden',
          }}
        />
      </Box>
    </>
  );
};
