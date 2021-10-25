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
      <Stat
        border="2px solid"
        height="100%"
        borderColor={borderColor}
        rounded="lg"
        _hover={{
          transitionDuration: '0.2s',
          bg: transparentize(borderColor, 0.5),
        }}
        {...rest}>
        <>
          <Box
            display={info ? '' : 'none'}
            as="a"
            href="#s"
            pos="absolute"
            width="auto"
            top=".5em"
            right=".5em"
            color={borderColor}
            _hover={{
              transitionDuration: '0.2s',
              color: Primary(),
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
            <Box color={Primary()} padding="0.8em">
              {icon}
            </Box>
            <StatLabel fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} textAlign="center" wordBreak="break-word">
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
              <Text paddingInline={2}>Info</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
