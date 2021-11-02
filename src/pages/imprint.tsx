import { Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import { PageBody } from '../components/shared/PageBody';
import { AnnotadedText } from '../components/shared/AnnotatedText';

export const Imprint = ({ ...props }) => {
  return (
    <PageBody title="Impressum">
      <Heading px={{ base: 5, md: 0 }} alignSelf="center" paddingTop={5}>
        Impressum
      </Heading>
      <AnnotadedText
        text={`
Angaben gemäß § 5 TMG

##

**DigitalService4Germany GmbH** 

Prinzessinnenstraße 8-14

10969 Berlin

Deutschland

##

E-Mail: [hallo@4germany.org](mailto:hallo@4germany.org)

Telefon: +49 170 9325017 (Montag – Freitag von 09:00 -14:00 Uhr)

##

**Geschäftsführung**

Frau Christina Lang
Herr Philipp Möser`}></AnnotadedText>
    </PageBody>
  );
};
