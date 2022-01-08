import Key from "./Key";
function CreateKeyboard() {
  const firstRow = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "backspace",
  ];

  const secondRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const thirdRow = [
    "caps",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "enter",
    "done",
  ];

  const fourthRow = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "?"];

  const fifthRow = ["space"];

  return (
    <div style={{ height: "30px" }}>
      <div>{firstRow.map((keyVal) => {
        return <Key keyVal={keyVal} key={keyVal + "_key"} />;
      })}</div>
      
      <div>{secondRow.map((keyVal) => {
        return <Key keyVal={keyVal} key={keyVal + "_key"} />;
      })}</div>

      <div>{thirdRow.map((keyVal) => {
        return <Key keyVal={keyVal} key={keyVal + "_key"} />;
      })}</div>

      <div>{fourthRow.map((keyVal) => {
        return <Key keyVal={keyVal} key={keyVal + "_key"} />;
      })}</div>
      
      <div>{fifthRow.map((keyVal) => {
        return <Key keyVal={keyVal} key={keyVal + "_key"} />;
      })}</div>
    </div>
  );
}

export default CreateKeyboard;
