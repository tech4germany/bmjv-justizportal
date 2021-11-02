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
  SolutionExplorer = 'wegweiser',
  Exit = 'exit',
  ZPOInformation = 'klage-einreichen',
  PossibleEntitlements = 'moegliche-ansprueche',
  NextSteps = 'naechste-schritte',
  Bryter = 'formular',
  ConsultationOffers = 'beratungsangebote',
  Imprint = 'impressum',
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
      <Route exact path={`${homeURL}/flug-kontaktieren`}>
        <Redirect to={`${homeURL}/${Routes.NextSteps}?id=cf4h5nbt1r40`} />{' '}
      </Route>
      <Route exact path={`${homeURL}/flug-alle-ansprueche`}>
        <Redirect to={`${homeURL}/${Routes.PossibleEntitlements}?id=cf4hcjzx9bk2`} />{' '}
      </Route>
    </>
  );
};
