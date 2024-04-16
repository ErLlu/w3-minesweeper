const board = (row: number, column: number): Board => {
  const board: Board = [];

  for (let indexRow = 0; indexRow < row; indexRow++) {
    const row: Square[] = [];
    for (let indexColumn = 0; indexColumn < column; indexColumn++) {
      const getMine = Math.random() < 0.2;

      row.push({ hasMine, minesAround: 0 });
    }
    board.push(row);
  }
  return board;
};
