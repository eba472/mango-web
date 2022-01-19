import KeyboardCapslockSharpIcon from '@mui/icons-material/KeyboardCapslockSharp';
import BackspaceSharpIcon from '@mui/icons-material/BackspaceSharp';
import KeyboardReturnSharpIcon from '@mui/icons-material/KeyboardReturnSharp';
import SpaceBarSharpIcon from '@mui/icons-material/SpaceBarSharp';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import '../keyboard.css';
import React, { FC } from 'react';

const EachKey: FC<{ eachKey: string }> = ({ eachKey }) => {
  switch (eachKey) {
    case 'backspace':
      return (
        <div className="keyboard__key keyboard__key--wide">
          <BackspaceSharpIcon />
        </div>
      );
    case 'caps':
      return (
        <div className="keyboard__key keyboard__key--wide">
          <KeyboardCapslockSharpIcon />
        </div>
      );
    case 'enter':
      return (
        <div className="keyboard__key keyboard__key--wide">
          <KeyboardReturnSharpIcon />
        </div>
      );
    case 'space':
      return (
        <div className="keyboard__key keyboard__key--extra-wide">
          <SpaceBarSharpIcon />
        </div>
      );
    case 'done':
      return (
        <div className="keyboard__key keyboard__key--wide">
          <CheckSharpIcon />
        </div>
      );
    default:
      return <div className="keyboard__key">{eachKey}</div>;
  }
};

export default EachKey;
