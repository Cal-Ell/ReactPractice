import React from "react";
import styles from "./Bottle.module.css";

const Bottles = ({
  name,
  isLidFill,
  isTopFill,
  isMiddleFill,
  isBottomFill,
}) => {

  const colorDeclared = (colors) =>{
    if (colors === 0){
      return colors = "";
    } else if (colors === 1){
      return colors = "yellow";
    } else if (colors === 2){
      return colors = "red";
    } else if (colors === 3){
      return colors = "green";
    }
  }
  
  

  return (
    <div>
      <div className={styles.bottle}>
        <div
          className={styles.bottleLid}
          style={{ background: colorDeclared(isLidFill) }}
        ></div>
        <div
          className={styles.bottleTop}
          style={{ background: colorDeclared(isTopFill) }}
        ></div>
        <div
          className={styles.bottleMiddle}
          style={{ background: colorDeclared(isMiddleFill) }}
        ></div>
        <div
          className={styles.bottleBottom}
          style={{ background: colorDeclared(isBottomFill) }}
        ></div>
      </div>
      <p>{name}</p>
    </div>
  );
}

export default Bottles;