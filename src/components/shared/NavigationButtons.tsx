import { Box, BoxProps, Button, ButtonGroup, HStack, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import { Link as ReactLink } from 'react-router-dom';

export const NavButtons = (props: any) => (
  <HStack spacing="1em">
    <Button
      display={props.linkBack ? undefined : 'none'}
      rounded={'full'}
      as={ReactLink}
      to={props.linkBack}
      {...props}>
      Zurück
    </Button>
    <Button
      display={props.linkForward ? undefined : 'none'}
      rounded={'full'}
      colorScheme="green"
      as={ReactLink}
      to={props.linkForward}
      disabled={props.disableForward}
      {...props}>
      Weiter
    </Button>
  </HStack>
);
