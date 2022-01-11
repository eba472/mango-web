import Home from "./pages/home/Home";
import SideMenu from "./sideMenu/SideMenu";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/profiles/Profile";
import Signup from "./pages/signup/Signup"

function App() {
  return (
    <Router>
      <div className="App">
        <div className="headerContainer">
          <div className="HeadingAd"></div>
        </div>
        <div className="leftDiv">
          <div className="SecondAd"></div>
        </div>
        <div className="middleDiv">
          <div className="MainPart">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
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
