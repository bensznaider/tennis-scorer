import TitleBar from "./components/TitleBar";
import SpinningBall from "./commons/SpinningBall";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="app-window">
        <TitleBar />
        <SpinningBall />
      </div>
    </div>
  );
}

export default App;
