import { expect, assert } from "chai";
import deepfreeze from "deep-freeze";
import { bank, history } from "../src/util/";
import { systemLost } from "./mocks/move";
import historyMock from "./mocks/history";
import { Bank, System } from "../src/types";

const { add, revert } = history;
const { createSystem } = bank;

describe("Utility Methods", function () {
  describe("createSystem", function () {
    it("can create a system", function () {
      const initialBank: Bank = {
        RED: [0, 0, 0],
        BLUE: [0, 0, 1],
        GREEN: [0, 3, 0],
        YELLOW: [0, 0, 0],
      };
      const systemToCreate: System = {
        stars: [
          {
            color: "GREEN",
            size: 2,
          },
        ],
        ships: [
          {
            color: "BLUE",
            size: 3,
            owner: "",
            id: "",
          },
        ],
        name: "",
        id: "",
      };

      const [newSystem, updatedBank] = createSystem(
        initialBank,
        systemToCreate
      );

      // did call report success
      assert.isNotNull(newSystem);
      expect(newSystem).to.deep.equal(systemToCreate);
      expect(updatedBank.GREEN[1]).to.equal(initialBank.GREEN[1] - 1);
      expect(updatedBank.BLUE[2]).to.equal(initialBank.BLUE[2] - 1);
    });
    it("fails if the bank is insufficent", function () {
      const initialBank: Bank = {
        RED: [0, 0, 0],
        BLUE: [0, 0, 0],
        GREEN: [0, 3, 0],
        YELLOW: [0, 0, 0],
      };
      const systemToCreate: System = {
        stars: [
          {
            color: "GREEN",
            size: 2,
          },
        ],
        ships: [
          {
            color: "BLUE",
            size: 3,
            id: "",
            owner: "",
          },
        ],
        name: "",
        id: "1",
      };

      const [newSystem, updatedBank] = createSystem(
        initialBank,
        systemToCreate
      );

      // did call report success
      assert.isNull(newSystem);
      expect(updatedBank).to.equal(initialBank);
    });
  });
  describe("history", function () {
    describe("add", function () {
      it("can create a history item", function () {
        const updatedState = systemLost.result;
        const state = systemLost.state;
        const action = "MOVE";
        const args = systemLost.action;
        const testState = add(state, updatedState, action, args);
        expect(testState.history).to.deep.equal(historyMock);
      });
    });
    describe("revert", function () {
      it("can restore a previous state?", function () {
        const expectedResult = systemLost.state;

        const state = systemLost.result;
        const previousState = revert({ ...state, history: historyMock });
        expect(expectedResult).to.deep.equal(previousState);
      });
    });
  });
});
