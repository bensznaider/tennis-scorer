import { useState, useEffect } from "react";

interface PointsMenuProps {
  player1: string;
  player2: string;
  server: string;
  setServer: React.Dispatch<React.SetStateAction<string>>;
  gamePoints: { player1: number; player2: number };
  setGamePoints: React.Dispatch<
    React.SetStateAction<{ player1: number; player2: number }>
  >;
  setFlowStep: React.Dispatch<React.SetStateAction<number>>;
  setSets: React.Dispatch<
    React.SetStateAction<{
      set1: number[];
      set2: number[] | null;
      set3: number[] | null;
      set4: number[] | null;
      set5: number[] | null;
    }>
  >;
}

const PointsMenu: React.FC<PointsMenuProps> = ({
  player1,
  player2,
  server,
  setServer,
  gamePoints,
  setGamePoints,
  setFlowStep,
  setSets,
}) => {
  const [pointWinner, setPointWinner] = useState<string>("");
  const [serveData, setServeData] = useState<string | null>("");
  const [winnerData, setWinnerData] = useState<string | null>("");
  const [unforcedErrorData, setUnforcedErrorData] = useState<string | null>("");
  const [forcedError, setForcedError] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<boolean>(false);
  const [selectServeMessage, setSelectServeMessage] = useState<boolean>(false);
  const [pointFlowStep, setPointFlowStep] = useState<number>(0);
  //CONSOLE LOG TO TEMPORARILY AVOID ERROR MESSAGE
  console.log(setServer, setFlowStep);

  useEffect(() => {
    const updateSetsAndGamePoints = async () => {
      if (
        gamePoints.player1 >= 4 &&
        gamePoints.player1 > gamePoints.player2 + 1
      ) {
        setSets((prevSets) => ({
          ...prevSets,
          set1: [prevSets.set1[0] + 1, prevSets.set1[1]],
        }));
        setGamePoints(() => ({
          player1: 0,
          player2: 0,
        }));
        server === "player1" ? setServer("player2") : setServer("player1");
      } else if (
        gamePoints.player2 >= 4 &&
        gamePoints.player2 > gamePoints.player1 + 1
      ) {
        setSets((prevSets) => ({
          ...prevSets,
          set1: [prevSets.set1[0], prevSets.set1[1] + 1],
        }));
        setGamePoints(() => ({
          player1: 0,
          player2: 0,
        }));
        server === "player1" ? setServer("player2") : setServer("player1");
      }
    };
    updateSetsAndGamePoints();
  }, [gamePoints, setGamePoints, setSets]);

  const handlePointWinner = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pointWinner) {
      setAlertMessage(false);
      setPointFlowStep(1);
    } else {
      setAlertMessage(true);
      setTimeout(() => {
        setAlertMessage(false);
      }, 1500);
    }
  };

  const handleServeData = (option: string) => {
    if (unforcedErrorData !== "double fault") {
      setServeData(option);
    }
  };

  const handleWinnerData = (option: string) => {
    setWinnerData(option);
    setUnforcedErrorData(null);
    setForcedError(false);
  };

  const handleUnforcedErrorData = (option: string) => {
    setWinnerData(null);
    setForcedError(false);
    if (option === "double fault") {
      setServeData(null);
    }
    setUnforcedErrorData(option);
  };

  const handleForcedError = () => {
    setWinnerData(null);
    setUnforcedErrorData(null);
    setForcedError(true);
  };

  const handleStatsContinue = () => {
    if (!winnerData && !unforcedErrorData && !forcedError) {
      setAlertMessage(true);
      setTimeout(() => {
        setAlertMessage(false);
      }, 1500);
      return;
    }
    if (!serveData && unforcedErrorData !== "double fault") {
      setSelectServeMessage(true);
      setTimeout(() => {
        setSelectServeMessage(false);
      }, 1500);
      return;
    }
    if (pointWinner === "player1") {
      setGamePoints((prevPoints) => ({
        ...prevPoints,
        player1: prevPoints.player1 + 1,
      }));
    } else if (pointWinner === "player2") {
      setGamePoints((prevPoints) => ({
        ...prevPoints,
        player2: prevPoints.player2 + 1,
      }));
    }
    setPointWinner("");
    setUnforcedErrorData(null);
    setWinnerData(null);
    setServeData(null);
    setForcedError(false);
    setPointFlowStep(0);
  };

  return (
    <div>
      {pointFlowStep === 0 && (
        <form onSubmit={handlePointWinner}>
          <h1>Select the point winner.</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "0.5rem",
            }}
          >
            <div
              className={
                pointWinner === "player1"
                  ? "selected-option"
                  : "not-selected-option"
              }
              style={{ margin: "0.5rem", width: "7rem" }}
              onClick={() => setPointWinner("player1")}
            >
              {player1}{" "}
              <span
                style={{
                  position: "absolute",
                  marginLeft: "0.3rem",
                  color: "lightgreen",
                }}
              >
                {pointWinner === "player1" ? "✔" : null}
              </span>
            </div>
            <div
              className={
                pointWinner === "player2"
                  ? "selected-option"
                  : "not-selected-option"
              }
              style={{ margin: "0.5rem", width: "7rem" }}
              onClick={() => setPointWinner("player2")}
            >
              {player2}{" "}
              <span
                style={{
                  position: "absolute",
                  marginLeft: "0.3rem",
                  color: "lightgreen",
                }}
              >
                {pointWinner === "player2" ? "✔" : null}
              </span>
            </div>
          </div>
          <button
            className="continue-button"
            style={{
              width: "fit-content",
            }}
          >
            Continue
          </button>
          {alertMessage && (
            <p
              style={{
                position: "absolute",
                marginTop: "0.6rem",
                marginLeft: "2rem",
              }}
            >
              Please select an option to continue.
            </p>
          )}
        </form>
      )}
      {pointFlowStep === 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div className="stats-submenu">
            Serve
            <div
              className={`stats-options ${
                serveData === "first serve"
                  ? "selected-option"
                  : "not-selected-option"
              }
              `}
              style={{ margin: "0.5rem", width: "7rem" }}
              onClick={() => handleServeData("first serve")}
            >
              First serve
              <span
                style={{
                  position: "absolute",
                  marginLeft: "0.3rem",
                  color: "lightgreen",
                }}
              >
                {serveData === "first serve" ? "✔" : null}
              </span>
            </div>
            <div
              className={`stats-options ${
                serveData === "second serve"
                  ? "selected-option"
                  : "not-selected-option"
              }
            `}
              style={{ margin: "0.5rem", width: "7rem" }}
              onClick={() => handleServeData("second serve")}
            >
              Second serve
              <span
                style={{
                  position: "absolute",
                  marginLeft: "0.3rem",
                  color: "lightgreen",
                }}
              >
                {serveData === "second serve" ? "✔" : null}
              </span>
            </div>
            {pointWinner === server && (
              <div
                className={`stats-options ${
                  winnerData === "ace"
                    ? "selected-option"
                    : "not-selected-option"
                }
                `}
                style={{ margin: "0.5rem", width: "7rem" }}
                onClick={() => handleWinnerData("ace")}
              >
                Ace
                <span
                  style={{
                    position: "absolute",
                    marginLeft: "0.3rem",
                    color: "lightgreen",
                  }}
                >
                  {winnerData === "ace" ? "✔" : null}
                </span>
              </div>
            )}
            {pointWinner !== server && (
              <div
                className={`stats-options ${
                  unforcedErrorData === "double fault"
                    ? "selected-option"
                    : "not-selected-option"
                }
                `}
                style={{ margin: "0.5rem", width: "7rem" }}
                onClick={() => handleUnforcedErrorData("double fault")}
              >
                Double fault
                <span
                  style={{
                    position: "absolute",
                    marginLeft: "0.3rem",
                    color: "lightgreen",
                  }}
                >
                  {unforcedErrorData === "double fault" ? "✔" : null}
                </span>
              </div>
            )}
          </div>
          <div className="stats-submenu">
            Winner
            <div
              className={`stats-options ${
                winnerData === "forehand"
                  ? "selected-option"
                  : "not-selected-option"
              }
              `}
              style={{ margin: "0.5rem", width: "7rem" }}
              onClick={() => handleWinnerData("forehand")}
            >
              Forehand
              <span
                style={{
                  position: "absolute",
                  marginLeft: "0.3rem",
                  color: "lightgreen",
                }}
              >
                {winnerData === "forehand" ? "✔" : null}
              </span>
            </div>
            <div
              className={`stats-options ${
                winnerData === "backhand"
                  ? "selected-option"
                  : "not-selected-option"
              }
            `}
              style={{ margin: "0.5rem", width: "7rem" }}
              onClick={() => handleWinnerData("backhand")}
            >
              Backhand
              <span
                style={{
                  position: "absolute",
                  marginLeft: "0.3rem",
                  color: "lightgreen",
                }}
              >
                {winnerData === "backhand" ? "✔" : null}
              </span>
            </div>
            <div
              className={`stats-options ${
                winnerData === "volley"
                  ? "selected-option"
                  : "not-selected-option"
              }
               `}
              style={{ margin: "0.5rem", width: "7rem" }}
              onClick={() => handleWinnerData("volley")}
            >
              Volley
              <span
                style={{
                  position: "absolute",
                  marginLeft: "0.3rem",
                  color: "lightgreen",
                }}
              >
                {winnerData === "volley" ? "✔" : null}
              </span>
            </div>
          </div>
          <div className="stats-submenu">
            Rival Unforced Error
            <div
              className={`stats-options ${
                unforcedErrorData === "forehand"
                  ? "selected-option"
                  : "not-selected-option"
              }
                 `}
              style={{ margin: "0.5rem", width: "7rem" }}
              onClick={() => handleUnforcedErrorData("forehand")}
            >
              Forehand
              <span
                style={{
                  position: "absolute",
                  marginLeft: "0.3rem",
                  color: "lightgreen",
                }}
              >
                {unforcedErrorData === "forehand" ? "✔" : null}
              </span>
            </div>
            <div
              className={`stats-options ${
                unforcedErrorData === "backhand"
                  ? "selected-option"
                  : "not-selected-option"
              }
                 `}
              style={{ margin: "0.5rem", width: "7rem" }}
              onClick={() => handleUnforcedErrorData("backhand")}
            >
              Backhand
              <span
                style={{
                  position: "absolute",
                  marginLeft: "0.3rem",
                  color: "lightgreen",
                }}
              >
                {unforcedErrorData === "backhand" ? "✔" : null}
              </span>
            </div>
            <div
              className={`stats-options ${
                unforcedErrorData === "volley"
                  ? "selected-option"
                  : "not-selected-option"
              }
                 `}
              style={{ margin: "0.5rem", width: "7rem" }}
              onClick={() => handleUnforcedErrorData("volley")}
            >
              Volley
              <span
                style={{
                  position: "absolute",
                  marginLeft: "0.3rem",
                  color: "lightgreen",
                }}
              >
                {unforcedErrorData === "volley" ? "✔" : null}
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <div className="stats-submenu">
              <div
                className={`stats-options ${
                  forcedError === true
                    ? "selected-option"
                    : "not-selected-option"
                }
                 `}
                style={{ margin: "0.5rem", width: "7rem" }}
                onClick={handleForcedError}
              >
                Rival Forced Error
                <span
                  style={{
                    position: "absolute",
                    marginLeft: "0.3rem",
                    color: "lightgreen",
                  }}
                >
                  {forcedError === true ? "✔" : null}
                </span>
              </div>
            </div>
            {!alertMessage && !selectServeMessage && (
              <button
                className="continue-button"
                style={{ width: "fit-content" }}
                onClick={handleStatsContinue}
              >
                Continue
              </button>
            )}
            {alertMessage && (
              <p
                style={{
                  fontSize: "small",
                }}
              >
                Please choose how {pointWinner === player1 ? player1 : player2}{" "}
                won the point.
              </p>
            )}
            {selectServeMessage && (
              <p
                style={{
                  fontSize: "small",
                  width: "100%",
                }}
              >
                Please choose between first or second serve.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PointsMenu;
