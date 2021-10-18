import { BoxProps, Button, HStack } from '@chakra-ui/react';
import { t, Trans } from '@lingui/macro';
import * as React from 'react';
import { Link as ReactLink } from 'react-router-dom';

interface FeatureProps extends BoxProps {
  linkBack?: string;
  linkForward?: string;
  disableForward?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const NavButtons = ({ linkBack, linkForward, disableForward, onClick, ...rest }: FeatureProps) => (
  <HStack spacing="1em" {...rest}>
    {linkBack ? (
      <Button onClick={onClick} as={ReactLink} to={linkBack}>
        <Trans>Zurück</Trans>
      </Button>
    ) : (
      ''
    )}
    {linkForward ? (
      <Button
        onClick={onClick}
        colorScheme="green"
        as={ReactLink}
        to={disableForward ? '' : linkForward}
        isDisabled={disableForward}>
        <Trans>Weiter</Trans>
      </Button>
    ) : (
      ''
    )}
  </HStack>
);
