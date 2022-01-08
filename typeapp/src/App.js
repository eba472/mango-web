import './styles.css';

function App() {
  return (
    <div className="App">
      <div class="headerContainer">
        <div class="HeadingAd"></div>
      </div>
      <div class="container">
        <div class="leftDiv">
          <div class="SecondAd"></div>
        </div>
        <div class="middleDiv">
          <div class="MainPart">
            <table class="Heading" cellpadding="20">
              <thead>
                <tr>
                  <td>Speed:</td>
                  <td>Errors:</td>
                  <td>score:</td>
                </tr>
              </thead>
            </table>
            <div>Words to type</div>
            <div>keyboard</div>
          </div>
        </div>
        <div class="rightDiv">
          <div class="SidePart"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
