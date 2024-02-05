interface ScoreProps {
  player1: string;
  player2: string;
  server: string;
  sets: {
    set1: number[];
    set2: number[] | null;
    set3: number[] | null;
    set4: number[] | null;
    set5: number[] | null;
  };
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Score: React.FC<ScoreProps> = ({
  player1,
  player2,
  server,
  sets,
  setLoading,
}) => {
  console.log(server, setLoading);

  return (
    <div
      style={{
        position: "relative",
        bottom: "8.5rem",
        width: "95vw",
        maxWidth: "420px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "0.5rem",
        }}
      >
        <p style={{ width: "53%" }}></p>
        <p style={{ width: "13%" }}>Points</p>
        <p style={{ width: "7%" }}>S1</p>
        <p style={{ width: "7%" }}>S2</p>
        <p style={{ width: "7%" }}>S3</p>
        <p style={{ width: "7%" }}>S4</p>
        <p style={{ width: "7%" }}>S5</p>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", marginBottom: "1rem" }}
      >
        <p className="player-score" style={{ width: "52%" }}>
          {player1}
          {server === "player1" ? (
            <img
              src="assets/tennis-ball-svgrepo-com.svg"
              alt="Tennis ball picture"
              style={{ height: "15px" }}
            />
          ) : null}
        </p>
        <p style={{ width: "13%" }}>0</p>
        <p style={{ width: "7%" }}>{sets["set1"][0]}</p>
        <p style={{ width: "7%" }}>{sets["set2"] ? sets["set2"][0] : "-"}</p>
        <p style={{ width: "7%" }}>{sets["set3"] ? sets["set3"][0] : "-"}</p>
        <p style={{ width: "7%" }}>{sets["set4"] ? sets["set4"][0] : "-"}</p>
        <p style={{ width: "7%" }}>{sets["set5"] ? sets["set5"][0] : "-"}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p className="player-score" style={{ width: "52%" }}>
          {player2}{" "}
          {server === "player2" ? (
            <img
              src="assets/tennis-ball-svgrepo-com.svg"
              alt="Tennis ball picture"
              style={{ height: "12px" }}
            />
          ) : null}
        </p>
        <p style={{ width: "13%" }}>0</p>
        <p style={{ width: "7%" }}>{sets["set1"][1]}</p>
        <p style={{ width: "7%" }}>{sets["set2"] ? sets["set2"][1] : "-"}</p>
        <p style={{ width: "7%" }}>{sets["set3"] ? sets["set3"][1] : "-"}</p>
        <p style={{ width: "7%" }}>{sets["set4"] ? sets["set4"][1] : "-"}</p>
        <p style={{ width: "7%" }}>{sets["set5"] ? sets["set5"][1] : "-"}</p>
      </div>
    </div>
  );
};

export default Score;
