import { useState } from "react";
import ContinueButton from "../commons/ContinueButton";

interface NumberOfSetsProps {
  setFlowStep: React.Dispatch<React.SetStateAction<number>>;
  setNumberOfSets: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const NumberOfSets: React.FC<NumberOfSetsProps> = ({setFlowStep, setNumberOfSets, setLoading}) => {
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const handleSetsSelector = (option: number) => {
    setSelectedOption(option)
  };

 const handleContinue = () => {
   setNumberOfSets(selectedOption);
   setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFlowStep(2);
    }, 1000);
  }
  
  return (
    <div >
      <form onSubmit={handleContinue}>
        <h1>Select number of sets.</h1>
        <div style={{display:"flex"}}>
          <div className={selectedOption === 1 ? "selected-option" : "not-selected-option"} style={{margin:"0.5rem", width:"4rem"}} onClick={() => handleSetsSelector(1)}>1 set <span style={{position:"absolute", marginLeft:"0.3rem", color:"lightgreen"}}>{selectedOption === 1 ? '✔' : null}</span></div>
          <div className={selectedOption === 3 ? "selected-option" : "not-selected-option"} style={{margin:"0.5rem", width:"4rem"}} onClick={() => handleSetsSelector(3)}>3 sets <span style={{position:"absolute", marginLeft:"0.3rem", color:"lightgreen"}}>{selectedOption === 3 ? '✔' : null}</span></div>
          <div className={selectedOption === 5 ? "selected-option" : "not-selected-option"} style={{margin:"0.5rem", width:"4rem"}} onClick={() => handleSetsSelector(5)}>5 sets <span style={{position:"absolute", marginLeft:"0.3rem", color:"lightgreen"}}>{selectedOption === 5 ? '✔' : null}</span></div>
        </div>
        <ContinueButton />
      </form>
    </div>
  );
};

export default NumberOfSets;
