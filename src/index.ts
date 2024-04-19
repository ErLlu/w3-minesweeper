import { Square, Board } from "./types.js";

export const createSquare = (rows: number, columns: number): Square => {
  let decider = Math.floor(Math.random() * 10);
  return {
    hasMine: decider < 3,

    minesAround: 0,
  };
};

export const board: Board = {
  totalMines: 0,
  numberOfRows: 3,
  numberOfColumns: 3,
  Squares: [
    [createSquare(3, 3), createSquare(3, 3), createSquare(3, 3)],
    [createSquare(3, 3), createSquare(3, 3), createSquare(3, 3)],
    [createSquare(3, 3), createSquare(3, 3), createSquare(3, 3)],
  ],
};
