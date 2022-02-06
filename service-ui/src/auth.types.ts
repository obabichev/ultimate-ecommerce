export interface OryFlow {
  id: string;
  type: string;
  expires_at: Date;
  issued_at: Date;
  request_url: string;
  ui: UI;
}

export interface UI {
  action: string;
  method: string;
  nodes: Node[];
  messages: Message[];
}

export interface Message {
  id: number;
  text: string;
  type: string;
  context?: Context;
}

export interface Context {}

export interface Node {
  type: string;
  group: string;
  attributes: Attributes;
  messages: any[];
  meta: Meta;
}

export interface Attributes {
  name: string;
  type: string;
  value?: string;
  required?: boolean;
  disabled: boolean;
  node_type: string;
}

export interface Meta {
  label?: Message;
}
