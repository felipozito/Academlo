import React from "react";

const Button = ({ getRandom, color }) => {
      const objecStyle = {
            background: color,
      };
      return (
            <div className="btn">
                  <button style={objecStyle} onClick={getRandom}>
                        &gt;
                  </button>
            </div>
      );
};

export default Button;
