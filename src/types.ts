
import { Operation } from "fast-json-patch";

export type SparseEntity<T, K extends keyof T> = Partial<T> & Pick<T, K>;

export type JSONPatchOp = "add"|"remove"|"replace"

export type JsonDiff = Array<Operation>

export type ErrorMessage = string | null;
export type ActivePlayer = number;
export type Id = string;
export type PlayerId = string;
export type PlayerList = PlayerId[];
export interface User {
  id: PlayerId
}
export type Size = 1 | 2 | 3;
export type Color = "RED" | "GREEN" | "BLUE" | "YELLOW";
export type ColorAction = "TRANSFORM" | "MOVE" | "ATTACK" | "BUILD";
export type Action =
  | ColorAction
  | "CATASTROPHY"
  | "CHOOSE_HOMEWORLD"
  | "CONCEDE"
  | "END_TURN"
  | "SACRIFICE"
  | "SACRIFICE_START";

export interface Piece {
  id?: Id;
  color: Color;
  size: Size;
  metadata?: Record<string, unknown>;
}
export type Star = Piece;

export interface Ship extends Piece {
  owner: PlayerId;
}

export interface System {
  id: Id;
  stars: Star[];
  ships: Ship[];
  name: string;
  isHomeworldFor?: PlayerId;
}

//todo
export type HistoryDelta = {};
//const { action: ActionName, args: ActionArgs, delta: HistoryDelta, isSacrifice: boolean } = historyArgs;
export type HistoryArgs = {};

//todo define patch
export type HistoryItem = [Action, ActionArgs, JsonDiff];

export type History = HistoryItem[];

export type Board = System[];

// todo well define types
export interface ActionArgs {
  player: PlayerId;
  from?: SparseEntity<System, "id">;
  to?: System;
  ship?: SparseEntity<Ship, "id">;
  system?: SparseEntity<System, "id">;
  color?: Color;
  stars?: Star[];
  ships?: Ship[];
}

export type Bank = Record<Color, [number, number, number]>;
export interface ActionAttack {
  state: State;
  targetShip: Id;
}
export interface ActionBuild {
  state: State;
  color: Color;
}

export interface ActionCatastrophy {
  state: State;
  systemId: string;
}

export interface ActionChooseHomeworld {
  state: State;
  stars: [Piece, Piece];
  ship: [Piece];
}

export interface ActionConcede {
  state: State;
}

export interface ActionEndTurn {
  state: State;
}

export interface ActionMove {
  state: State;
  shipId: string;
  system: string | Piece;
}

export interface ActionSacrificeStart {
  state: State;
  shipId: string;
}

export interface ActionSacrificeContinue {
  state: State;
  action: ColorAction;
}

export interface ActionTransform {
  state: State;
  shipId: string;
  color: Color;
}

export interface TurnAction {
  action: Action;
  args: ActionArgs;
}

export type Turn = null | {
  sacrifice?: {
    count: number;
    color: Color;
  };
  actions:Array<HistoryItem>
};

export interface State {
  bank: Bank;
  board: Board;
  players: PlayerList;
  activePlayer: ActivePlayer;
  history: History;
  turn?: Turn;
  user?: User;
  metadata?: Record<string, unknown>;
}


