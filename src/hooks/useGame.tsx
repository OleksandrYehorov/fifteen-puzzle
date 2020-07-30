import { useState } from 'react';
import { FifteenPuzzle } from '../services/fifteen-puzzle-service';

export function useGame(): FifteenPuzzle {
  const [game] = useState(() => new FifteenPuzzle());

  return game;
}
