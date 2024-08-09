import React from "react";
import "./Robot.css";

export type RobotProps = {
  position: number;
};

const Robot: React.FC<RobotProps> = ({ position }) => {
  return (
    <div className={`robot`} style={{ gridArea: `cell-${position}` }}>
      🤖
    </div>
  );
};

export default Robot;
