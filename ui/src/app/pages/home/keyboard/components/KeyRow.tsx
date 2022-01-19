import EachKey from "./EachKey";
import React, { FC } from "react";

const KeyRow: FC<{ keyRow: string[] }> = ({ keyRow }) => {
  return (
    <div>
      <div>
        {keyRow.map((eachKey, index) => {
          return <EachKey eachKey={eachKey} key={"eachKey_" + String(index)} />;
        })}
      </div>
    </div>
  );
};

export default KeyRow;
