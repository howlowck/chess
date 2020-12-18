import React from 'react';
import './styles.css';
import { PieceColor, PieceKind, TileNotation } from '../../types';
import { getPieceComponent } from './simple';

type Props = {
  color: PieceColor
  kind: PieceKind
  position?: TileNotation | null
}



const Piece: React.FC<Props> = ({color, position = null, kind}) => {
  return (
    <div className='piece'>
      {getPieceComponent(color, kind)}
    </div>
  )
}

export default Piece;
