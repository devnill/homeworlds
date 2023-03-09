import { History } from "../../src/types";

const historyMock: History = [
  {
    action: "MOVE",
    args: {
      player: "player1",
      from: {
        id: "2",
      },
      to: {
        id: "1",
        name: "",
        ships: [],
        stars: [],
      },
      ship: {
        id: "4",
      },
    },
    patch: [
      {
        op: "replace",
        path: "/bank/YELLOW/1",
        value: 0,
      },
      {
        op: "replace",
        path: "/board/0/id",
        value: "2",
      },
      {
        op: "replace",
        path: "/board/0/name",
        value: "Sol",
      },
      {
        op: "replace",
        path: "/board/0/stars/0/color",
        value: "YELLOW",
      },
      {
        op: "replace",
        path: "/board/0/stars/0/size",
        value: 2,
      },
      {
        op: "remove",
        path: "/board/0/ships/0",
      },
      {
        op: "add",
        path: "/board/0",
        value: {
          id: "1",
          name: "Andoria",
          stars: [
            {
              color: "BLUE",
              size: 1,
            },
          ],
          ships: [
            {
              id: "5",
              color: "YELLOW",
              size: 1,
              owner: "player2",
            },
          ],
        },
      },
    ],
  },
];

export default historyMock;
