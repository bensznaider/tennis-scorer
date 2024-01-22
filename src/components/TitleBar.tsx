const TitleBar: React.FC<any> = () => {
  return (
    <h1 className="title-bar">
      TENNIS SC
      <img
        src="assets/tennis-ball-svgrepo-com.svg"
        alt="Tennis ball picture"
        style={{ width: "6%", marginLeft: "1.5%" }}
      />
      RER
    </h1>
  );
};

export default TitleBar;
