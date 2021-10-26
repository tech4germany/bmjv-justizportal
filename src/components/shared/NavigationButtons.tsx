import { BoxProps, Button, HStack } from '@chakra-ui/react';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import { Trans } from '@lingui/macro';
import * as React from 'react';
import { Link as ReactLink } from 'react-router-dom';

interface FeatureProps extends BoxProps {
  linkBack?: string;
  linkForward?: string;
  textForward?: string;
  disableForward?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const NavButtons = ({ linkBack, linkForward, textForward, disableForward, onClick, ...rest }: FeatureProps) => (
  <HStack spacing="1em" {...rest}>
    {linkBack ? (
      <Button onClick={onClick} as={ReactLink} to={linkBack} leftIcon={<IoMdArrowRoundBack />}>
        <Trans id="back">Zurück</Trans>
      </Button>
    ) : (
      ''
    )}
    {linkForward ? (
      <Button
        onClick={disableForward ? (event) => event.preventDefault() : onClick}
        colorScheme="primary"
        as={ReactLink}
        to={disableForward ? '' : linkForward}
        rightIcon={<IoMdArrowRoundForward />}
        isDisabled={disableForward}
        children={textForward || <Trans id="forward">Weiter</Trans>}
      />
    ) : (
      ''
    )}
  </HStack>
);
