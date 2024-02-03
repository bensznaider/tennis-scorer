import { useState } from "react";

interface PointsMenuProps {
  player1: string;
  player2: string;
  setServer: React.Dispatch<React.SetStateAction<string>>;
  setFlowStep: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const PointsMenu: React.FC<PointsMenuProps> = ({
  player1,
  player2,
  setServer,
  setFlowStep,
  setLoading,
}) => {
  const [pointWinner, setPointWinner] = useState<string>("");
  const [serveData, setServeData] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<boolean>(false);
  const [pointFlowStep, setPointFlowStep] = useState<number>(0);
  //CONSOLE LOG TO TEMPORARILY AVOID ERROR MESSAGE
  console.log(setServer, setFlowStep, setLoading);

  const handlePointWinner = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pointWinner) {
      setPointFlowStep(1);
    } else {
      setAlertMessage(true);
      setTimeout(() => {
        setAlertMessage(false);
      }, 1500);
    }
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
          <button className="continue-button">Continue</button>
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
        <form onSubmit={handlePointWinner}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "0.5rem",
            }}
          >
             <div
              className={
                serveData === "First serve"
                  ? "selected-option"
                  : "not-selected-option"
              }
              style={{ margin: "0.5rem", width: "7rem" }}
              onClick={() => setServeData("First serve")}
            >
              First serve
              <span
                style={{
                  position: "absolute",
                  marginLeft: "0.3rem",
                  color: "lightgreen",
                }}
              >
                {serveData === "First serve" ? "✔" : null}
              </span>
            </div>
            <div
              className={
                serveData === "Second serve"
                  ? "selected-option"
                  : "not-selected-option"
              }
              style={{ margin: "0.5rem", width: "7rem" }}
              onClick={() => setServeData("Second serve")}
            >
              Second serve
              <span
                style={{
                  position: "absolute",
                  marginLeft: "0.3rem",
                  color: "lightgreen",
                }}
              >
                {serveData === "Second serve" ? "✔" : null}
              </span>
            </div>
          </div>
          <button className="continue-button">Continue</button>
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
    </div>
  );
};

export default PointsMenu;
