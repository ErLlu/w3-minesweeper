export const createBoard = (
  numberOfRows: number,
  numberOfColumns: number,
): number[][] => {
  let rowsBoard: number[][] = [];
  const rows = 3;
  const columns = 3;

  for (let indexRows = 0; indexRows < rows; indexRows++) {
    rowsBoard[indexRows] = [];
  }

  return rowsBoard;
};
