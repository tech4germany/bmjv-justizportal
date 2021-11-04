import { Heading } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import { Trans } from '@lingui/macro';
import React from 'react';
import { PageBlock } from '../components/shared/PageBlock';
import { PageBody } from '../components/shared/PageBody';

export const Imprint = ({ ...props }) => {
  return (
    <PageBody title={`Impressum`}>
      <PageBlock>
        <Heading>
          <Trans>Impressum</Trans>
        </Heading>
        <Text>
          <b>DigitalService4Germany GmbH</b> <br />
          Geschäftsführer: Frau Christina Lang, Herr Philipp Möser <br />
          Prinzessinnenstraße 8-14 <br />
          10969 Berlin Deutschland <br />
          <br />
          <b>E-Mail-Adresse:</b> hallo@4germany.org <br />
          <b>Telefonnummer:</b> +491709325017 (Montag – Freitag von 09:00 -14:00 Uhr) <br />
          <br />
          Gesellschafter: Bundesrepublik Deutschland, vertreten durch das Bundeskanzleramt <br />
          Registergericht &amp; Registernummer: Berlin Charlottenburg HRB 212879 B <br />
          Umsatzsteuer-Identifikationsnummer: DE327075535
        </Text>
      </PageBlock>
    </PageBody>
  );
};
