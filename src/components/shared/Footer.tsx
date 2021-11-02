import { Box, Button, Container, Link, Stack, Text, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { Trans } from '@lingui/macro';
import React, { ReactNode } from 'react';
import { Link as ReactLink, useLocation } from 'react-router-dom';
import { homeURL, Routes } from '../../Const';

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
        <Link as={ReactLink} to={`${homeURL}/${Routes.Imprint}`} fontWeight="bold" textAlign="center">
          Impressum
        </Link>
        <Text
          fontWeight="bold"
          textAlign="center"
          display={useLocation().pathname == homeURL + '/' ? 'inherit' : 'none'}>
          Illustrations by <Link href="www.freepik.com ">Freepic</Link>
        </Text>
      </Container>
    </Box>
  );
}
