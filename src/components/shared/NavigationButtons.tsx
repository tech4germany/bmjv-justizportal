import { Box, BoxProps, Button, ButtonGroup, HStack, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import { Link as ReactLink } from 'react-router-dom';

interface FeatureProps extends BoxProps {
  linkBack?: string;
  linkForward?: string;
  disableForward?: boolean;
}

export const NavButtons = ({ linkBack, linkForward, disableForward, ...rest }: FeatureProps) => (
  <HStack spacing="1em" {...rest}>
    {linkBack ? (
      <Button rounded={'full'} as={ReactLink} to={linkBack}>
        Zurück
      </Button>
    ) : (
      ''
    )}
    {linkForward ? (
      <Button
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
