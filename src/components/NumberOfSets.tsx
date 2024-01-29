import { useState } from "react";
import ContinueButton from "../commons/ContinueButton";

interface NumberOfSetsProps {
  setFlowStep: React.Dispatch<React.SetStateAction<number>>;
}

const NumberOfSets: React.FC<NumberOfSetsProps> = ({}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelected = (option: string) => {
    setSelectedOption(option);
  };

 // const handleContinue = () => {
   // setFlowStep(2)
  //}

  return (
    <div >
      <h1 style={{}}>Select number of sets.</h1>
      <button className={selectedOption === "1 set" ? "selected-option" : "not-selected-option"} style={{margin:"0.5rem", width:"7rem"}} onClick={() => handleOptionSelected("1 set")}>1 set <span style={{position:"absolute", marginLeft:"0.3rem", color:"lightgreen"}}>{selectedOption === "1 set" ? '✔' : null}</span></button>
      <button className={selectedOption === "3 sets" ? "selected-option" : "not-selected-option"} style={{margin:"0.5rem", width:"7rem"}} onClick={() => handleOptionSelected("3 sets")}>3 sets <span style={{position:"absolute", marginLeft:"0.3rem", color:"lightgreen"}}>{selectedOption === "3 sets" ? '✔' : null}</span></button>
      <button className={selectedOption === "5 sets" ? "selected-option" : "not-selected-option"} style={{margin:"0.5rem", width:"7rem"}} onClick={() => handleOptionSelected("5 sets")}>5 sets <span style={{position:"absolute", marginLeft:"0.3rem", color:"lightgreen"}}>{selectedOption === "5 sets" ? '✔' : null}</span></button>
      <ContinueButton  />
    </div>
  );
};

export default NumberOfSets;
