import React from "react";

export default function TypingTest() {
  return (
    <div className="TypingTest">
      <div>
        <div className="UpperTime">
          <span>Test duration:</span>
          <a className="Time" href="#">
            15 seconds
          </a>
          <span>|</span>
          <a className="Time" href="#">
            30 seconds
          </a>
          <span>|</span>
          <a className="Time" href="#">
            60 seconds
          </a>
          <span>|</span>
        </div>
        <div className="GiveText">
          <div className="eachText">
            <div className="stText">
              <div className="NumOfText">1</div>
              <div className="Text">deufcbi_du</div>
            </div>
            <div className="stText">
              <div className="NumOfText">2</div>
              <div className="Text">deufcbi_du</div>
            </div>
            <div className="stText">
              <div className="NumOfText">3</div>
              <div className="Text">deufcbi_du</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
