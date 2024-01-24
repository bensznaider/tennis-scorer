import ContinueButton from "../commons/ContinueButton";

interface PlayersNamesProps {
  player1: string;
  player2: string;
  setPlayer1: React.Dispatch<React.SetStateAction<string>>;
  setPlayer2: React.Dispatch<React.SetStateAction<string>>;
}

const PlayersNamesForm: React.FC<PlayersNamesProps> = ({player1, player2, setPlayer1, setPlayer2}) => {

  const handleOnChangePlayer1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPlayer1(event.target.value);
  };

  const handleOnChangePlayer2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPlayer2(event.target.value);
  };

  return (
    <div>
      <h2>Enter players names.</h2>
      <form className="flex-column" style={{marginTop:"0.5rem", marginBottom:"0.5rem"}}>
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
