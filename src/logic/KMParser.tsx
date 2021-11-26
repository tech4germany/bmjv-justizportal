import React, { ReactNode } from 'react';
import * as IconsFa from 'react-icons/fa';
import * as IconsMd from 'react-icons/md';
import { Data } from '../data_parser/data';

interface DynamicFaIconProps {
  name: string;
}

const DynamicFaIcon = (props: DynamicFaIconProps) => {
  if (props.name in IconsFa) {
    const IconComponent: any = IconsFa[props.name];
    return <IconComponent size="3em" />;
  } else if (props.name in IconsMd) {
    const IconComponent: any = IconsMd[props.name];
    return <IconComponent size="3em" />;
  } else {
    // Return a default one
    console.log(`[Warrning] Cloud not find icon '${props.name}'`);
    throw Error(`[Warrning] Cloud not find icon '${props.name}'`);
  }
};

export interface MMNode {
  id: string;
  title: string;
  type: string;
  icon?: ReactNode;
  info?: string;
  children?: MMNode[];
  claims: Claims[];
  nextSteps: NextStepsType[];
  caseType?: CaseTypes;
  caseTopic?: CaseTopics;
}

export enum CaseTypes {
  Mietmangel = 'mietmangel',
  Fluggastrecht = 'flug',
}

export enum CaseTopics {
  Schimmel = 'Schimmel',
  Verspätung = 'Verspätung',
  Annullierung = 'Annullierung',
  Überbuchung = 'Überbuchung',
}

export enum Claims {
  Mietminderung = 'Mietminderung',
  Mängelbeseitigung = 'Mängelbeseitigung',
  Schadensersatz = 'Schadensersatz',
  Aufwendungsersatz = 'Aufwendungsersatz',
  Ausgleichszahlung = 'Ausgleichszahlung',
  Betreuungsleistung = 'Betreuungsleistungen',
  Rückerstattung = 'Rückerstattung',
}

export enum NextStepsType {
  Docu = 'Doku',
  LandlordLetter = 'Vermieterschreiben',
  LandlordLetterReview = 'Vermieterschreiben Überprüfung',
  Complaint = 'Klage',
  FluglinieKontaktieren = 'Fluglinie kontaktieren',
  Schlichtung = 'Schlichtung',
}

export class MMGraph {
  private parent: { [id: string]: MMNode } = {};
  private nodes: { [id: string]: MMNode } = {};
  private root: MMNode;
  // private numberOfNotes = 0;

  constructor() {
    this.root = { title: '', id: '', type: 'root', claims: [], nextSteps: [] };
  }

  initialize() {
    // let currentInput: any = Data['root'];
    // let currentNode: MMNode = {
    //   title: currentInput['data']['text'],
    //   id: currentInput['data']['id'],
    //   type: 'root',
    //   claims: [],
    // };
    this.root = this.traverseMindMap(Data['root']);
  }

  getNode(id: string | null): MMNode {
    if (id != null && id in this.nodes) {
      return this.nodes[id];
    } else {
      return this.root;
    }
  }

  getClaims(id: string | null): Claims[] {
    if (id == null) return [];
    return this.nodes[id]?.claims ?? [];
  }

  getParent(id: string | null): MMNode | undefined {
    if (id == null) return undefined;
    return this.parent[id] ?? undefined;
  }

  getNumberOfParents(id: string | null): number {
    if (id != null && id in this.parent) {
      return this.getNumberOfParents(this.parent[id].id) + 1;
    } else {
      return 0;
    }
  }

  private traverseMindMap(currentInput: any): MMNode {
    let CI = currentInput['data'];

    var currentNode: MMNode = {
      title: CI['text'],
      id: CI['id'],
      type: 'default',
      claims: [],
      nextSteps: [],
    };

    currentNode.icon = 'icon' in CI ? <DynamicFaIcon name={CI['icon']} /> : undefined;
    currentNode.info = CI['note'] ?? undefined;

    if ('config' in CI) {
      let json = JSON.parse(CI['config']);
      currentNode.claims = json['entitlements'];
      currentNode.nextSteps = json['nextsteps'];
      currentNode.caseType = json['caseType'];
      currentNode.caseTopic = json['caseTopic'];
      console.log(`ID: ${currentNode.id}, JSON: ${currentNode.claims}`);
    }

    if (this.getParent(currentNode.id)) {
      currentNode.caseType = currentNode.caseType ?? this.getParent(currentNode.id)?.caseType;
      currentNode.caseTopic = currentNode.caseTopic ?? this.getParent(currentNode.id)?.caseTopic;
    }

    if (currentInput.data.hasOwnProperty('priority')) {
      if (currentInput.data['priority'] == 1) {
        currentNode.type = 'NOANSWERD';
      } else if (currentInput.data['priority'] == 3) {
        currentNode.type = 'YESANSWERD';
      }
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
