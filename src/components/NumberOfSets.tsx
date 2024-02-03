import { useState } from "react";
import ContinueButton from "../commons/ContinueButton";

interface NumberOfSetsProps {
  setFlowStep: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
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

const NumberOfSets: React.FC<NumberOfSetsProps> = ({
  setFlowStep,
  setSets,
  setLoading,
}) => {
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [alertMessage, setAlertMessage] = useState<boolean>(false);

  const handleSetsSelector = (option: number) => {
    setSelectedOption(option);
  };

  const handleContinue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedOption) {
      switch (selectedOption) {
        case 1:
          break;
        case 3:
          setSets({
            set1: [0, 0],
            set2: [0, 0],
            set3: [0, 0],
            set4: null,
            set5: null
          })
          break;
        case 5:
          setSets({
            set1: [0, 0],
            set2: [0, 0],
            set3: [0, 0],
            set4: [0, 0],
            set5: [0, 0]
          })
          break;
      }
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setFlowStep(2);
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
        <h1>Select number of sets.</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className={
              selectedOption === 1 ? "selected-option" : "not-selected-option"
            }
            style={{ margin: "0.5rem", width: "4rem" }}
            onClick={() => handleSetsSelector(1)}
          >
            1 set{" "}
            <span
              style={{
                position: "absolute",
                marginLeft: "0.3rem",
                color: "lightgreen",
              }}
            >
              {selectedOption === 1 ? "✔" : null}
            </span>
          </div>
          <div
            className={
              selectedOption === 3 ? "selected-option" : "not-selected-option"
            }
            style={{ margin: "0.5rem", width: "4rem" }}
            onClick={() => handleSetsSelector(3)}
          >
            3 sets{" "}
            <span
              style={{
                position: "absolute",
                marginLeft: "0.3rem",
                color: "lightgreen",
              }}
            >
              {selectedOption === 3 ? "✔" : null}
            </span>
          </div>
          <div
            className={
              selectedOption === 5 ? "selected-option" : "not-selected-option"
            }
            style={{ margin: "0.5rem", width: "4rem" }}
            onClick={() => handleSetsSelector(5)}
          >
            5 sets{" "}
            <span
              style={{
                position: "absolute",
                marginLeft: "0.3rem",
                color: "lightgreen",
              }}
            >
              {selectedOption === 5 ? "✔" : null}
            </span>
          </div>
        </div>
        <ContinueButton />
        {alertMessage && (
          <p
            style={{
              position: "absolute",
              marginTop: "0.6rem",
              marginLeft: "2.5rem",
            }}
          >
            Please select an option to continue.
          </p>
        )}
      </form>
    </div>
  );
};

export default NumberOfSets;
