import React from 'react';
import { ReactNode } from 'react';
import * as Icons from 'react-icons/fa';

import Data from '../data_parser/data.json';
import Glossary from '../data_parser/glossary.json';

interface DynamicFaIconProps {
  name: string;
}

const DynamicFaIcon = (props: DynamicFaIconProps) => {
  const IconComponent: any = Icons[props.name];

  if (!IconComponent) {
    // Return a default one
    console.log(`[Warrning] Cloud not find icon '${props.name}'`);
    return <Icons.FaBeer size="3.5rem" />;
  }

  return <IconComponent size="3.5rem" />;
};

export interface MMNode {
  id: string;
  title: string;
  icon?: ReactNode;
  info?: string;
  children?: MMNode[];
}

export class MMGraph {
  private parent: { [id: string]: MMNode } = {};
  private nodes: { [id: string]: MMNode } = {};
  private root: MMNode;
  private numberOfNotes = 0;

  constructor() {
    this.root = { title: '', id: '' };
  }

  initialize() {
    let currentInput: any = Data['root'];
    let currentNode: MMNode = { title: currentInput['data']['text'], id: currentInput['data']['id'] };
    this.root = this.traverseMindMap(Data['root']);
  }

  getNode(id: string | null): MMNode {
    if (id != null && id in this.nodes) {
      return this.nodes[id];
    } else {
      return this.root;
    }
  }

  getParent(id: string | null): MMNode | undefined {
    if (id != null && id in this.parent) {
      return this.parent[id];
    } else {
      return undefined;
    }
  }

  private getIndicesOf(searchStr: string, str: string) {
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

  private configureContent(currentNode: MMNode, currentInput: any) {
    let lines: string[] = currentInput['data']['note'].split('\n');
    if (lines[0].includes('{ICON:')) {
      currentNode.icon = <DynamicFaIcon name={lines[0].substring(6, lines[0].length - 1)} />;
      lines.splice(0, 1);
    }

    for (let i = 0; i < lines.length; i++) {
      Glossary.forEach((valuePair) => {
        let splitLine: string[] = lines[i].split(valuePair.Name);
        // lines[i] = splitLine.join('<Tooltip label=' + valuePair.Text + '>' + valuePair.Name + '</Tooltip>');
        // lines[i] = splitLine.join(<Tooltip label={valuePair.Text}>{valuePair.Name}</Tooltip>);
      });
    }
    // Array of elements, only search string elements
    let info = lines.join('\n');
    if (info.length) currentNode.info = info;
  }

  private traverseMindMap(currentInput: any): MMNode {
    let currentNode: MMNode = { title: currentInput['data']['text'], id: currentInput['data']['id'] };

    if (currentInput.data.hasOwnProperty('note')) {
      this.configureContent(currentNode, currentInput);
    }

    if (Array.isArray(currentInput['children']) && currentInput['children'].length != 0) {
      currentNode.children = [];
      for (let child of currentInput['children']) {
        if (child['data']['id'] in this.nodes) {
          // FIx reappearing IDs
          child['data']['id'] += 'X';
        }

        this.parent[child['data']['id']] = currentNode;
        let childObject: MMNode = this.traverseMindMap(child);
        currentNode.children.push(childObject);
      }
    }

    this.nodes[currentNode.id] = currentNode;
    return currentNode;
  }
}
