import React, { useState, useEffect } from 'react';
import { FifteenPuzzleCell } from './FifteenPuzzleCell';
import styled from 'styled-components/macro';
import { useFifteenPuzzleGame } from '../services/fifteen-puzzle-service';

const Game = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoardWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  max-width: 26rem;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

interface BoardProps {
  isWin: boolean;
}

const Board = styled.ul<BoardProps>`
  position: absolute;
  top: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background-color: rgb(82, 85, 91);
  border-radius: 0.5rem;
  user-select: none;
  transition: 0.2s filter ease-in-out;
  filter: blur(${(props) => (props.isWin ? 0.2 : 0)}rem);
`;

const Button = styled.button`
  margin-top: 1rem;
  border: none;
  background: none;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  color: white;
  text-transform: uppercase;
  outline: none;
`;

const BoardLabel = styled.h2`
  position: absolute;
  margin: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
`;

export const FifteenPuzzle: React.FC = () => {
  const game = useFifteenPuzzleGame();
  const [cellsData, setCellsData] = useState(game.cells);
  const [isWin, setIsWin] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCellClick = (clickedCellValue: number) => {
    const success = game.makeMove(clickedCellValue);
    if (success) {
      setCellsData(game.cells);
      setIsWin(game.checkWin());
    }
  };

  useEffect(() => {
    setCellsData(game.cells);
  }, [game]);

  useEffect(() => {
    if (isWin) {
      setIsPlaying(false);
    }
  }, [isWin]);

  const handleStartGame = () => {
    const shuffleIntervals = [0, 300, 600, 900];
    const shuffle = () => {
      game.shuffle();
      setCellsData(game.cells);
    };

    setIsPlaying(true);
    setIsWin(false);
    shuffleIntervals.forEach((interval) => setTimeout(shuffle, interval));
  };

  let startButtonText = 'Play';
  if (isWin) startButtonText = 'Play again';
  if (isPlaying) startButtonText = 'Restart';

  return (
    <Game>
      <header style={{ flexGrow: 1 }}></header>
      <BoardWrapper>
        <Board isWin={isWin}>
          {cellsData.map((cellData) => (
            <FifteenPuzzleCell
              key={cellData.value}
              cell={cellData}
              onClick={isPlaying ? handleCellClick : undefined}
            />
          ))}
        </Board>
        {isWin && <BoardLabel>WIN</BoardLabel>}
      </BoardWrapper>
      <footer style={{ flexGrow: 1 }}>
        <Button onClick={handleStartGame}>{startButtonText}</Button>
      </footer>
    </Game>
  );
};
