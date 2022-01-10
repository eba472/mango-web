import Keyboard from "./keyboard/Keyboard";
import TextToType from "./topPart/TextToType";
import TopPart from "./topPart/TopPart";
import "./styles.css";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SpeedIcon from "@mui/icons-material/Speed";
import HelpIcon from "@mui/icons-material/Help";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import AlignHorizontalCenterIcon from "@mui/icons-material/AlignHorizontalCenter";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
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
          <div className="UserAccount">
            <img
              className="UserPic"
              src="https://picsum.photos/200/300.jpg"
              alt="UserPic"
            ></img>
            <span
              className="UserName"
              style={{ textAlign: "center", fontSize: "20px", paddingTop: "10px" }}
            >
              john Doe
            </span>
          </div>
          <div className="menuItem">
            <div className="threeSystem">
              <button
                class="switchDark"
                title="Switch to theme Dark Colors."
                viewBox="0 0 24 24"
              >
                <Brightness5Icon />
              </button>
              <button
                class="makelargerText"
                title="Switch theme into larger text size"
              >
                <TextIncreaseIcon />
              </button>
              <button class="fullScreen" title="Enter full-screen mode.">
                <FullscreenIcon />d
              </button>
            </div>
          </div>
          <div className="menuItem">
            <div className="Practice2">
              <span className="Practice4">
                <KeyboardIcon /> Practice
              </span>
            </div>
          </div>
          <div className="menuItem">
            <div className="Profile2">
              <span className="ProfileLine">
                <AssessmentIcon /> Profile
              </span>
            </div>
          </div>
          <div className="menuItem">
            <div>
              <span className="TypingTestLine">
                <SpeedIcon />
                TypingTest
              </span>
            </div>
          </div>
          <div className="menuItem">
            <div>
              <span className="HelpLine">
                <HelpIcon />
                Help
              </span>
            </div>
          </div>
          <div className="menuItem">
            <div>
              <span className="HighScoresLine">
                <EmojiEventsIcon />
                HighScores
              </span>
            </div>
          </div>
          <div className="menuItem">
            <div>
              <span className="MultiplaylerLine">
                <TimeToLeaveIcon />
                Multiplayler
              </span>
            </div>
          </div>
          <div className="menuItem">
            <div>
              <span classname="layoutsLine">
                <AlignHorizontalCenterIcon />
                layouts
              </span>
            </div>
          </div>
          <div className="menuItem">
            <div>
              <span className="TextToolsLine">
                <HomeRepairServiceIcon />
                TextTools
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
