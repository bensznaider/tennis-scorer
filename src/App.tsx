import { useState } from "react";
import TitleBar from "./components/TitleBar";
import WelcomeMessage from "./components/WelcomeMessage";
import ScoringFlow from "./components/ScoringFlow";

function App() {
  const [welcome, setWelcome] = useState<boolean>(true);

  return (
    <div
      style={{ height:"100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"center"}}
    >
      <div className="app-window">
        <TitleBar />
        {welcome && <WelcomeMessage setWelcome={setWelcome} />}
        {!welcome && <ScoringFlow />}
      </div>
    </div>
  );
}

export default App;
