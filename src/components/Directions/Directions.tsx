import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

type DirectionProps = {
  moveRight: () => void;
  moveLeft: () => void;
  moveUp: () => void;
  moveDown: () => void;
};

const Directions: React.FC<DirectionProps> = ({
  moveRight,
  moveLeft,
  moveUp,
  moveDown,
}) => {
  return (
    <div className="control-panel">
      <button onClick={moveLeft}>
        <FaArrowLeft />
      </button>
      <button onClick={moveRight}>
        <FaArrowRight />
      </button>
      <button onClick={moveUp}>
        <FaArrowUp />
      </button>
      <button onClick={moveDown}>
        <FaArrowDown />
      </button>
    </div>
  );
};

export default Directions;
