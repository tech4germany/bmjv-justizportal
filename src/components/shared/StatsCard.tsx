import {
  Box,
  Button,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stat,
  StatLabel,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import * as React from 'react';
import { ReactNode } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { Tooltip } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

import Glossary from '../../data_parser/glossary.json';
import { AnnotadedText } from './AnnotatedText';

interface StatsCardProps {
  title: string;
  link: string;
  info?: string;
  icon?: ReactNode;
}

export const StatsCard = (props: StatsCardProps) => {
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
            <StatLabel fontSize={{ sm: 'sm', base: 'md', md: 'lg' }} textAlign="center" wordBreak="break-word">
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
            <AnnotadedText text={info != undefined ? info : ''} />
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Okay</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
