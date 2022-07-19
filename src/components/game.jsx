import React from "react";
import paper from "../images/holoman past.png";
import rock from "../images/holoman present.png";
import scissors from "../images/holoman future.png";
import { Col, Card, Row, Button } from "antd";
const { Meta } = Card;


const Game = (props) => {
    const items = [
        { name: "past", src: paper, description: "eats the present" },
        { name: "present", src: rock, description: "eats the future" },
        { name: "future", src: scissors, description: "eats the past" }
    ];

    return items.map((item, i) => (
        <>
            <ul key={i}>
                <Button onClick={(e) => props.setPicks(item.name)} style={{ padding: 0, margin: 0, height: "100%" }} >
                    {/* <img alt=" " src={item.src} style={{ width: 150, height: 170 }} /> */}
                    {/* <button onClick={(e) => props.setPicks(item.name)}>
      </button> */}
                    {/* <Meta
      title={item.name}
      description={item.description}
    /> */}
                    <img alt=" " src={item.src} style={{ width: "25vw", padding: "0" }} />
                </Button>
            </ul>
        </>
    ));
};

export default Game;
