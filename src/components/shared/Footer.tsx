import { Box, Button, Container, Link, Stack, Text, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { Trans } from '@lingui/macro';
import React, { ReactNode } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { homeURL, Routes } from '../../Const';
import { Spacer, HStack } from '@chakra-ui/layout';

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

export default function Footer() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.600')} color={useColorModeValue('gray.600', 'gray.200')}>
      <Container
        fontSize={'md'}
        as={Stack}
        maxW={'60rem'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text textAlign="center">
          <Trans>
            Gebaut von <Link href="https://tech.4germany.org/project/digitale-klagewege-bmjv/">Tech4Germany</Link>
            {/* &amp; dem{' '}
            <Link href="https://www.bmjv.de/">BMJV</Link> */}
          </Trans>
        </Text>
        {/* <Text textAlign="center" fontWeight="bold">
          <Trans>Dies ist ein Prototyp ohne Rechtssicherheit!</Trans>
        </Text> */}
        <HStack>
          <Link as={ReactLink} to={`${homeURL}/${Routes.Privacy}`} textAlign="center">
            <Trans>Datenschutz</Trans>
          </Link>
          <Spacer />
          <Link as={ReactLink} to={`${homeURL}/${Routes.Imprint}`} textAlign="center">
            <Trans>Impressum</Trans>
          </Link>
        </HStack>
      </Container>
    </Box>
  );
}
