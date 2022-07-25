import React from "react";
import Button from "./Button";

const Card = ({ info, color, getRandom }) => {
      const objectStyle = {
            background: "#D4E0ED",
            color: color,
      };
      return (
            <div className="content_card" style={objectStyle}>
                  <i className="bx bxs-quote-left"></i>
                  <h2>{info.quote}</h2>
                  <p>" {info.author} "</p>
                  <Button color={color} getRandom={getRandom} />
            </div>
      );
};

export default Card;
