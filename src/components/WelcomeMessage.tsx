interface WelcomeMessageProps {
  setWelcome: (value: boolean) => void;
  setLoading: (value: boolean) => void;
}
const WelcomeMessage: React.FC<WelcomeMessageProps> = ({setWelcome, setLoading}) => {
  const handleWelcomeMessage = () => {
    setWelcome(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{textAlign:"center", marginLeft:"2%", marginRight:"2%", marginTop:"auto", marginBottom:"auto"}}>
      <div style={{ fontSize: "x-large", fontWeight:"800", marginBottom:"1rem"}}>Welcome to TennisScorer!</div>
      <div style={{ fontSize: "x-large" }}>
        Effortless scoring for your tennis matches. Enjoy the game, we'll take
        care of the scores!
      </div>
      <button className="continue-button" style={{marginTop:"1rem", marginBottom:"4rem"}} onClick={handleWelcomeMessage}>Get Started</button>
    </div>
  );
};

export default WelcomeMessage;
