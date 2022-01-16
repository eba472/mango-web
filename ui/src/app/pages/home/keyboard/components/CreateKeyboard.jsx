import KeyRow from "./KeyRow"
import "../keyboard.css";

function CreateKeyboard() {
  const keyLayout = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter"],
    ["done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?"],
    ["space"]
];

  return (
    <div className="keyboard">
      <div className="keyboard__keys">{keyLayout.map((keyRow, index) => {
        return <KeyRow keyRow={keyRow} key={"KeyRow_" + String(index)} />;
      })}</div>
    </div>
  );
}

export default CreateKeyboard;
