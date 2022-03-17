import React from "react";
import "./assignment3.css";
import Bottles from "./Bottles";

const Assignment3 = () => {
  const myBottles = [
    {
      name: "A",
      isLidFill: 0,
      isTopFill: 1,
      isMiddleFill: 2,
      isBottomFill: 3,
    },
    {
      name: "B",
      isLidFill: 0,
      isTopFill: 0,
      isMiddleFill: 0,
      isBottomFill: 2,
    },
    {
      name: "C",
      isLidFill: 0,
      isTopFill: 1,
      isMiddleFill: 3,
      isBottomFill: 1,
    },
    {
      name: "D",
      isLidFill: 0,
      isTopFill: 0,
      isMiddleFill: 3,
      isBottomFill: 2,
    },
    {
      name: "E",
      isLidFill: 0,
      isTopFill: 0,
      isMiddleFill: 0,
      isBottomFill: 0,
    },
  ];

  return (
    <div>
      <h3>Recreated Bottles</h3>
      <div className="container">
        <div className="container_4">
          {myBottles.map((val, key) => {
            return (
              <Bottles
                key={val.id}
                name={val.name}
                isLidFill={val.isLidFill}
                isTopFill={val.isTopFill}
                isMiddleFill={val.isMiddleFill}
                isBottomFill={val.isBottomFill}
                type={"New bottle"}
                myKey={key}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Assignment3;
