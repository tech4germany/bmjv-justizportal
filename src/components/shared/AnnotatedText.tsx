import { Text, Tooltip } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
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

interface AnnotadedTextProps {
  text: string;
}

export const AnnotadedText = (props: AnnotadedTextProps) => {
  const { text } = props;

  var annotatedText: string = text;
  Glossary.forEach((valuePair) => {
    annotatedText = annotatedText.replace(new RegExp('[ *]' + valuePair.Regex + '[ \\.,*:]'), (match) => {
      let splitedMatch = match.split(/[ \.,\*:]/);
      let textIndex = splitedMatch.findIndex((value, index, obj) => value != '');
      return match.replace(splitedMatch[textIndex], '`' + splitedMatch[textIndex] + '`');
    });
  });

  return (
    <>
      <ReactMarkdown
        components={ChakraUIRenderer({
          code({ node, inline, className, children, ...props }) {
            let key: string = children + '';
            return (
              <Tooltip hasArrow label={Glossary.find((value) => new RegExp(value.Regex).test(key))?.Text}>
                <Text
                  as="span"
                  style={{ textDecoration: 'underline', textDecorationStyle: 'dotted', textDecorationColor: 'gray' }}>
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
