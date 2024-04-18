import { createBoard } from "..";
describe("Given function createBoard", () => {
  describe("When it recibes 3 and 3", () => {
    test("Then it should return a Board object", () => {
      const rows = 3;
      const columns = 3;
      const expectedBoard = {
        totalMines: 0,
        numberOfRows: 3,
        numberOfColumns: 3,
        squares: [
          [
            { hasMine: false, minesAround: 0 },
            { hasMine: false, minesAround: 0 },
            { hasMine: false, minesAround: 0 },
          ],
          [
            { hasMine: false, minesAround: 0 },
            { hasMine: false, minesAround: 0 },
            { hasMine: false, minesAround: 0 },
          ],
          [
            { hasMine: false, minesAround: 0 },
            { hasMine: false, minesAround: 0 },
            { hasMine: false, minesAround: 0 },
          ],
        ],
      };
      const createdBoard = createBoard(rows, columns);
    });
  });
});

describe("Given function createBoard", () => {
  describe("When it recibes 0 and 0", () => {
    test("Then it should return a Board object", () => {
      const rows = 0;
      const columns = 0;
      const expectedBoard = {
        totalMines: 0,
        numberOfRows: 0,
        numberOfColumns: 0,
        squares: [
          [
            { hasMine: false, minesAround: 0 },
            { hasMine: false, minesAround: 0 },
            { hasMine: false, minesAround: 0 },
          ],
          [
            { hasMine: false, minesAround: 0 },
            { hasMine: false, minesAround: 0 },
            { hasMine: false, minesAround: 0 },
          ],
          [
            { hasMine: false, minesAround: 0 },
            { hasMine: false, minesAround: 0 },
            { hasMine: false, minesAround: 0 },
          ],
        ],
      };
      const createdBoard = createBoard(rows, columns);
    });
  });
});
