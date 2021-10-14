import { BoxProps, Button, HStack } from '@chakra-ui/react';
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
      <Button onClick={onClick} rounded={'full'} as={ReactLink} to={linkBack}>
        Zurück
      </Button>
    ) : (
      ''
    )}
    {linkForward ? (
      <Button
        onClick={onClick}
        colorScheme="green"
        rounded={'full'}
        as={ReactLink}
        to={disableForward ? '' : linkForward}
        isDisabled={disableForward}>
        Weiter
      </Button>
    ) : (
      ''
    )}
  </HStack>
);
