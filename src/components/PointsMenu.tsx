import { useState } from "react";

interface PointsMenuProps {
  player1: string;
  player2: string;
  server: string;
  setServer: React.Dispatch<React.SetStateAction<string>>;
  setFlowStep: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const PointsMenu: React.FC<PointsMenuProps> = ({
  player1,
  player2,
  server,
  setServer,
  setFlowStep,
  setLoading,
}) => {
  const [pointWinner, setPointWinner] = useState<string>("");
  const [serveData, setServeData] = useState<string | null>("");
  const [winnerData, setWinnerData] = useState<string | null>("");
  const [unforcedErrorData, setUnforcedErrorData] = useState<string | null>("");
  const [alertMessage, setAlertMessage] = useState<boolean>(false);
  const [pointFlowStep, setPointFlowStep] = useState<number>(0);
  //CONSOLE LOG TO TEMPORARILY AVOID ERROR MESSAGE
  console.log(setServer, setFlowStep, setLoading);

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
  };

  const handleUnforcedErrorData = (option: string) => {
    setWinnerData(null);
    setServeData(null);
    setUnforcedErrorData(option);
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
        <div>
          <div className="stats-submenu">
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
            <div>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default PointsMenu;
