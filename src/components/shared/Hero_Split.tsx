import { Box, Flex, Heading, Image, Spacer, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';

interface FeatureProps {
  title1?: string;
  title2?: string;
  children: React.ReactNode;
  image: string;
}

export const HeroSplit = (props: FeatureProps) => {
  const { title1, title2, children, image } = props;

  return (
    <Box>
      <Stack minH={'95vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex
          p={8}
          direction="column"
          flex={1}
          align={'center'}
          justify={'center'}
          // position={'relative'}
          _before={{
            base: {
              content: "''",
              bgPos: 'center',
              bgImage: image,
              bgSize: 'cover',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              opacity: 0.1,
            },
            md: { bgImage: '' },
          }}>
          <Spacer flex={2} />
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            {/* <Image
              position="absolute"
              display={{ base: 'none', md: 'inherit' }}
              right="calc(-50% - 8px)"
              top="10%"
              bottom="10%"
              zIndex="-1"
              opacity="0.5"
              pointerEvents={'none'}
              src={`${homeURL}/data/53787D84-F85F-402B-AE32-5E1D59E38921.png`}
            /> */}
            <Image
              my={-4}
              position="relative"
              left={-14}
              width={48}
              src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Bundesministerium_der_Justiz_und_f%C3%BCr_Verbraucherschutz_logo.svg"
            />
            <Heading colorScheme="primary" fontSize={{ base: '4xl', md: '5xl', lg: '5xl' }} fontWeight="bold">
              <Text as={'span'} position={'relative'}>
                {title1}
              </Text>
              <br /> <Text as={'span'}>{title2}</Text>{' '}
            </Heading>
            {children}

            {/* <Box
              position="absolute"
              display={{ base: 'none', md: 'block' }}
              right="-1em"
              top="10%"
              bottom="10%"
              opacity="0.5"
              width="55%"
              zIndex={-100}
              pointerEvents={'none'}
              backgroundImage={`${homeURL}/data/53787D84-F85F-402B-AE32-5E1D59E38921.png`}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
            /> */}
          </Stack>
          <Spacer flex={4} />
        </Flex>
        <Flex flex={1} display={{ base: 'none', md: 'flex' }}>
          <Image alt={'Hero Image'} objectFit={'cover'} src={image} />
        </Flex>
      </Stack>
    </Box>
  );
};
