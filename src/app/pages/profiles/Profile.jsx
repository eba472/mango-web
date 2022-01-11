export default function Profile() {
  return (
    <div style={{padding: "5px 30px"}}>
      <div className="myProfile">
        <h1>My profile</h1>
        <p>
          This is a page with detailed statistics about your learning progress.
          The more lessons you complete, the more detailed and accurate these
          statistics will be.
        </p>
      </div>
      <div className="statistic">
        <h2 className="statisticName">All Time Statistics:</h2>
        <p>
          <span className="allStatistic">
            <span className="numOfStatistic">Total Time:</span>
            <span className="ValueOfStatistic">10:56:24</span>
          </span>
          <span className="allStatistic">
            <span className="numOfStatistic">Total Lessons:</span>
            <span className="ValueOfStatistic">1,007</span>
          </span>
          <span className="allStatistic">
            <span className="numOfStatistic">Top Speed (wpm):</span>
            <span className="ValueOfStatistic">46.6</span>
          </span>
          <span className="allStatistic">
            <span className="numOfStatistic">Average Speed (wpm):</span>
            <span className="ValueOfStatistic">38.1</span>
          </span>
        </p>
        <h2 className="statisticName">Statistics for Today:</h2>
        <p>
          <span className="allStatistic">
            <span className="numOfStatistic">Total Time:</span>
            <span className="ValueOfStatistic">10:56:24</span>
          </span>
          <span className="allStatistic">
            <span className="numOfStatistic">Total Lessons:</span>
            <span className="ValueOfStatistic">1,007</span>
          </span>
          <span className="allStatistic">
            <span className="numOfStatistic">Top Speed (wpm):</span>
            <span className="ValueOfStatistic">46.6</span>
          </span>
          <span className="allStatistic">
            <span className="numOfStatistic">Average Speed (wpm):</span>
            <span className="ValueOfStatistic">38.1</span>
          </span>
        </p>
        <h2>Compare Yourself:</h2>
        <p>Your all time top speed beats 79.34% of all other people.</p>
        <p>Your all time average speed beats 61% of all other people.</p>
        <div className="Analyze">
          <h5 className="NameOfAnalyze">Relative Typing Speed</h5>
          <p className="ExplanationOfAnalyze">
            This is a histogram of the typing speeds of all users, and your
            position in relation to them.
          </p>
          <div className="GraphicOfAnalyze">Here will be graphic.</div>
          <p>
            See how fast you type relative to other users. The higher the bar
            is, the more people type at that speed. Your position is marked with
            the colored vertical lines.
          </p>
        </div>

        <div className="Analyze">
          <h5 className="NameOfAnalyze">Learning Progress Overview</h5>
          <p className="ExplanationOfAnalyze">
            This chart shows the learning progress overview for all keys.
          </p>
          <div className="GraphicOfAnalyze">Here will be graphic.</div>
          <p>
            Horizontal axis: lesson number. Vertical axis: typing speed for each
            individual key, – slow, – fast.
          </p>
        </div>

        <div className="Analyze">
          <h5 className="NameOfAnalyze">Typing Speed</h5>
          <p className="ExplanationOfAnalyze">
            This chart shows how overall typing speed changes over time.
          </p>
          <div className="GraphicOfAnalyze">Here will be graphic.</div>
          <p>
            Horizontal axis: lesson number. Vertical axis: – typing speed, –
            number of errors, – number of keys in the lessons.
          </p>
        </div>

        <div className="Analyze">
          <h5 className="NameOfAnalyze">Key Typing Speed</h5>
          <p className="ExplanationOfAnalyze">
            This chart shows the typing speed change for each individual key.
          </p>
          <div className="GraphicOfAnalyze">Here will be graphic.</div>
          <p>
            Horizontal axis: lesson number. Vertical axis: – typing speed for
            the currently selected key.
          </p>
        </div>
      </div>
    </div>
  );
}
