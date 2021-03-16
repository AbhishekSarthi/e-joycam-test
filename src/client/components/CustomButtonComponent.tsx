import React from "react";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  buttonname: string;
  height: string;
  onClick: () => void;
  radius: string
  width: string;
}

const Button: React.FC<Props> = ({ 
  border,
  color,
  children,
  buttonname,
  height,
  onClick, 
  radius,
  width
}) => { 
  return (
    <>
      <button 
        className={buttonname}
        onClick={onClick}
      > 
      {children}
      </button>
      <style >{`
        .${buttonname} {
          background-color: ${color};
          border: ${border};
          border-radius: ${radius};
          height: ${height};
          width: ${width}
        }
      `}</style>
    </>
  );
}

export default Button;