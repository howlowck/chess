import React from 'react';
import './App.css';
import '../Board'
import Board from '../Board';
import { useSelector } from 'react-redux';
import { BoardPlacement, Piece, PieceState, ReduxState } from '../../types';

// const board: BoardPlacement = {
//   a1: 'wr1',
//   b1: 'wn1',
//   c1: 'wb1',
//   d1: 'wq1',
//   e1: 'wk1',
//   f1: 'wb2',
//   g1: 'wn2',
//   h1: 'wr2',
//   a2: 'wp1',
//   b2: 'wp2',
//   c2: 'wp3',
//   d2: 'wp4',
//   e2: 'wp5',
//   f2: 'wp6',
//   g2: 'wp7',
//   h2: 'wp8',
//   a3: null,
//   b3: null,
//   c3: null,
//   d3: null,
//   e3: null,
//   f3: null,
//   g3: null,
//   h3: null,
//   a4: null,
//   b4: null,
//   c4: null,
//   d4: null,
//   e4: null,
//   f4: null,
//   g4: null,
//   h4: null,
//   a5: null,
//   b5: null,
//   c5: null,
//   d5: null,
//   e5: null,
//   f5: null,
//   g5: null,
//   h5: null,
//   a6: null,
//   b6: null,
//   c6: null,
//   d6: null,
//   e6: null,
//   f6: null,
//   g6: null,
//   h6: null,
//   a7: 'bp1', 
//   b7: 'bp2', 
//   c7: 'bp3', 
//   d7: 'bp4', 
//   e7: 'bp5', 
//   f7: 'bp6', 
//   g7: 'bp7', 
//   h7: 'bp8', 
//   a8: 'br1', 
//   b8: 'bn1', 
//   c8: 'bb1', 
//   d8: 'bq1', 
//   e8: 'bk1', 
//   f8: 'bb2', 
//   g8: 'bn3', 
//   h8: 'br2', 
// }

// const pieces: Piece[] = [
//   {id: 'wr1', color: 'white', state: PieceState.inPlay, kind: 'rook'},
//   {id: 'wn1', color: 'white', state: PieceState.inPlay, kind: 'knight'},
//   {id: 'wb1', color: 'white', state: PieceState.inPlay, kind: 'bishop'},
//   {id: 'wq1', color: 'white', state: PieceState.inPlay, kind: 'queen'},
//   {id: 'wk1', color: 'white', state: PieceState.inPlay, kind: 'king'},
//   {id: 'wb2', color: 'white', state: PieceState.inPlay, kind: 'bishop'},
//   {id: 'wn2', color: 'white', state: PieceState.inPlay, kind: 'knight'},
//   {id: 'wr2', color: 'white', state: PieceState.inPlay, kind: 'rook'},
//   {id: 'wp1', color: 'white', state: PieceState.inPlay, kind: 'pawn'},
//   {id: 'wp2', color: 'white', state: PieceState.inPlay, kind: 'pawn'},
//   {id: 'wp3', color: 'white', state: PieceState.inPlay, kind: 'pawn'},
//   {id: 'wp4', color: 'white', state: PieceState.inPlay, kind: 'pawn'},
//   {id: 'wp5', color: 'white', state: PieceState.inPlay, kind: 'pawn'},
//   {id: 'wp6', color: 'white', state: PieceState.inPlay, kind: 'pawn'},
//   {id: 'wp7', color: 'white', state: PieceState.inPlay, kind: 'pawn'},
//   {id: 'wp8', color: 'white', state: PieceState.inPlay, kind: 'pawn'},
//   {id: 'bp1', color: 'black', state: PieceState.inPlay, kind: 'pawn'},
//   {id: 'bp2', color: 'black', state: PieceState.inPlay, kind: 'pawn'}, 
//   {id: 'bp3', color: 'black', state: PieceState.inPlay, kind: 'pawn'}, 
//   {id: 'bp4', color: 'black', state: PieceState.inPlay, kind: 'pawn'}, 
//   {id: 'bp5', color: 'black', state: PieceState.inPlay, kind: 'pawn'}, 
//   {id: 'bp6', color: 'black', state: PieceState.inPlay, kind: 'pawn'}, 
//   {id: 'bp7', color: 'black', state: PieceState.inPlay, kind: 'pawn'}, 
//   {id: 'bp8', color: 'black', state: PieceState.inPlay, kind: 'pawn'}, 
//   {id: 'br1', color: 'black', state: PieceState.inPlay, kind: 'rook'}, 
//   {id: 'bn1', color: 'black', state: PieceState.inPlay, kind: 'knight'},
//   {id: 'bb1', color: 'black', state: PieceState.inPlay, kind: 'bishop'},
//   {id: 'bq1', color: 'black', state: PieceState.inPlay, kind: 'queen'},
//   {id: 'bk1', color: 'black', state: PieceState.inPlay, kind: 'king'},
//   {id: 'bb2', color: 'black', state: PieceState.inPlay, kind: 'bishop'},
//   {id: 'bn3', color: 'black', state: PieceState.inPlay, kind: 'knight'},
//   {id: 'br2', color: 'black', state: PieceState.inPlay, kind: 'rook'},
// ]


function App() {
  const board = useSelector<ReduxState, BoardPlacement>(_ => _.board)
  const pieces = useSelector<ReduxState, Piece[]>(_ => _.pieces)

  return (
    <div className="App">
      <Board pieces={pieces} placement={board} selectedTile='g1' possibleTiles={['f3', 'h3']} />
    </div>
  );
}

export default App;
