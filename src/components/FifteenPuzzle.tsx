import React, { useState, useEffect } from 'react';
import { FifteenPuzzleCell, Cell, CellCoordinates } from './FifteenPuzzleCell';
import styled from 'styled-components';

const checkWin = (cells: Cell[]) => {
  for (const cell of cells) {
    const isCellIncorrect =
      cell.coordinates.row * 4 + cell.coordinates.col !== cell.value - 1;
    if (isCellIncorrect) {
      return false;
    }
  }

  return true;
};

const initialCellsData: Cell[] = Array.from(Array(16)).map(
  (_, index): Cell => ({
    value: index + 1,
    coordinates: {
      row: Math.floor(index / 4),
      col: index % 4,
    },
  }),
);

[initialCellsData[15].value, initialCellsData[14].value] = [
  initialCellsData[14].value,
  initialCellsData[15].value,
];

const Board = styled.ul<{ isWin: boolean }>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  width: 26rem;
  height: 26rem;
  background-color: rgb(82, 85, 91);
  border-radius: 0.5rem;
  user-select: none;
  position: relative;
  transition: 0.2s -webkit-filter ease-in-out;
  filter: blur(${({ isWin }) => (isWin ? 0.2 : 0)}rem);
`;

const BoardLabel = styled.h2`
  margin: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  margin-top: -0.2rem;
`;

type Side = 'top' | 'bottom' | 'left' | 'right';

const getClickSide = (
  cells: Cell[],
  clickedCell: Cell,
  emptyCell?: Cell,
): Side | null => {
  emptyCell = emptyCell ?? cells.find((cell) => cell.value === 16);
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
};

export const FifteenPuzzle = () => {
  const [cellsData, setCellsData] = useState(initialCellsData);
  const [isWin, setIsWin] = useState(false);

  const handleCellClick = (clickedCell: Cell) => {
    const newCellsData: Cell[] = cellsData.map(
      (val): Cell => ({
        ...val,
        coordinates: { ...val.coordinates },
      }),
    );

    const emptyCell = newCellsData.find((cell) => cell.value === 16);
    if (!emptyCell) return;

    const clickSide = getClickSide(cellsData, clickedCell, emptyCell);
    if (!clickSide) return;

    const newEmptyCellCoordinates: CellCoordinates = {
      ...clickedCell.coordinates,
    };

    if (clickSide === 'top') {
      const cellsToMove = newCellsData.filter(
        (cell) =>
          cell.coordinates.col === emptyCell.coordinates.col &&
          cell.coordinates.row < emptyCell.coordinates.row &&
          cell.coordinates.row >= clickedCell.coordinates.row,
      );

      cellsToMove.forEach((cell) => {
        cell.coordinates.row++;
      });
    } else if (clickSide === 'bottom') {
      const cellsToMove = newCellsData.filter(
        (cell) =>
          cell.coordinates.col === emptyCell.coordinates.col &&
          cell.coordinates.row > emptyCell.coordinates.row &&
          cell.coordinates.row <= clickedCell.coordinates.row,
      );

      cellsToMove.forEach((cell) => {
        cell.coordinates.row--;
      });
    } else if (clickSide === 'left') {
      const cellsToMove = newCellsData.filter(
        (cell) =>
          cell.coordinates.row === emptyCell.coordinates.row &&
          cell.coordinates.col < emptyCell.coordinates.col &&
          cell.coordinates.col >= clickedCell.coordinates.col,
      );

      cellsToMove.forEach((cell) => {
        cell.coordinates.col++;
      });
    } else if (clickSide === 'right') {
      const cellsToMove = newCellsData.filter(
        (cell) =>
          cell.coordinates.row === emptyCell.coordinates.row &&
          cell.coordinates.col > emptyCell.coordinates.col &&
          cell.coordinates.col <= clickedCell.coordinates.col,
      );

      cellsToMove.forEach((cell) => {
        cell.coordinates.col--;
      });
    }

    emptyCell.coordinates = newEmptyCellCoordinates;

    setCellsData(newCellsData);
  };

  useEffect(() => {
    setIsWin(checkWin(cellsData));
  }, [cellsData]);

  return (
    <div style={{ position: 'relative' }}>
      <Board isWin={isWin}>
        {cellsData.map((cellData) => (
          <FifteenPuzzleCell
            key={cellData.value}
            cell={cellData}
            onClick={handleCellClick}
          />
        ))}
      </Board>
      {isWin && <BoardLabel>WIN</BoardLabel>}
    </div>
  );
};
