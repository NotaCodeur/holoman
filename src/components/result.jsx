import React, { useEffect, useState } from "react";
import prize from "../images/hologif.gif"
import secret from "../images/secret.png"
import { Divider, Radio, Typography } from 'antd';
const { Paragraph } = Typography;

const Prize = () => {



        return (
            <>
        <p>congrats ! </p>
        <p>you have won a free mint ! </p>
        <img width="30%" src={prize} alt="">
        </img>
        <p>you are now a master of chance </p>
        <p>to collect your reward "hologif" </p>
        <p>send 6.5 ADA to: </p>
        <img width="20%" src={secret} />
        <Paragraph copyable>addr1vxdsny0qje9lw5t2g83wmxc9qrn6njuq9m3e39em5qm80qsmyhppn </Paragraph>
        <p>or use this link https://pay.nmkr.io/?p=636e2269959746d69561982ede6e60f9&c=1</p>
            </>
        )

    
}
const Result = (props) => {
  const { myPick, housePick } = props;
  const [gameScore, setGameScore] = useState(0);

  useEffect(() => {
    const chooseWinner = () => {
      if (myPick == "rock" && housePick === "scissors") {
        setGameScore((gameScore) => gameScore + 1);
      } else if (myPick === "rock" && housePick === "paper") {
        setGameScore((gameScore) => gameScore - 1);
      } else if (myPick === "scissors" && housePick === "paper") {
        setGameScore((gameScore) => gameScore + 1);
      } else if (myPick === "scissors" && housePick === "rock") {
        setGameScore((gameScore) => gameScore - 1);
      } else if (myPick === "paper" && housePick === "rock") {
        setGameScore((gameScore) => gameScore + 1);
      } else if (myPick === "paper" && housePick === "scissors") {
        setGameScore((gameScore) => gameScore - 1);
      } else {
        setGameScore((gameScore) => gameScore + 0);
      }
    };
    chooseWinner();
  }, [myPick, housePick]);

  return (
    <>
    <div>
      <h2>You: {myPick} </h2>
      <h2>holoman: {housePick}</h2>
      <h2>Score: {gameScore} </h2>
    </div>
    {gameScore >= 10 && <Prize />}
    
    </>
  );
};

export default Result;
