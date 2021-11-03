import { Box, Flex, Heading, Image, Spacer, Stack, VStack } from '@chakra-ui/react';
import * as React from 'react';

// const Blob = (props: IconProps) => {
//   return (
//     <Icon width={'100%'} viewBox="0 0 578 440" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
//         fill="currentColor"
//       />
//     </Icon>
//   );
// };
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
          direction="column"
          flex={1.2}
          align={'center'}
          justify={'center'}
          // _before={{
          //   base: {
          //     content: "''",
          //     bgPos: 'center',
          //     bgImage: image,
          //     bgSize: 'cover',
          //     // clipPath: 'polygon(0% 0%, 100% 0%, 100% 95%, 0% 80%)',
          //     position: 'absolute',
          //     top: 0,
          //     right: 0,
          //     opacity: 0.07,
          //     height: '100vh',
          //     width: '100vh',
          //   },
          //   md: { bgImage: '' },
          // }}
        >
          <Spacer flex={2} />
          <VStack
            spacing={10}
            w={'full'}
            maxW={'xl'}
            paddingLeft={10}
            paddingBottom={5}
            paddingRight={{ base: 10, md: 0 }}>
            {/* <Blob
              w={'150%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('primary.50', 'primary.400')}
            /> */}
            <Heading
              alignSelf="start"
              textAlign="start"
              colorScheme="primary"
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              fontWeight="bold"
              marginBottom={-5}>
              {title1}
              <br />
              {title2}
            </Heading>
            {children}
          </VStack>
          <Spacer flex={2} />
        </Flex>

        <Flex width={0}>
          <VStack justify="center">
            {/* <Image
              minW="40vw"
              display={{ base: 'inherit', md: 'inherit' }}
              zIndex="-10"
              opacity="0.3"
              pointerEvents={'none'}
              transform="translateX(-55%) translateY(-5%)"
              clipPath="polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)"
              src={`${homeURL}/data/53787D84-F85F-402B-AE32-5E1D59E38921.png`}
            /> */}
          </VStack>
        </Flex>
        <Flex flex={1} display={{ base: 'none', md: 'flex' }}>
          <Image
            clipPath="polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)"
            alt={'Hero Image'}
            objectFit={'cover'}
            src={image}
          />
        </Flex>
      </Stack>
    </Box>
  );
};
