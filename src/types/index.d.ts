
export type ActionName = string;

export type ErrorMessage = string | null;
export type ActivePlayer = string;
export type Player = string;
export type PlayerList = Player[];
export type PlayerId = number;
export type Size = number;


/*
export enum Color {
  red = 'red',
  blue = 'blue',
  green = 'green',
  yellow = 'yellow'
}
*/
export type Color = 'red' | 'blue' | 'green' | 'yellow';


export interface Piece {
  id?: string;
  color: Color;
  size: Size;
}

export type Star = Piece;

export interface Ship extends Piece {
  owner: Player;
}

export interface System {
  id: string;
  stars: Star[];
  ships: Ship[];
  name: string;
  isHomeworldFor?: Player;
}

//todo
export type HistoryDelta = {};
//const { action: ActionName, args: ActionArgs, delta: HistoryDelta, isSacrifice: boolean } = historyArgs;
export type HistoryArgs = {};

export type Board = System[];

// todo well define types
export interface ActionArgs {
  player: Player;
  from?: System;
  to?: System;
  ship?: Ship;
  system?: System;
  color?: Color;
  stars?: Star[]; 
  ships?: Ship[];
}

export interface Bank{
  red: Array<number>;
  blue: Array<number>;
  green: Array<number>;
  yellow: Array<number>;
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
  turn?: any;
}
