import { useEffect, useState } from "react";
import SpinningBall from "../commons/SpinningBall";
import PlayersNamesForm from "./PlayersNamesForm";
import NumberOfSets from "./NumberOfSets";

const ScoringFlow: React.FC<any> = () => {
  const [flowStep, setFlowStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [player1, setPlayer1] = useState<string>("");
  const [player2, setPlayer2] = useState<string>("");
 // const [server, setServer] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      
    }, 1000);
  }, []);

  return (
    <div style={{textAlign:"center", marginLeft:"2%", marginRight:"2%", marginTop:"auto", marginBottom:"auto"}}>
      {loading && <SpinningBall />}
      {!loading && flowStep === 0 && <PlayersNamesForm player1={player1} player2={player2} setPlayer1={setPlayer1} setPlayer2={setPlayer2} setFlowStep={setFlowStep} setLoading={setLoading}/>}
      {!loading && flowStep === 1 && <NumberOfSets setFlowStep={setFlowStep}/>}
    </div>
  );
};

export default ScoringFlow;
