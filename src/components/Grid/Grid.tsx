import React, { ReactElement } from "react";
import { RobotProps } from "../Robot/Robot"; // Ensure you import the RobotProps type
import "./grid.css";

type GridProps = {
  children: ReactElement<RobotProps> | ReactElement<RobotProps>[];
};

const Grid: React.FC<GridProps> = ({ children }) => {
  const gridSize = 5;
  const cells = Array(gridSize * gridSize).fill(null);

  return (
    <div className="grid">
      {cells.map((_, index) => (
        <div key={index} className="grid-cell">
          {React.Children.map(children, (child) => {
            // console.log(children);
            if (
              React.isValidElement<RobotProps>(child) &&
              child.props.position === index
            ) {
              return React.cloneElement(child, { position: index });
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;
