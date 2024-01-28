import ContinueButton from "../commons/ContinueButton";

interface PlayersNamesProps {
  player1: string;
  player2: string;
  setPlayer1: React.Dispatch<React.SetStateAction<string>>;
  setPlayer2: React.Dispatch<React.SetStateAction<string>>;
  setFlowStep: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlayersNamesForm: React.FC<PlayersNamesProps> = ({player1, player2, setPlayer1, setPlayer2, setFlowStep, setLoading}) => {

  const handleOnChangePlayer1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPlayer1(event.target.value);
  };

  const handleOnChangePlayer2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPlayer2(event.target.value);
  };

  const handleSubmitPlayersNames = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFlowStep(1);
    }, 1000);
  }

  return (
    <div>
      <h1>Enter players names.</h1>
      <form className="flex-column" style={{marginTop:"0.5rem", marginBottom:"0.5rem"}} onSubmit={handleSubmitPlayersNames}>
        Player 1
        <input
        style={{marginBottom:"0.5rem", marginTop:"0.5rem"}}
          type="text"
          name="Player 1 full name"
          value={player1}
          onChange={handleOnChangePlayer1}
          required={true}
          placeholder={"Player 1 full name."}
        />
        Player 2
        <input
         style={{marginTop:"0.5rem", marginBottom:"1.5rem"}}
          type="text"
          name="Player 2 full name"
          value={player2}
          onChange={handleOnChangePlayer2}
          required={true}
          placeholder={"Player 2 full name."}
        />
        <ContinueButton />
      </form>
    </div>
  );
};

export default PlayersNamesForm;
