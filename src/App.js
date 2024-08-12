import "./index.css";
import Line from "./components/Line";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <header>
          <h3>lines /</h3>
          <div className="circle"></div>
        </header>
        <div className="lineContainer">
          <Line letter="A" />
          <Line letter="B" />
          <Line letter="C" />
          <Line letter="D" />
          <Line letter="E" />
          <Line letter="F" />
          <Line letter="G" />
          <Line letter="H" />
          <Line letter="I" />
          <Line letter="J" />
          <Line letter="K" />
          <Line letter="L" />
          <Line letter="M" />
          <Line letter="N" />
          <Line letter="O" />
          <Line letter="P" />
          <Line letter="Q" />
          <Line letter="R" />
          <Line letter="S" />
          <Line letter="T" />
          <Line letter="U" />
          <Line letter="V" />
          <Line letter="W" />
        </div>
      </div>
    </div>
  );
}

export default App;
