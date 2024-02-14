import { useEffect, useState } from "react";
import SpinningBall from "../commons/SpinningBall";
import PlayersNamesForm from "./PlayersNamesForm";
import NumberOfSets from "./NumberOfSets";
import WhoServesFirst from "./WhoServesFirst";
import Score from "./Score";
import PointsMenu from "./PointsMenu";

const ScoringFlow: React.FC<any> = () => {
  const [flowStep, setFlowStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [player1, setPlayer1] = useState<string>("");
  const [player2, setPlayer2] = useState<string>("");
  const [server, setServer] = useState<string>("");
  const [sets, setSets] = useState<{
    set1: number[];
    set2: number[] | null;
    set3: number[] | null;
    set4: number[] | null;
    set5: number[] | null;
  }>({
    set1: [0, 0],
    set2: null,
    set3: null,
    set4: null,
    set5: null,
  });
  const [gamePoints, setGamePoints] = useState<{
    player1: number;
    player2: number;
  }>({
    player1: 0,
    player2: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginLeft: "2%",
        marginRight: "2%",
        marginTop: "auto",
        marginBottom: "auto",
      }}
    >
      {loading && <SpinningBall />}
      {!loading && flowStep === 0 && (
        <PlayersNamesForm
          player1={player1}
          player2={player2}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          setFlowStep={setFlowStep}
          setLoading={setLoading}
        />
      )}
      {!loading && flowStep === 1 && (
        <NumberOfSets
          setFlowStep={setFlowStep}
          setSets={setSets}
          setLoading={setLoading}
        />
      )}
      {!loading && flowStep === 2 && (
        <WhoServesFirst
          player1={player1}
          player2={player2}
          setServer={setServer}
          setFlowStep={setFlowStep}
          setLoading={setLoading}
        />
      )}
      <div>
        {!loading && flowStep === 3 && (
          <div>
            <Score
              player1={player1}
              player2={player2}
              server={server}
              sets={sets}
              gamePoints={gamePoints}
            />
            <PointsMenu
              player1={player1}
              player2={player2}
              server={server}
              setServer={setServer}
              gamePoints={gamePoints}
              setGamePoints={setGamePoints}
              setFlowStep={setFlowStep}
              setSets={setSets}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ScoringFlow;
