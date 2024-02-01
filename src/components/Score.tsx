//import { useState } from "react";

interface ScoreProps {
  player1: string;
  player2: string;
  server: string;
  numberOfSets: number;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Score: React.FC<ScoreProps> = ({
  player1,
  player2,
  server,
  numberOfSets,
  setLoading,
}) => {
  console.log(server, numberOfSets, setLoading);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ paddingTop:"1rem" }}>
        <p className="player-score">
          {player1}
          {server === "player1" ? (
            <img
              src="assets/tennis-ball-svgrepo-com.svg"
              alt="Tennis ball picture"
              style={{ height: "15px" }}
            />
          ) : null}
        </p>
        <p className="player-score">
          {player2}{" "}
          {server === "player2" ? (
            <img
              src="assets/tennis-ball-svgrepo-com.svg"
              alt="Tennis ball picture"
              style={{ height: "12px" }}
            />
          ) : null}
        </p>
      </div>
      <div style={{ display: "flex", fontSize: "small" }}>
        <div style={{ display: "flex",flexDirection:"column", alignItems:"center"}}>
          Game points
          <div
            style={{
              boxShadow: "0 2px 4px black",
              borderRadius: "15px",
              height: "5.6rem",
              width: "2rem",
            }}
          ></div>
        </div>
        <div>Set 1<div
            style={{
              boxShadow: "0 2px 4px black",
              borderRadius: "15px",
              height: "5.6rem",
              width: "2rem",
            }}
          ></div></div>
        <div>Set 2<div
            style={{
              boxShadow: "0 2px 4px black",
              borderRadius: "15px",
              height: "5.6rem",
              width: "2rem",
            }}
          ></div></div>
        <div>Set 3<div
            style={{
              boxShadow: "0 2px 4px black",
              borderRadius: "15px",
              height: "5.6rem",
              width: "2rem",
            }}
          ></div></div>
        <div>Set 4<div
            style={{
              boxShadow: "0 2px 4px black",
              borderRadius: "15px",
              height: "5.6rem",
              width: "2rem",
            }}
          ></div></div>
        <div>Set 5<div
            style={{
              boxShadow: "0 2px 4px black",
              borderRadius: "15px",
              height: "5.6rem",
              width: "2rem",
            }}
          ></div></div>
      </div>
    </div>
  );
};

export default Score;
