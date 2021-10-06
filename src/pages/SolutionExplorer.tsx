import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Stat,
  StatLabel,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import * as React from 'react';
import { ReactNode } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { Link as ReactLink } from 'react-router-dom';
import { MMGraph } from '../logic/KMParser';

interface StatsCardProps {
  title: string;
  link: string;
  info?: string;
  icon?: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, info, icon, link } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const green = useColorModeValue('green.500', 'green.300');

  return (
    <>
      <Stat
        shadow="0px 0px 0.5em gray"
        border="1px solid"
        height="100%"
        borderColor={useColorModeValue('gray.200', 'whiteAlpha.400')}
        bg={useColorModeValue('gray.100', 'whiteAlpha.200')}
        rounded="lg"
        _hover={{
          transitionDuration: '0.2s',
          bg: useColorModeValue('gray.200', 'whiteAlpha.400'),
        }}>
        <>
          <Box
            display={info == undefined ? 'none' : ''}
            as="a"
            href="#"
            pos="absolute"
            width="auto"
            top=".5em"
            right=".5em"
            color={useColorModeValue('gray.700', 'whiteAlpha.400')}
            _hover={{
              transitionDuration: '0.2s',
              color: green,
            }}>
            <FaInfoCircle
              size="1.3em"
              onClick={(e) => {
                e.stopPropagation();
                onOpen();
              }}
            />
          </Box>
          <Flex flexDir="column" alignItems="center" as={ReactLink} to={link} p={3}>
            <Box color={green} padding="0.8em">
              {icon}
            </Box>
            <StatLabel fontSize={{ base: 'md', md: 'lg' }} textAlign="center">
              {title}
            </StatLabel>
          </Flex>
        </>
      </Stat>
      <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack>
              <FaInfoCircle size="1.4em" />
              <Text>Info</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <ReactMarkdown components={ChakraUIRenderer()}>{info != undefined ? info : ''}</ReactMarkdown>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Okay</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

interface FeatureProps {
  id: string | null;
}

export const SolutionExplorer = (props: FeatureProps) => {
  const { id } = props;
  const mmobject = new MMGraph();
  mmobject.initialize();
  const data = mmobject.getNode(id);
  const parent = mmobject.getParent(id);

  return (
    <Box textAlign="left">
      <Spacer height={{ base: '1em', md: '1em' }} />

      <VStack padding={'1em'} spacing={'2em'}>
        <Heading>In welchem Bereich Ihres Lebens haben Sie ein Problem?</Heading>

        <Wrap spacing="1.2em" justify="center" align="stretch">
          {data!.children!.map((child) => (
            <WrapItem w={{ base: '8em', md: '9em' }}>
              <StatsCard link={`${child.children == undefined ? '/entitlement' : ''}?id=${child.id}`} {...child} />
            </WrapItem>
          ))}
        </Wrap>

        <HStack>
          <Button
            rounded={'full'}
            colorScheme="gray"
            as={ReactLink}
            to={`${parent == undefined ? '' : '/solution?id=' + parent.id}`}>
            Zurück
          </Button>
          <Button
            rounded={'full'}
            display="none"
            colorScheme="green"
            bg={useColorModeValue('green.500', 'green.300')}
            as={ReactLink}
            to="/entitlement">
            Weiter
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};
