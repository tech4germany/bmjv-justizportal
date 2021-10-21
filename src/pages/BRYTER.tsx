import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { useEffect } from 'react';
import { CaseTypes, Claims, MMGraph, CaseTopics } from '../logic/KMParser';

interface FeatureProps {
  id: string | null;
  query: URLSearchParams;
  mmobject: MMGraph;
}

// function test(name: string) {
export const Bryter = ({ id, query, mmobject, ...rest }: FeatureProps) => {
  const type: string = '';

  const baseURL = 'https://tech4germany.bryter.io/s/';
  const bryterURLs = {
    landlordLetter: `${baseURL}EnTaPD7jRUKEHZA86ss5QA/mietmangel-vermieterschreiben?`,
    claimRent: `${baseURL}ekV7FMipRvG6G3gpT6TgxQ/mietmangel-klage?`,
    claimFlight: `${baseURL}tcm04C0OQFyJDyMdsDUGDQ/eu-fluggastrechteverordnung-klage?`,
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
        break;
    }
    switch (currentNode.caseTopic) {
      case CaseTopics.Schimmel:
        bryterLink += 'mangelart=schimmel';
        break;
      case CaseTopics.Verspätung:
        bryterLink += 'klagegrund=Verspätung';
        break;
      case CaseTopics.Annulierung:
        bryterLink += 'klagegrund=Annulierung';
        break;
      case CaseTopics.Überbuchung:
        bryterLink += 'klagegrund=Überbuchung';
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
  }

  return (
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
  );
};
