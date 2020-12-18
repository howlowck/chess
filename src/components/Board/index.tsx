import React from 'react';
import { BoardPlacement, Piece as PieceType, TileNotation } from '../../types';
import Piece from '../Piece';
import classnames from 'classnames';
import './styles.css';

type Props = {
  placement: BoardPlacement,
  selectedTile?: TileNotation,
  possibleTiles: TileNotation[],
  pieces: PieceType[]
}

const getPieceOrEmpty = (pieceId: string | null, pieces: PieceType[]) => {
  if (pieceId === null) {
    return ''
  }
  const piece = pieces.find(_ => _.id === pieceId) as PieceType
  return <Piece color={piece.color} kind={piece.kind} />
}

const Board: React.FC<Props> = ({placement, pieces, selectedTile, possibleTiles}) => {
  return (
    <div className="board">
      <div className="row">
        <div className={classnames("tile light", {'selected': selectedTile === 'a8'}, {'possible': possibleTiles.find(_ => _ === 'a8')})} id="a8"><span className="label">a8</span>{getPieceOrEmpty(placement.a8, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'b8'}, {'possible': possibleTiles.find(_ => _ === 'b8')})} id="b8"><span className="label">b8</span> {getPieceOrEmpty(placement.b8, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'c8'}, {'possible': possibleTiles.find(_ => _ === 'c8')})} id="c8"><span className="label">c8</span>{getPieceOrEmpty(placement.c8, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'd8'}, {'possible': possibleTiles.find(_ => _ === 'd8')})} id="d8"><span className="label">d8</span> {getPieceOrEmpty(placement.d8, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'e8'}, {'possible': possibleTiles.find(_ => _ === 'e8')})} id="e8"><span className="label">e8</span>{getPieceOrEmpty(placement.e8, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'f8'}, {'possible': possibleTiles.find(_ => _ === 'f8')})} id="f8"><span className="label">f8</span> {getPieceOrEmpty(placement.f8, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'g8'}, {'possible': possibleTiles.find(_ => _ === 'g8')})} id="g8"><span className="label">g8</span>{getPieceOrEmpty(placement.g8, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'h8'}, {'possible': possibleTiles.find(_ => _ === 'h8')})} id="h8"><span className="label">h8</span> {getPieceOrEmpty(placement.h8, pieces)}</div>
      </div>
      <div className="row">
        <div className={classnames("tile dark", {'selected': selectedTile === 'a7'}, {'possible': possibleTiles.find(_ => _ === 'a7')})} id="a7"><span className="label">a7</span> {getPieceOrEmpty(placement.a7, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'b7'}, {'possible': possibleTiles.find(_ => _ === 'b7')})} id="b7"><span className="label">b7</span>{getPieceOrEmpty(placement.b7, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'c7'}, {'possible': possibleTiles.find(_ => _ === 'c7')})} id="c7"><span className="label">c7</span> {getPieceOrEmpty(placement.c7, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'd7'}, {'possible': possibleTiles.find(_ => _ === 'd7')})} id="d7"><span className="label">d7</span>{getPieceOrEmpty(placement.d7, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'e7'}, {'possible': possibleTiles.find(_ => _ === 'd7')})} id="e7"><span className="label">e7</span> {getPieceOrEmpty(placement.e7, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'f7'}, {'possible': possibleTiles.find(_ => _ === 'f7')})} id="f7"><span className="label">f7</span>{getPieceOrEmpty(placement.f7, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'g7'}, {'possible': possibleTiles.find(_ => _ === 'g7')})} id="g7"><span className="label">g7</span> {getPieceOrEmpty(placement.g7, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'h7'}, {'possible': possibleTiles.find(_ => _ === 'h7')})} id="h7"><span className="label">h7</span>{getPieceOrEmpty(placement.h7, pieces)}</div>
      </div>
      <div className="row">
        <div className={classnames("tile light", {'selected': selectedTile === 'a6'}, {'possible': possibleTiles.find(_ => _ === 'a6')})} id="a6"><span className="label">a6</span>{getPieceOrEmpty(placement.a6, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'b6'}, {'possible': possibleTiles.find(_ => _ === 'b6')})} id="b6"><span className="label">b6</span> {getPieceOrEmpty(placement.b6, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'c6'}, {'possible': possibleTiles.find(_ => _ === 'c6')})} id="c6"><span className="label">c6</span>{getPieceOrEmpty(placement.c6, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'd6'}, {'possible': possibleTiles.find(_ => _ === 'd6')})} id="d6"><span className="label">d6</span> {getPieceOrEmpty(placement.d6, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'e6'}, {'possible': possibleTiles.find(_ => _ === 'e6')})} id="e6"><span className="label">e6</span>{getPieceOrEmpty(placement.e6, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'f6'}, {'possible': possibleTiles.find(_ => _ === 'f6')})} id="f6"><span className="label">f6</span> {getPieceOrEmpty(placement.f6, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'g6'}, {'possible': possibleTiles.find(_ => _ === 'g6')})} id="g6"><span className="label">g6</span>{getPieceOrEmpty(placement.g6, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'h6'}, {'possible': possibleTiles.find(_ => _ === 'h6')})} id="h6"><span className="label">h6</span> {getPieceOrEmpty(placement.h6, pieces)}</div>
      </div>
      <div className="row">
        <div className={classnames("tile dark", {'selected': selectedTile === 'a5'}, {'possible': possibleTiles.find(_ => _ === 'a5')})} id="a5"><span className="label">a5</span> {getPieceOrEmpty(placement.a5, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'b5'}, {'possible': possibleTiles.find(_ => _ === 'b5')})} id="b5"><span className="label">b5</span>{getPieceOrEmpty(placement.b5, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'c5'}, {'possible': possibleTiles.find(_ => _ === 'c5')})} id="c5"><span className="label">c5</span> {getPieceOrEmpty(placement.c5, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'd5'}, {'possible': possibleTiles.find(_ => _ === 'd5')})} id="d5"><span className="label">d5</span>{getPieceOrEmpty(placement.d5, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'e5'}, {'possible': possibleTiles.find(_ => _ === 'e5')})} id="e5"><span className="label">e5</span> {getPieceOrEmpty(placement.e5, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'f5'}, {'possible': possibleTiles.find(_ => _ === 'f5')})} id="f5"><span className="label">f5</span>{getPieceOrEmpty(placement.f5, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'g5'}, {'possible': possibleTiles.find(_ => _ === 'g5')})} id="g5"><span className="label">g5</span> {getPieceOrEmpty(placement.g5, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'h5'}, {'possible': possibleTiles.find(_ => _ === 'h5')})} id="h5"><span className="label">h5</span>{getPieceOrEmpty(placement.h5, pieces)}</div>
      </div>
      <div className="row">
        <div className={classnames("tile light", {'selected': selectedTile === 'a4'}, {'possible': possibleTiles.find(_ => _ === 'a4')})} id="a4"><span className="label">a4</span>{getPieceOrEmpty(placement.a4, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'b4'}, {'possible': possibleTiles.find(_ => _ === 'b4')})} id="b4"><span className="label">b4</span> {getPieceOrEmpty(placement.b4, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'c4'}, {'possible': possibleTiles.find(_ => _ === 'c4')})} id="c4"><span className="label">c4</span>{getPieceOrEmpty(placement.c4, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'd4'}, {'possible': possibleTiles.find(_ => _ === 'd4')})} id="d4"><span className="label">d4</span> {getPieceOrEmpty(placement.d4, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'e4'}, {'possible': possibleTiles.find(_ => _ === 'e4')})} id="e4"><span className="label">e4</span>{getPieceOrEmpty(placement.e4, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'f4'}, {'possible': possibleTiles.find(_ => _ === 'f4')})} id="f4"><span className="label">f4</span> {getPieceOrEmpty(placement.f4, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'g4'}, {'possible': possibleTiles.find(_ => _ === 'g4')})} id="g4"><span className="label">g4</span>{getPieceOrEmpty(placement.g4, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'h4'}, {'possible': possibleTiles.find(_ => _ === 'h4')})} id="h4"><span className="label">h4</span> {getPieceOrEmpty(placement.h4, pieces)}</div>
      </div>
      <div className="row">
        <div className={classnames("tile dark", {'selected': selectedTile === 'a3'}, {'possible': possibleTiles.find(_ => _ === 'a3')})} id="a3"><span className="label">a3</span> {getPieceOrEmpty(placement.a3, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'b3'}, {'possible': possibleTiles.find(_ => _ === 'b3')})} id="b3"><span className="label">b3</span>{getPieceOrEmpty(placement.b3, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'c3'}, {'possible': possibleTiles.find(_ => _ === 'c3')})} id="c3"><span className="label">c3</span> {getPieceOrEmpty(placement.c3, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'd3'}, {'possible': possibleTiles.find(_ => _ === 'd3')})} id="d3"><span className="label">d3</span>{getPieceOrEmpty(placement.d3, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'e3'}, {'possible': possibleTiles.find(_ => _ === 'e3')})} id="e3"><span className="label">e3</span> {getPieceOrEmpty(placement.e3, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'f3'}, {'possible': possibleTiles.find(_ => _ === 'f3')})} id="f3"><span className="label">f3</span>{getPieceOrEmpty(placement.f3, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'g3'}, {'possible': possibleTiles.find(_ => _ === 'g3')})} id="g3"><span className="label">g3</span> {getPieceOrEmpty(placement.g3, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'h3'}, {'possible': possibleTiles.find(_ => _ === 'h3')})} id="h3"><span className="label">h3</span>{getPieceOrEmpty(placement.h3, pieces)}</div>
      </div>
      <div className="row">
        <div className={classnames("tile light", {'selected': selectedTile === 'a2'}, {'possible': possibleTiles.find(_ => _ === 'a2')})} id="a2"><span className="label">a2</span>{getPieceOrEmpty(placement.a2, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'b2'}, {'possible': possibleTiles.find(_ => _ === 'b2')})} id="b2"><span className="label">b2</span> {getPieceOrEmpty(placement.b2, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'c2'}, {'possible': possibleTiles.find(_ => _ === 'c2')})} id="c2"><span className="label">c2</span>{getPieceOrEmpty(placement.c2, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'd2'}, {'possible': possibleTiles.find(_ => _ === 'd2')})} id="d2"><span className="label">d2</span> {getPieceOrEmpty(placement.d2, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'e2'}, {'possible': possibleTiles.find(_ => _ === 'e2')})} id="e2"><span className="label">e2</span>{getPieceOrEmpty(placement.e2, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'f2'}, {'possible': possibleTiles.find(_ => _ === 'f2')})} id="f2"><span className="label">f2</span> {getPieceOrEmpty(placement.f2, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'g2'}, {'possible': possibleTiles.find(_ => _ === 'g2')})} id="g2"><span className="label">g2</span>{getPieceOrEmpty(placement.g2, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'h2'}, {'possible': possibleTiles.find(_ => _ === 'h2')})} id="h2"><span className="label">h2</span> {getPieceOrEmpty(placement.h2, pieces)}</div>
      </div>
      <div className="row">
        <div className={classnames("tile dark", {'selected': selectedTile === 'a1'}, {'possible': possibleTiles.find(_ => _ === 'a1')})} id="a1"><span className="label">a1</span> {getPieceOrEmpty(placement.a1, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'b1'}, {'possible': possibleTiles.find(_ => _ === 'b1')})} id="b1"><span className="label">b1</span>{getPieceOrEmpty(placement.b1, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'c1'}, {'possible': possibleTiles.find(_ => _ === 'c1')})} id="c1"><span className="label">c1</span> {getPieceOrEmpty(placement.c1, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'd1'}, {'possible': possibleTiles.find(_ => _ === 'd1')})} id="d1"><span className="label">d1</span>{getPieceOrEmpty(placement.d1, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'd1'}, {'possible': possibleTiles.find(_ => _ === 'd1')})} id="e1"><span className="label">e1</span> {getPieceOrEmpty(placement.e1, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'f1'}, {'possible': possibleTiles.find(_ => _ === 'f1')})} id="f1"><span className="label">f1</span>{getPieceOrEmpty(placement.f1, pieces)}</div>
        <div className={classnames("tile dark", {'selected': selectedTile === 'g1'}, {'possible': possibleTiles.find(_ => _ === 'g1')})} id="g1"><span className="label">g1</span> {getPieceOrEmpty(placement.g1, pieces)}</div>
        <div className={classnames("tile light", {'selected': selectedTile === 'h1'}, {'possible': possibleTiles.find(_ => _ === 'h1')})} id="h1"><span className="label">h1</span>{getPieceOrEmpty(placement.h1, pieces)}</div>
      </div>
    </div>
  )
}

export default Board;
