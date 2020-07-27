import { Cell, CellCoordinates } from '../components/FifteenPuzzleCell';
import { useRef } from 'react';

export type Side = 'top' | 'bottom' | 'left' | 'right';

export class FifteenPuzzleService {
  static getCellPosition(cell: Cell) {
    return cell.coordinates.row * 4 + cell.coordinates.col;
  }

  private cellsData: Cell[] = this.getInitialCellsData();

  private getInitialCellsData(): Cell[] {
    const newCellsData: Cell[] = Array.from(Array(16)).map(
      (_, index): Cell => ({
        value: index + 1,
        coordinates: {
          row: Math.floor(index / 4),
          col: index % 4,
        },
      }),
    );

    return newCellsData;
  }

  get cells(): Cell[] {
    return this.cellsData.map(
      (cell): Cell => ({
        ...cell,
        coordinates: { ...cell.coordinates },
      }),
    );
  }

  private getMoveSide(clickedCell: Cell, emptyCell = this.getEmptyCell()) {
    if (!emptyCell) return null;

    if (clickedCell.coordinates.col === emptyCell.coordinates.col) {
      if (clickedCell.coordinates.row < emptyCell.coordinates.row) {
        return 'top';
      } else {
        return 'bottom';
      }
    } else if (clickedCell.coordinates.row === emptyCell.coordinates.row) {
      if (clickedCell.coordinates.col < emptyCell.coordinates.col) {
        return 'left';
      } else {
        return 'right';
      }
    }

    return null;
  }

  private getEmptyCell() {
    return this.cellsData.find((cell) => cell.value === 16);
  }

  makeMove(clickedCellValue: number): boolean {
    const clickedCell = this.cellsData.find(
      (cell) => cell.value === clickedCellValue,
    );
    if (!clickedCell) return false;

    const emptyCell = this.getEmptyCell();
    if (!emptyCell) return false;

    const clickSide = this.getMoveSide(clickedCell, emptyCell);
    if (!clickSide) return false;

    const newEmptyCellCoordinates: CellCoordinates = {
      ...clickedCell.coordinates,
    };

    if (clickSide === 'top') {
      const cellsToMove = this.cellsData.filter(
        (cell) =>
          cell.coordinates.col === emptyCell.coordinates.col &&
          cell.coordinates.row < emptyCell.coordinates.row &&
          cell.coordinates.row >= clickedCell.coordinates.row,
      );

      cellsToMove.forEach((cell) => {
        cell.coordinates.row++;
      });
    } else if (clickSide === 'bottom') {
      const cellsToMove = this.cellsData.filter(
        (cell) =>
          cell.coordinates.col === emptyCell.coordinates.col &&
          cell.coordinates.row > emptyCell.coordinates.row &&
          cell.coordinates.row <= clickedCell.coordinates.row,
      );

      cellsToMove.forEach((cell) => {
        cell.coordinates.row--;
      });
    } else if (clickSide === 'left') {
      const cellsToMove = this.cellsData.filter(
        (cell) =>
          cell.coordinates.row === emptyCell.coordinates.row &&
          cell.coordinates.col < emptyCell.coordinates.col &&
          cell.coordinates.col >= clickedCell.coordinates.col,
      );

      cellsToMove.forEach((cell) => {
        cell.coordinates.col++;
      });
    } else if (clickSide === 'right') {
      const cellsToMove = this.cellsData.filter(
        (cell) =>
          cell.coordinates.row === emptyCell.coordinates.row &&
          cell.coordinates.col > emptyCell.coordinates.col &&
          cell.coordinates.col <= clickedCell.coordinates.col,
      );

      cellsToMove.forEach((cell) => {
        cell.coordinates.col--;
      });
    } else {
      return false;
    }

    emptyCell.coordinates = newEmptyCellCoordinates;

    return true;
  }

  checkWin(): boolean {
    const emptyCell = this.getEmptyCell();
    if (!emptyCell) return false;

    const emptyCellPosition = FifteenPuzzleService.getCellPosition(emptyCell);

    const isWin = this.cellsData
      .filter((cell) => cell.value !== 16)
      .every((cell, index) => {
        let position = FifteenPuzzleService.getCellPosition(cell);
        if (position > emptyCellPosition) position--;

        return position === index;
      });

    return isWin;
  }

  shuffle(): void {
    const movesAmount = randomInteger(30, 60);
    let i = 0;

    while (i < movesAmount) {
      if (this.makeMove(randomInteger(1, 15))) i++;
    }
  }
}

function randomInteger(min: number, max: number): number {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export function useFifteenPuzzleGame(): FifteenPuzzleService {
  const gameRef = useRef(new FifteenPuzzleService());

  return gameRef.current;
}
