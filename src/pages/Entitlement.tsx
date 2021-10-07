import {
  Box,
  Button,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  Spacer,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import * as React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { Link as ReactLink } from 'react-router-dom';
import { MMGraph } from '../logic/KMParser';

interface FeatureProps {
  id: string;
}

export const EntitlementCheck = (props: FeatureProps) => {
  const { id } = props;

  const [value, setValue] = React.useState('0');
  const green = useColorModeValue('green.500', 'green.300');
  const mmobject = new MMGraph();
  mmobject.initialize();
  const data = mmobject.getNode(id);
  const parent = mmobject.getParent(id);

  // TODO Skip on ony one Children

  let linkOnYes: string = '';
  let linkOnNo: string = '';

  if (data.children != undefined) {
    data.children.forEach((child) => {
      const pre = (child.title == '{EXIT}' ? '/exit' : '') + (child.title == '{CONTINUE}' ? '/options' : '');
      if (child.type == 'YESANSWERD') {
        linkOnYes = pre + `?id=${child.id}`;
      } else {
        linkOnNo = pre + `?id=${child.id}`;
      }
    });
  }

  return (
    <Box padding="3em">
      <Spacer height={{ base: '1em', md: '1em' }} />

      <HStack align="top" wrap="wrap" spacing="2em">
        <VStack spacing="2em" flex="1" align="left">
          <Heading>{data.title}</Heading>
          <RadioGroup size="lg" onChange={setValue}>
            <VStack spacing="24px" alignItems="left">
              <Radio value="1">Ja</Radio>
              <Radio value="2">Nein</Radio>
            </VStack>
          </RadioGroup>
          <Spacer height={{ base: '1em', md: '1em' }} />
        </VStack>
        <Box flex="1">
          <Box
            display={data.info ? '' : 'none'}
            padding="1em"
            shadow="0px 0px 0.5em gray"
            border="1px solid"
            height="100%"
            borderColor="whiteAlpha.400"
            bg="whiteAlpha.200"
            rounded="lg"
            _hover={{
              transitionDuration: '0.2s',
              bg: 'whiteAlpha.400',
            }}>
            <HStack>
              <FaInfoCircle size="1.2em" />
              <Text fontWeight="bold">Info</Text>
            </HStack>
            <Spacer height="1em" />
            <ReactMarkdown components={ChakraUIRenderer()}>{data.info ? data.info : ''}</ReactMarkdown>
          </Box>
        </Box>
      </HStack>

      <HStack>
        <Button
          rounded={'full'}
          colorScheme="gray"
          as={ReactLink}
          to={`${parent != undefined ? '?id=' + parent.id : '/'}`}>
          Zurück
        </Button>
        <Button
          rounded={'full'}
          colorScheme="green"
          bg={useColorModeValue('green.500', 'green.300')}
          as={ReactLink}
          to={value == '1' ? linkOnYes : linkOnNo}
          disabled={value != '2' && value != '1'}>
          Weiter
        </Button>
      </HStack>
    </Box>
  );
};
