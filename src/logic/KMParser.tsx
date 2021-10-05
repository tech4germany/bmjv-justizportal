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

export class MMGraph {
  
  private parent: { [id: string] : MMNode } = {};
  private nodes: { [id: string] : MMNode } = {};
  private root: MMNode;

  constructor() {
    
    this.root = { 'title': '', 'id': '' };
    
  }

  initialize() {
    let currentInput : any = Data['root']
    let currentNode: MMNode = { 'title': currentInput['data']['text'], 'id': currentInput['data']['id'] };
    this.root = this.traverseMindMap(Data['root']);
  }

  getNode(id: string | null): MMNode {
    if(id != null) {
      return this.nodes[id];
    } else {
      return this.root;
    }
  }

  getParent(id: string | null): MMNode | undefined {
    if(id != null && this.parent[id] != null) {
      return this.parent[id];
    } else {
      return undefined;
    }
  }
  
  private traverseMindMap(currentInput: any) : MMNode {
    let currentNode: MMNode = { 'title': currentInput['data']['text'], 'id': currentInput['data']['id'] };
    if (currentInput.data.hasOwnProperty('note')) {
      let lines: string[] = currentInput['data']['note'].split('\n');

      if (lines[0].includes('{ICON:')) {
        currentNode.icon = (<DynamicFaIcon name={lines[0].substring(6, lines[0].length - 1)} />);
        lines.splice(0, 1);
      }

      let info = lines.join('\n');
      if (info.length) currentNode.info = info;
    }

    if (Array.isArray(currentInput['children']) && currentInput['children'].length != 0) {
      currentNode.children = [];
      for (const child of currentInput['children']) {
        this.parent[child['data']['id']] = currentNode;
        let childObject = this.traverseMindMap(child);
        currentNode.children.push(childObject);
      }
    }

    this.nodes[currentNode.id] = currentNode;
    return currentNode;
  }
}
