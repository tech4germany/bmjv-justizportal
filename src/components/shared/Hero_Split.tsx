import { Box, Flex, Heading, Image, Spacer, Stack, Text, VStack } from '@chakra-ui/react';
import * as React from 'react';
import { homeURL } from '../../Const';

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
      <Stack minH={'calc(100vh - 60px)'} direction={{ base: 'column', md: 'row' }}>
        <Flex
          p={8}
          direction="column"
          flex={1}
          align={'center'}
          justify={'center'}
          // position={'relative'}
          // _before={{
          //   base: {
          //     content: "''",
          //     bgPos: 'center',
          //     bgImage: image,
          //     bgSize: 'cover',
          //     position: 'absolute',
          //     top: 0,
          //     right: 0,
          //     bottom: 0,
          //     left: 0,
          //     opacity: 0.1,
          //   },
          // md: { bgImage: '' },
          // }}
        >
          <Spacer flex={2} />
          <VStack spacing={6} w={'full'} maxW={'lg'}>
            <Heading colorScheme="primary" fontSize={{ base: '4xl', md: '5xl', lg: '5xl' }} fontWeight="bold">
              <Text as={'span'} position={'relative'}>
                {title1}
              </Text>
              <br /> <Text as={'span'}>{title2}</Text>{' '}
            </Heading>
            {children}
          </VStack>
          <Spacer flex={4} />
        </Flex>

        <Flex width={0}>
          <VStack justify="center">
            <Image
              minW="50vw"
              display={{ base: 'none', md: 'inherit' }}
              zIndex="-10"
              opacity="0.5"
              pointerEvents={'none'}
              transform="translateX(-55%) translateY(-5%)"
              src={`${homeURL}/data/53787D84-F85F-402B-AE32-5E1D59E38921.png`}
            />
          </VStack>
        </Flex>
        <Flex flex={1} display={{ base: 'none', md: 'flex' }}>
          <Image alt={'Hero Image'} objectFit={'cover'} src={image} />
        </Flex>
      </Stack>
    </Box>
  );
};
