type Square = {
  hasMine: boolean;
  mineAround: number;
};

type Board = {
  totalMines: number;
  numberOfRows: number;
  numberOfColumns: number;
  mineBoard: [];
};
