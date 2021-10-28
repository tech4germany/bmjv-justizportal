import { Link, Text, Tooltip, BoxProps, Box } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link as ReactLink } from 'react-router-dom';
import { homeURL } from '../../Const';
import Glossary from '../../data_parser/glossary.json';

interface AnnotadedTextProps extends BoxProps {
  text: string;
}

export const AnnotadedText = ({ text, ...rest }: AnnotadedTextProps) => {
  var annotatedText: string = text;
  Glossary.forEach((valuePair) => {
    annotatedText = annotatedText.replace(new RegExp('[ *]' + valuePair.Regex + '[ \\.,*:]'), (match) => {
      let splitedMatch = match.split(/[ .,*:]/);
      let textIndex = splitedMatch.findIndex((value, index, obj) => value != '');
      return match.replace(splitedMatch[textIndex], '`' + splitedMatch[textIndex] + '`');
    });
  });

  return (
    <Box {...rest}>
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
          a({ href, title, children, ...props }) {
            if (href != undefined && href.startsWith('/')) {
              return (
                <Link as={ReactLink} to={`${homeURL}${href}`}>
                  {children}
                </Link>
              );
            } else if (href != undefined) {
              return <Link href={href}>{children}</Link>;
            } else {
              return children;
            }
          },
        })}>
        {annotatedText}
      </ReactMarkdown>
    </Box>
  );
};
