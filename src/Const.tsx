import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import { Redirect, Route } from 'react-router';

export const homeURL: string = '/bmjv-justizportal';

export const Primary = (): string => useColorModeValue('primary.500', 'primary.300');
export const Secondary = (): string => useColorModeValue('secondary.500', 'secondary.300');
export const C_LightGray = (): string => useColorModeValue('gray.400', 'gray.600');
export const C_DarkGray = (): string => useColorModeValue('gray.700', 'gray.300');

export enum Routes {
  Disclaimer = 'disclaimer',
  SolutionExplorer = 'loesungsfinder',
  Exit = 'exit',
  ZPOInformation = 'klage-einreichen',
  PossibleEntitlements = 'moegliche-ansprueche',
  NextSteps = 'naechste-schritte',
  Bryter = 'formular',
  ConsultationOffers = 'beratungsangebote',
}

export const ShortCuts = ({ ...props }): JSX.Element => {
  return (
    <>
      <Route exact path={`${homeURL}/schimmel-mieterschreiben`}>
        <Redirect to={`${homeURL}/${Routes.PossibleEntitlements}?id=ceybyumxibs2`} />{' '}
      </Route>
      <Route exact path={`${homeURL}/schimmel-klage`}>
        <Redirect to={`${homeURL}/${Routes.PossibleEntitlements}?id=ceybyumxibs0`} />{' '}
      </Route>
    </>
  );
};
