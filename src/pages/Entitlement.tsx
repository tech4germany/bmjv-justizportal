import {
  Box,
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Spacer,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { Link as ReactLink } from 'react-router-dom';


interface FeatureProps {
}

export const EntitlementCheck = (props: FeatureProps) => {
  const [value, setValue] = React.useState("0");
  const { isOpen, onOpen, onClose } = useDisclosure()
  const green = useColorModeValue('green.500', 'green.300');

  return (
    <Box textAlign="left" fontSize="xl">
      <Spacer height={{ base: '1em', md: '1em' }} />
      <VStack padding={'1em'} spacing={'2em'}>
        <HStack spacing={3} alignItems='center' height='1.8em'>
          <Heading>
            Haben Sie den Mangel verusacht?
          </Heading>
          <Box _hover={{
            transitionDuration: '0.2s',
            color: green,
          }} >
            <FaInfoCircle size='1.8em' onClick={onOpen} />
          </Box>
        </HStack>

        <RadioGroup onChange={setValue} size='lg'>
          <VStack spacing='24px' alignItems='left'>
            <Radio value='1'>Ja, ist das was schlechtes?</Radio>
            <Radio value='2'>Ehm, ich glaube der Hund wars...</Radio>
          </VStack>
        </RadioGroup>

        <HStack>
          <Button rounded={'full'} colorScheme='gray' as={ReactLink} to='/solution'>Zurück</Button>
          <Button rounded={'full'} colorScheme='green' bg={useColorModeValue('green.500', 'green.300')} as={ReactLink} to='#' disabled={value != '2'}>Weiter</Button>
        </HStack>
      </VStack>

      <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack>
              <FaInfoCircle size='1.4em' />
              <Text>Info</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>
              Wenn die Mietenden den Mangel ganz oder teilweise mitverursacht haben, bestehen in der Regel keine Ansprüche gegen den Vermieter.<br />
              <br />
              Etwas anders kann dann gelten, wenn Versicherungen für den Eintritt eines solchen Mangels bestehen. Existiert bspw. eine Gebäudeversicherung, die von den Mietenden mit getragen wird (über die Betriebskosten), dann muss der Vermieter diese bei Schäden in Anspruch nehmen.</Text>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Okay</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}



