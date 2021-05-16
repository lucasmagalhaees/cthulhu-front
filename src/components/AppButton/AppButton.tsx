import React from "react";

export interface ButtonProps {
  content?: string;
  onClick?: () => void;
  appendIcon?: JSX.Element;
}

const AppButton: React.FC<ButtonProps> = (props) => {
  return (
    <div>
      <button className="btn btn-outline-info" type="button">
        Clique aqui
      </button>
    </div>
  );
};

export default AppButton;
