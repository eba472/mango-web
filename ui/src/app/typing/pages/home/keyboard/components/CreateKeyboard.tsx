import KeyRow from './KeyRow';
import '../keyboard.css';
import React from 'react';

function CreateKeyboard() {
  const keyLayout: string[][] = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'enter'],
    ['done', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?'],
    ['space'],
  ];

  return (
    <div className="keyboard">
      <div className="keyboard__keys">
        {keyLayout.map((keyRow, index) => <KeyRow keyRow={keyRow} key={`KeyRow_${String(index)}`} />)}
      </div>
    </div>
  );
}

export default CreateKeyboard;
