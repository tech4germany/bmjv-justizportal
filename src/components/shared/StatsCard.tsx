import {
  Box,
  BoxProps,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { transparentize } from '@chakra-ui/theme-tools';
import { i18n } from '@lingui/core';
import * as React from 'react';
import { ReactNode } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
import { Primary } from '../../Const';
import { AnnotadedText } from './AnnotatedText';
import { Card } from './Card';
import { CardContent } from './CardContent';

interface StatsCardProps extends BoxProps {
  title: string;
  link: string;
  info?: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export const StatsCard = ({ title, info, icon, link, disabled, ...rest }: StatsCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const borderColor = useColorModeValue('gray.100', 'whiteAlpha.300');

  return (
    <>
      <Card height="full">
        <CardContent
          pos="relative"
          borderColor={borderColor}
          bg="white"
          px={4}
          minH={{ base: 32, sm: '10em', md: '10em' }}
          as={ReactLink}
          to={link}
          _hover={
            disabled
              ? undefined
              : {
                  transitionDuration: '0.2s',
                  bg: transparentize(borderColor, 0.5),
                }
          }
          background={disabled ? 'gray.50' : undefined}
          cursor={disabled ? 'default' : 'pointer'}
          {...rest}>
          <Box
            display={info ? '' : 'none'}
            as="a"
            href="#s"
            pos="absolute"
            alignSelf="end"
            height="0"
            top=".5em"
            right=".5em"
            color={disabled ? 'gray.100' : borderColor}
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
          <Box color={disabled ? 'gray.400' : Primary()}>{icon}</Box>
          <Box
            fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
            color={disabled ? 'gray.400' : undefined}
            textAlign="center"
            wordBreak="break-word">
            {i18n._(title)}
          </Box>
        </CardContent>
      </Card>

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
