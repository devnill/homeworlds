import { ActionArgs, State } from "../src/types";

export type ActionTestFixture = {
  action: ActionArgs;
  state: State;
  result: State;
};
