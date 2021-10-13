import { Box, Flex, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';

interface FeatureProps {
  title1?: string;
  title2?: string;
  children: React.ReactNode;
  image: string;
}

export const HeroSplit = (props: FeatureProps) => {
  const { title1, title2, children, image } = props;
  const green = useColorModeValue('green.500', 'green.300');
  return (
    <Box>
      <Stack minH={'95vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex
          p={8}
          flex={1}
          align={'center'}
          justify={'center'}
          position={'relative'}
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
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Image
              position="absolute"
              display={{ base: 'none', md: 'inherit' }}
              right="-42%"
              top="20%"
              zIndex="-1"
              src="data/53787D84-F85F-402B-AE32-5E1D59E38921.png"
            />
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: ['20%', '20%'],
                  position: 'absolute',
                  alignContent: 'center',
                  bottom: 1,
                  left: 0,
                  bg: green,
                  zIndex: -1,
                }}>
                {title1}
              </Text>
              <br />{' '}
              <Text color={green} as={'span'}>
                {title2}
              </Text>{' '}
            </Heading>
            {children}
          </Stack>
        </Flex>
        <Flex flex={1} display={{ base: 'none', md: 'flex' }}>
          <Image alt={'Login Image'} objectFit={'cover'} src={image} />
        </Flex>
      </Stack>
    </Box>
  );
};
