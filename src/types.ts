type ColumnLetter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
type RowNumber = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

export type TileNotation = `${ColumnLetter}${RowNumber}`
export type PieceColor = 'white' | 'black'
export type PieceKind = 'pawn' | 'knight' | 'bishop' | 'queen' | 'king' | 'rook'
export type PieceSpec = {
  kind: PieceKind,
  color: PieceColor,
  state: PieceState
}

export enum PieceState {
  inPlay = 'inPlay',
  captured = 'captured',
  outOfPlay = 'outOfPlay'
}

export type Piece = PieceSpec & {
  id: string
}

export type BoardPlacement = {
  [key in TileNotation]: string | null
}

export type ReduxState = {
  board: BoardPlacement,
  pieces: Piece[]
}
