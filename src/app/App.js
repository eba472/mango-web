import Home from "./pages/home/Home";
import SideMenu from "./sideMenu/SideMenu";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./pages/profiles/Profile";

function App() {
  return (
    <Router>
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
              <div>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
        <div className="rightDiv">
          <SideMenu />
        </div>
      </div>
    </Router>
  );
}

export default App;
