import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const GamesContainer = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`flex align-center gap-6 justify-center flex-wrap md:justify-start ${className} `}
    >
      {children}
    </div>
  );
};

export default GamesContainer;
