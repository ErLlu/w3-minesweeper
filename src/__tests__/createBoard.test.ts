import { createBoard } from "..";

describe("Given function createBoard", () => {
  describe("When it recibes 3 rows", () => {
    test("Then it should return a board of 3 rows", () => {
      const numberOfRows = 3;
      const numberOfColumns = 0;
      const expectedRowBoard = [[], [], []];
      const actualBoard = createBoard(numberOfRows, numberOfColumns);

      expect(actualBoard).toEqual(expectedRowBoard);
    });
  });
  describe("When it recibes 3 rows and 3 columns", () => {
    test("Then it should return a board of 3 rows and 3 columns", () => {
      const numberOfRows = 3;
      const numberOfColumns = 3;
      const expectedBoard = [
        [[], [], []],
        [[], [], []],
        [[], [], []],
      ];
      const actualBoard = createBoard(numberOfRows, numberOfColumns);

      expect(actualBoard).toEqual(expectedBoard);
    });
  });
});
