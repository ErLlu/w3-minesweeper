export interface Square {
  hasMine: boolean;
  minesAround: number;
}

export interface Board {
  totalMines: number;
  numberOfRows: number;
  numberOfColumns: number;
  Squares: Square[][];
}
