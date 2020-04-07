import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const { currentState } = props;
  return (
    <>
      <p>{currentState}</p>
    </>
  );
};

export default Card;
