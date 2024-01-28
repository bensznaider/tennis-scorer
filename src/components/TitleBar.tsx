interface TitleBarProps {
  refreshQuestion: boolean;
  setRefreshQuestion: React.Dispatch<React.SetStateAction<boolean>>;
}

const TitleBar: React.FC<TitleBarProps> = ({refreshQuestion, setRefreshQuestion}) => {
const handleTitleClick = () => {
  setRefreshQuestion(true)
}

  return (
    <h1 className="title-bar" style={{cursor:"pointer"}} onClick={handleTitleClick}>
      TENNIS SC
      <img
        src={`${refreshQuestion ? "assets/tennis-ball-grey.svg" : "assets/tennis-ball-svgrepo-com.svg"}`}
        alt="Tennis ball picture"
        style={{ width: "6%", marginLeft: "1.5%" }}
      />
      RER
    </h1>
  );
};

export default TitleBar;
