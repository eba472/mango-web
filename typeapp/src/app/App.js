import Keyboard from "./keyboard/Keyboard";
import TextToType from "./topPart/TextToType";
import TopPart from "./topPart/TopPart";
import "./styles.css";
import KeyboardIcon from '@mui/icons-material/Keyboard';

function App() {
  return (
    <div className="App">
      <div className="headerContainer">
        <div className="HeadingAd"></div>
      </div>
      <div className="container">
        <div className="leftDiv">
          <div className="SecondAd"></div>
        </div>
        <div className="middleDiv">
          <div className="MainPart">
            <TopPart />
            <TextToType />
            <Keyboard />
          </div>
        </div>
      </div>
      <div className="rightDiv">
        <div className="SidePart">
          <KeyboardIcon />
        </div>
      </div>
    </div>
  );
}

export default App;
