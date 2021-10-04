import React from 'react';
import { ReactNode } from 'react';
import * as Icons from 'react-icons/fa';

import Data from '../data_parser/data.json';


interface DynamicFaIconProps {
  name: string
}

const DynamicFaIcon = (props: DynamicFaIconProps) => {
  const IconComponent: any = Icons[props.name];

  if (!IconComponent) { // Return a default one
    return <Icons.FaBeer size='3.5em' />;
  }

  return <IconComponent size='3.5em' />;
};

export interface MMNode {
  id: string,
  title: string,
  icon?: ReactNode,
  info?: string,
  children?: MMNode[]
}

export default function parseData(id: string | null) {

  const convertTo = (input: any, searchID: string | null): (MMNode | undefined) => {
    let currentNode: MMNode = { 'title': input['data']['text'], 'id': input['data']['id'] };

    const id = searchID == null || searchID == currentNode.id ? null : searchID;

    if (input.data.hasOwnProperty('note')) {
      let lines: string[] = input['data']['note'].split('\n');

      if (lines[0].includes('{ICON:')) {
        currentNode.icon = (<DynamicFaIcon name={lines[0].substring(6, lines[0].length - 1)} />);
        lines.splice(0, 1);
      }

      let info = lines.join('\n');
      if (info.length) currentNode.info = info;
    }

    if (Array.isArray(input['children']) && input['children'].length != 0) {
      currentNode.children = [];
      for (const child of input['children']) {
        let childNode = convertTo(child, id);
        if (id != null && childNode != undefined) {
          return childNode;
        }

        if (childNode != undefined) currentNode.children.push(childNode);
      }
    }

    return id == null ? currentNode : undefined;
  }
  return convertTo(Data['root'], id);
}
