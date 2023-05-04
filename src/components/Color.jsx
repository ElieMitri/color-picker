import React from "react";

const Color = ({ color }) => {
  return (
    <div>
      <div
        className="box"
        style={{ backgroundColor: `#${(color?.a, color?.b, color?.c)}` }}
      ></div>
    </div>
  );
};

export default Color;
