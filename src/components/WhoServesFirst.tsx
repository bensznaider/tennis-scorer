import { useState } from "react";
import ContinueButton from "../commons/ContinueButton";

interface WhoServesFirstProps {
  player1: string;
  player2: string;
  setServer: React.Dispatch<React.SetStateAction<string>>;
  setFlowStep: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const WhoServesFirst: React.FC<WhoServesFirstProps> = ({player1, player2, setServer, setFlowStep, setLoading}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSetsSelector = (option: string) => {
    setSelectedOption(option)
  };

 const handleContinue = () => {
  setServer(selectedOption);
  setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFlowStep(3);
    }, 1000);
  }
  
  return (
    <div >
      <form onSubmit={handleContinue}>
        <h1>Select who starts serving.</h1>
        <div style={{display:"flex", marginBottom:"0.5rem"}}>
        <div className={selectedOption === "player1" ? "selected-option" : "not-selected-option"} style={{margin:"0.5rem", width:"7rem"}} onClick={() => handleSetsSelector("player1")}>{player1} <span style={{position:"absolute", marginLeft:"0.3rem", color:"lightgreen"}}>{selectedOption === "player1" ? '✔' : null}</span></div>
        <div className={selectedOption === "player2" ? "selected-option" : "not-selected-option"} style={{margin:"0.5rem", width:"7rem"}} onClick={() => handleSetsSelector("player2")}>{player2} <span style={{position:"absolute", marginLeft:"0.3rem", color:"lightgreen"}}>{selectedOption === "player2" ? '✔' : null}</span></div>
        </div>
        <div className="continue-button" style={{marginLeft:"auto", marginRight:"auto",marginBottom:"1rem", width:"5rem", backgroundColor:"black"}}>Random</div>
        <ContinueButton />
      </form>
    </div>
  );
};

export default WhoServesFirst;
