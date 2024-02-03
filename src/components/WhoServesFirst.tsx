import { useState } from "react";

interface WhoServesFirstProps {
  player1: string;
  player2: string;
  setServer: React.Dispatch<React.SetStateAction<string>>;
  setFlowStep: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const WhoServesFirst: React.FC<WhoServesFirstProps> = ({
  player1,
  player2,
  setServer,
  setFlowStep,
  setLoading,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [randomButtonContent, setRandomButtonContent] =
    useState<React.ReactNode>("Random");
  const [alertMessage, setAlertMessage] = useState<boolean>(false);

  const handleSetsSelector = (option: string) => {
    setSelectedOption(option);
  };

  const handleRandomChoice = () => {
    const randomNumber = Math.random();
    setRandomButtonContent(
      <img
        src="assets/tennis-ball-svgrepo-com.svg"
        alt="Tennis ball picture"
        id="spinning-ball"
        style={{ height: "20px", marginTop: "2px" }}
      />
    );
    setTimeout(() => {
      setRandomButtonContent("Random");
      randomNumber < 0.5
        ? setSelectedOption("player1")
        : setSelectedOption("player2");
    }, 1000);
  };

  const handleContinue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedOption) {
      setServer(selectedOption);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setFlowStep(3);
      }, 1000);
    } else {
      setAlertMessage(true);
      setTimeout(() => {
        setAlertMessage(false);
      }, 1500);
    }
  };

  return (
    <div>
      <form onSubmit={handleContinue}>
        <h1>Select who starts serving.</h1>
        <div style={{ display: "flex", marginBottom: "0.5rem" }}>
          <div
            className={
              selectedOption === "player1"
                ? "selected-option"
                : "not-selected-option"
            }
            style={{ margin: "0.5rem", width: "7rem" }}
            onClick={() => handleSetsSelector("player1")}
          >
            {player1}{" "}
            <span
              style={{
                position: "absolute",
                marginLeft: "0.3rem",
                color: "lightgreen",
              }}
            >
              {selectedOption === "player1" ? "✔" : null}
            </span>
          </div>
          <div
            className={
              selectedOption === "player2"
                ? "selected-option"
                : "not-selected-option"
            }
            style={{ margin: "0.5rem", width: "7rem" }}
            onClick={() => handleSetsSelector("player2")}
          >
            {player2}{" "}
            <span
              style={{
                position: "absolute",
                marginLeft: "0.3rem",
                color: "lightgreen",
              }}
            >
              {selectedOption === "player2" ? "✔" : null}
            </span>
          </div>
        </div>
        <div
          className="continue-button"
          style={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "1rem",
            height: "1.5rem",
            width: "5rem",
            backgroundColor: "black",
          }}
          onClick={handleRandomChoice}
        >
          {randomButtonContent}
        </div>
        <button className="continue-button">Start match</button>
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
    </div>
  );
};

export default WhoServesFirst;
