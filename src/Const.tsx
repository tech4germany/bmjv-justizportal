import { useColorModeValue } from '@chakra-ui/react';

export const homeURL: string = '/bmjv-justizportal';

export const Primary = (): string => useColorModeValue('primary.500', 'primary.300');
export const Secondary = (): string => useColorModeValue('secondary.500', 'secondary.300');

export enum Routes {
  Disclaimer = 'disclaimer',
  SolutionExplorer = 'loesungs-finder',
  Exit = 'exit',
  ZPOInformation = 'zivil-prozess-info',
  PossibleEntitlements = 'moegliche-ansprueche',
  NextSteps = 'naechste-schritte',
  Bryter = 'formular',
  ConsultationOffers = 'beratungsangebote',
}
