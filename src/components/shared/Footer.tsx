import { Box, Button, Container, Stack, Text, Link, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { Trans } from '@lingui/macro';
import React, { ReactNode } from 'react';
import { homeURL } from '../../Const';

/* eslint-disable @typescript-eslint/no-unused-vars */
const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
  return (
    <Button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      w={12}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

export default function FooterSmallWithSocial() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.600')} color={useColorModeValue('gray.600', 'gray.200')}>
      <Container
        fontSize={'md'}
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>
          <Trans id="footer.text">Gebaut von ⚖️ und 🐌 mit ❤️</Trans>
        </Text>
        <Text fontWeight="bold">
          <Trans id="footer.disclaimer">Diese Seite ist ein Prototyp ohne Garantie auf Rechtssicherheit!</Trans>
        </Text>
        <Link href={`${homeURL}/disclaimer`} textDecor="underline">
          <Trans id="footer.info">Weiter Infos zum Prototypen</Trans>
        </Link>
      </Container>
    </Box>
  );
}
