import { useEffect, useState } from "react";
import SpinningBall from "../commons/SpinningBall";
import PlayersNamesForm from "./PlayersNamesForm";

const ScoringFlow: React.FC<any> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [player1, setPlayer1] = useState<string>("");
  const [player2, setPlayer2] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div style={{textAlign:"center", marginLeft:"2%", marginRight:"2%", marginTop:"auto", marginBottom:"auto"}}>
      {loading && <SpinningBall />}
      {!loading && <PlayersNamesForm player1={player1} player2={player2} setPlayer1={setPlayer1} setPlayer2={setPlayer2}/>}
    </div>
  );
};

export default ScoringFlow;
