export interface Square {
  hasMine: boolean;
  minesAround: number;
}

export interface Board {
  numberOfRows: number;
  numberOfColumns: number;
  squares: Square[][];
}
