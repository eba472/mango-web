import EachKey from './EachKey'

function KeyRow({ keyRow }) {
  return (
    <div>
      <div>{keyRow.map((eachKey, index) => {
        return <EachKey eachKey={eachKey} key={"eachKey_" + String(index)} />;
      })}</div>
    </div>
  );
}

export default KeyRow;
