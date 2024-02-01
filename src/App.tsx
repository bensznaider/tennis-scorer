import { useState } from "react";
import TitleBar from "./components/TitleBar";
import WelcomeMessage from "./components/WelcomeMessage";
import ScoringFlow from "./components/ScoringFlow";
import RestartAlert from "./components/RestartAlert";

function App() {
  const [welcome, setWelcome] = useState<boolean>(true);
  const [refreshQuestion, setRefreshQuestion] = useState<boolean>(false);

  return (
    <div
      style={{
        height: "100vh",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {refreshQuestion && <RestartAlert setRefreshQuestion={setRefreshQuestion}/>}
      <div className={`app-window ${refreshQuestion && "restart-question-background"}`}>
        <TitleBar refreshQuestion={refreshQuestion} setRefreshQuestion={setRefreshQuestion} />
        {welcome && <WelcomeMessage setWelcome={setWelcome} />}
        {!welcome && <ScoringFlow />}
      </div>
    </div>
  );
}

export default App;
