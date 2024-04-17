export type Square = {
  hasMine: boolean;
  minesAround: number;
};

export type Board = {
  totalMines: number;
  numberOfRows: number;
  numberOfColumns: number;
  mineBoard: number[];
};
