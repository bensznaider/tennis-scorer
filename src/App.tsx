import { useState } from "react";
import TitleBar from "./components/TitleBar";
import WelcomeMessage from "./components/WelcomeMessage";
import SpinningBall from "./commons/SpinningBall";

function App() {
  const [welcome, setWelcome] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div
      style={{ height:"100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"center"}}
    >
      <div className="app-window">
        <TitleBar />
        {loading && <SpinningBall />}
        {welcome && <WelcomeMessage setWelcome={setWelcome} setLoading={setLoading}/>}
      </div>
    </div>
  );
}

export default App;
