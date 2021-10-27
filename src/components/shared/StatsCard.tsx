import {
  Box,
  BoxProps,
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
  Spacer,
  Stat,
  StatLabel,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { transparentize } from '@chakra-ui/theme-tools';
import * as React from 'react';
import { ReactNode } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
import { Primary } from '../../Const';
import { AnnotadedText } from './AnnotatedText';
import { i18n } from '@lingui/core';
import { VStack } from '@chakra-ui/react';
import { CaseTopics, CaseTypes } from '../../logic/KMParser';

interface StatsCardProps extends BoxProps {
  title: string;
  link: string;
  info?: string;
  icon?: ReactNode;
}

export const StatsCard = ({ title, info, icon, link, ...rest }: StatsCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300');

  return (
    <>
      <VStack
        border="2px solid"
        height="100%"
        borderColor={borderColor}
        rounded="lg"
        w={{ base: 36, sm: '10em', md: '12em' }}
        minH={{ base: 36, sm: '10em', md: '10em' }}
        as={ReactLink}
        to={link}
        _hover={{
          transitionDuration: '0.2s',
          bg: transparentize(borderColor, 0.5),
        }}>
        <Box
          display={info ? '' : 'none'}
          as="a"
          href="#s"
          pos="relative"
          alignSelf="end"
          height="0"
          top=".5em"
          right=".5em"
          color={borderColor}
          _hover={{
            transitionDuration: '0.2s',
            color: Primary(),
          }}>
          <FaInfoCircle
            size="1.5em"
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
          />
        </Box>
        <Spacer />
        <Box color={Primary()} paddingBottom={4}>
          {icon}
        </Box>
        <Box fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} textAlign="center" wordBreak="break-word">
          {i18n._(title)}
        </Box>
        <Spacer />
      </VStack>

      <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent p={5}>
          {/* <ModalHeader>
            <HStack>
              <FaInfoCircle size="1em" />
              <Text paddingInline={2}>Info</Text>
            </HStack>
          </ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            <AnnotadedText text={info != undefined ? i18n._(info) : ''} />
          </ModalBody>

          <ModalFooter>{/* <Button onClick={onClose}>Okay</Button> */}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
