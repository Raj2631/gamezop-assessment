import React from "react";

const GamesContainer = ({ children, className = "" }: any) => {
  return (
    <div
      className={`flex align-center gap-6 justify-center flex-wrap md:justify-start ${className} `}
    >
      {children}
    </div>
  );
};

export default GamesContainer;
