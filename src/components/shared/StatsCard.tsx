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
import * as React from 'react';
import { ReactNode } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';
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
        border="2px solid"
        height="100%"
        borderColor={useColorModeValue('gray.200', 'whiteAlpha.400')}
        rounded="lg"
        _hover={{
          transitionDuration: '0.2s',
          bg: useColorModeValue('gray.200', 'whiteAlpha.400'),
        }}>
        <>
          <Box
            display={info ? '' : 'none'}
            as="a"
            href="#s"
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
