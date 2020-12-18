import React from "react";
import { PieceColor, PieceKind } from "../../types";

const BishopWhite: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <g fill="#fff" strokeLinecap="butt">
          <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"></path>
          <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"></path>
          <path d="M25 8a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z"></path>
        </g>
        <path
          strokeLinejoin="miter"
          d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5"
        ></path>
      </g>
    </svg>
  );
}

const BishopBlack: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <g fill="#000" strokeLinecap="butt">
          <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"></path>
          <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"></path>
          <path d="M25 8a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z"></path>
        </g>
        <path
          stroke="#fff"
          strokeLinejoin="miter"
          d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5"
        ></path>
      </g>
    </svg>
  );
}



const KingBlack: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path
          fill="none"
          stroke="#000"
          strokeLinejoin="miter"
          d="M22.5 11.63V6"
        ></path>
        <path
          fill="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"
        ></path>
        <path
          fill="#000"
          d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"
        ></path>
        <path strokeLinejoin="miter" d="M20 8h5"></path>
        <path
          stroke="#fff"
          d="M32 29.5s8.5-4 6.03-9.65C34.15 14 25 18 22.5 24.5l.01 2.1-.01-2.1C20 18 9.906 14 6.997 19.85c-2.497 5.65 4.853 9 4.853 9"
        ></path>
        <path
          stroke="#fff"
          d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0"
        ></path>
      </g>
    </svg>
  );
}

const KingWhite: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path strokeLinejoin="miter" d="M22.5 11.63V6M20 8h5"></path>
        <path
          fill="#fff"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"
        ></path>
        <path
          fill="#fff"
          d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"
        ></path>
        <path d="M11.5 30c5.5-3 15.5-3 21 0M11.5 33.5c5.5-3 15.5-3 21 0M11.5 37c5.5-3 15.5-3 21 0"></path>
      </g>
    </svg>
  );
}

const KnightBlack: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path
          fill="#000"
          d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"
        ></path>
        <path
          fill="#000"
          d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"
        ></path>
        <path
          fill="#fff"
          stroke="#fff"
          d="M9.5 25.5a.5.5 0 11-1 0 .5.5 0 111 0z"
        ></path>
        <path
          fill="#fff"
          stroke="#fff"
          strokeWidth="1.5"
          d="M14.933 15.75a.5 1.5 30 11-.866-.5.5 1.5 30 11.866.5z"
        ></path>
        <path
          fill="#fff"
          stroke="none"
          d="M24.55 10.4l-.45 1.45.5.15c3.15 1 5.65 2.49 7.9 6.75S35.75 29.06 35.25 39l-.05.5h2.25l.05-.5c.5-10.06-.88-16.85-3.25-21.34-2.37-4.49-5.79-6.64-9.19-7.16l-.51-.1z"
        ></path>
      </g>
    </svg>
  );
}

const KnightWhite: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path
          fill="#fff"
          d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"
        ></path>
        <path
          fill="#fff"
          d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"
        ></path>
        <path fill="#000" d="M9.5 25.5a.5.5 0 11-1 0 .5.5 0 111 0z"></path>
        <path
          fill="#000"
          strokeWidth="1.5"
          d="M14.933 15.75a.5 1.5 30 11-.866-.5.5 1.5 30 11.866.5z"
        ></path>
      </g>
    </svg>
  );
}

const PawnBlack: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38-1.95 1.12-3.28 3.21-3.28 5.62 0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"
      ></path>
    </svg>
  );
}

const PawnWhite: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
      <path
        fill="#fff"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38-1.95 1.12-3.28 3.21-3.28 5.62 0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"
      ></path>
    </svg>
  );
}

const QueenBlack: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
      <g
        fill="0"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <g fill="#000" stroke="none">
          <circle cx="6" cy="12" r="2.75"></circle>
          <circle cx="14" cy="9" r="2.75"></circle>
          <circle cx="22.5" cy="8" r="2.75"></circle>
          <circle cx="31" cy="9" r="2.75"></circle>
          <circle cx="39" cy="12" r="2.75"></circle>
        </g>
        <path
          strokeLinecap="butt"
          d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z"
        ></path>
        <path
          strokeLinecap="butt"
          d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"
        ></path>
        <path
          fill="none"
          strokeLinecap="butt"
          d="M11 38.5a35 35 1 0023 0"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          d="M11 29a35 35 1 0123 0M12.5 31.5h20M11.5 34.5a35 35 1 0022 0M10.5 37.5a35 35 1 0024 0"
        ></path>
      </g>
    </svg>
  );
}

const QueenWhite: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
      <g
        fill="#fff"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M8 12a2 2 0 11-4 0 2 2 0 114 0zM24.5 7.5a2 2 0 11-4 0 2 2 0 114 0zM41 12a2 2 0 11-4 0 2 2 0 114 0zM16 8.5a2 2 0 11-4 0 2 2 0 114 0zM33 9a2 2 0 11-4 0 2 2 0 114 0z"></path>
        <path
          strokeLinecap="butt"
          d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L7 14l2 12z"
        ></path>
        <path
          strokeLinecap="butt"
          d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"
        ></path>
        <path
          fill="none"
          d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0"
        ></path>
      </g>
    </svg>
  );
}

const RookBlack: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
      <g
        fill="0"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="butt"
          d="M9 39h27v-3H9v3zM12.5 32l1.5-2.5h17l1.5 2.5h-20zM12 36v-4h21v4H12z"
        ></path>
        <path
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M14 29.5v-13h17v13H14z"
        ></path>
        <path
          strokeLinecap="butt"
          d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          strokeLinejoin="miter"
          strokeWidth="1"
          d="M12 35.5h21M13 31.5h19M14 29.5h17M14 16.5h17M11 14h23"
        ></path>
      </g>
    </svg>
  );
}

const RookWhite: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
      <g
        fill="#fff"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="butt"
          d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5"
        ></path>
        <path d="M34 14l-3 3H14l-3-3"></path>
        <path
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M31 17v12.5H14V17"
        ></path>
        <path d="M31 29.5l1.5 2.5h-20l1.5-2.5"></path>
        <path fill="none" strokeLinejoin="miter" d="M11 14h23"></path>
      </g>
    </svg>
  );
}

const NotFound: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 96 96"
      xmlSpace="preserve"
    >
      <path d="M96 14L82 0 48 34 14 0 0 14 34 48 0 82 14 96 48 62 82 96 96 82 62 48z"></path>
    </svg>
  );
}

export const getPieceComponent = (color: PieceColor, kind: PieceKind) => {
  if (color === 'white') {
    if (kind === 'bishop') {
      return <BishopWhite />
    }
    
    if (kind === 'king') {
      return <KingWhite />
    }
    
    if (kind === 'knight') {
      return <KnightWhite />
    }
    
    if (kind === 'pawn') {
      return <PawnWhite />
    }
    
    if (kind === 'queen') {
      return <QueenWhite />
    }

    if (kind === 'rook') {
      return <RookWhite />
    }
  }
  if (color === 'black') {
    if (kind === 'bishop') {
      return <BishopBlack />
    }
    
    if (kind === 'king') {
      return <KingBlack />
    }
    
    if (kind === 'knight') {
      return <KnightBlack />
    }
    
    if (kind === 'pawn') {
      return <PawnBlack />
    }
    
    if (kind === 'queen') {
      return <QueenBlack />
    }

    if (kind === 'rook') {
      return <RookBlack />
    }
  }
  return <NotFound />
}