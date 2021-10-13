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

function getIndicesOf(searchStr: string, str: string): number[] {
  var searchStrLen: number = searchStr.length;
  if (searchStrLen == 0) {
    return [];
  }
  var startIndex: number = 0;
  var index: number = 0;
  let indices: number[] = [];
  str = str.toLowerCase();
  searchStr = searchStr.toLowerCase();
  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
  }
  return indices;
}

function addInlineCodeMarkdown(text: string, keyword: string, infoText: string): string {
  let tempString: string[] = [];
  let indices: number[] = getIndicesOf(keyword, text);
  if (indices.length > 0) {
    var lastAddedIndex: number = 0;
    indices.forEach((index) => {
      tempString.push(text.substr(lastAddedIndex, index - lastAddedIndex));
      tempString.push('`' + keyword + '`');
      lastAddedIndex = index + keyword.length;
    });
    tempString.push(text.substr(lastAddedIndex, text.length - lastAddedIndex));
  } else {
    tempString = [text];
  }
  return tempString.join('');
}

interface AnnotadedTextProps {
  text: string;
}

export const AnnotadedText = (props: AnnotadedTextProps) => {
  const { text } = props;

  var annotatedText: string = text;
  Glossary.forEach((valuePair) => {
    annotatedText = addInlineCodeMarkdown(annotatedText, valuePair.Name, valuePair.Text);
  });

  return (
    <>
      <ReactMarkdown
        components={ChakraUIRenderer({
          code({ node, inline, className, children, ...props }) {
            let key: string = children + '';
            return (
              <Tooltip hasArrow label={Glossary.find((value) => value.Name == key)?.Text}>
                <Text as="span" style={{ textDecoration: 'underline dotted gray' }}>
                  {children + ''}
                </Text>
              </Tooltip>
            );
          },
        })}>
        {annotatedText}
      </ReactMarkdown>
    </>
  );
};
