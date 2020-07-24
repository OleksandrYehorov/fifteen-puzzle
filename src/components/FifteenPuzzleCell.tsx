import React from 'react';
import styled from 'styled-components';

export interface CellCoordinates {
  row: number;
  col: number;
}

export interface Cell {
  value: number;
  coordinates: CellCoordinates;
}

interface Props {
  cell: Cell;
  onClick?: (cell: Cell) => void;
}

interface CellProps {
  coordinates: CellCoordinates;
}

const Cell = styled.li<CellProps>`
  padding: 0.2rem;
  box-sizing: border-box;
  width: 25%;
  height: 25%;
  list-style-type: none;
  position: absolute;
  top: ${({ coordinates }) => coordinates.row * 25}%;
  left: ${({ coordinates }) => coordinates.col * 25}%;
  transition: top 0.5s ease-out, left 0.5s ease-out;
`;

const CellContent = styled.div`
  box-sizing: border-box;
  height: 100%;
  background-color: rgb(42, 45, 51);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.3rem;
`;

const CellValue = styled.span`
  font-size: 2rem;
`;

export const FifteenPuzzleCell: React.FC<Props> = ({ cell, onClick }) => {
  const handleClick = () => {
    if (onClick) onClick(cell);
  };

  if (cell.value === 16) {
    return null;
  }

  return (
    <Cell
      coordinates={cell.coordinates}
      onClick={handleClick}
      style={cell.value === 16 ? { opacity: 0.5 } : undefined}
    >
      <CellContent>
        <CellValue>{cell.value}</CellValue>
      </CellContent>
    </Cell>
  );
};
