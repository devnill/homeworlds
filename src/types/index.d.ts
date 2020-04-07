
export type ActionName = string;

export type Error = string | null;
export type ActivePlayer = string;
export type Player = string;
export type PlayerList = Player[];
export type PlayerId = number;
export type Size = string;



export enum Color {
  red,
  blue,
  green,
  yellow
}

export interface Star {
  color: Color;
  size: Size;
}

export interface Ship {
  color: Color;
  size: Size;
  owner: Player;
}
/*
export interface System {
  id: string;
  stars: Star[];
  ships: Ship[];
  name: string;
  isHomeworld?: boolean;
}
*/

export type Board = object; //System[];

// todo well define types
export interface ActionArgs {
  player: Player;
  from?: object;
  to?: object; // System;
  ship?: Ship;
  system?: object; // System;
  color?: Color;
  stars?: object[]; 
  ships?: object[];
}

export interface Bank{
  red: number[];
  blue: number[];
  green: number[];
  yellow: number[];
}

//todo define patch
export interface HistoryItem {
  action: ActionName;
  args: ActionArgs;
  patch: object[];
}

export type History = HistoryItem[];

export interface State{
  bank: Bank;
  board: Board;
  players: PlayerList;
  activePlayer: PlayerId;
  history: History;
  turn?: object;
}
