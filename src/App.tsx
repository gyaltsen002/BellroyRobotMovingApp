import React, { useState } from "react";
import { Grid, Robot, Directions } from "./components/index";
import "./App.css";

const App: React.FC = () => {
  const [position, setPosition] = useState(0);

  const moveRight = () => {
    if (position % 5 === 4) {
      // If in the last column, move to the first column of the next row
      if (position === 24) {
        setPosition(0); // Wrap around from the last cell to the first
      } else {
        setPosition(position + 1 - 5); // Move to the first column of the next row
      }
    } else {
      setPosition(position + 1);
    }
  };

  const moveLeft = () => {
    if (position % 5 === 0) {
      // If in the first column, move to the last column of the previous row
      if (position === 0) {
        setPosition(24); // Wrap around from the first cell to the last
      } else {
        setPosition(position - 1 + 5); // Move to the last column of the previous row
      }
    } else {
      setPosition(position - 1);
    }
  };

  const moveUp = () => {
    if (position < 5) {
      // If in the top row, wrap to the bottom row
      setPosition(position + 20);
    } else {
      setPosition(position - 5);
    }
  };

  const moveDown = () => {
    if (position >= 20) {
      // If in the bottom row, wrap to the top row
      setPosition(position - 20);
    } else {
      setPosition(position + 5);
    }
  };

  return (
    <div className="app">
      <Grid>
        <Robot position={position} />
      </Grid>
      <Directions
        moveRight={moveRight}
        moveLeft={moveLeft}
        moveUp={moveUp}
        moveDown={moveDown}
      />
    </div>
  );
};

export default App;
