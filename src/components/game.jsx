import React from "react";
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";
import future from "../images/holoman future.png";
import { Col, Card, Row, Button } from "antd";
const { Meta } = Card;


const Game = (props) => {
    const items = [
        { name: "rock", src: rock, description: "eats the future" },
        { name: "paper", src: paper, description: "eats the present" },
        { name: "scissors", src: scissors, description: "eats the past" }
    ];

    return items.map((item, i) => (
        <>

        {/* <img alt="" src={future} style={{width:"100px"}} /> */}
            <ul key={i}>
                <Button onClick={(e) => props.setPicks(item.name)} style={{ borderRadius:200, padding: 0, margin: 0, height: "100%", background: "none", borderColor: "transparent" }} >
                    {/* <img alt=" " src={item.src} style={{ width: 150, height: 170 }} /> */}
                    {/* <button onClick={(e) => props.setPicks(item.name)}>
      </button> */}
                    {/* <Meta
      title={item.name}
      description={item.description}
    /> */}
                    <img alt=" " src={item.src} style={{ width: "100px", padding: "0" }} />
                </Button>
            </ul>
        </>
    ));
};

export default Game;
