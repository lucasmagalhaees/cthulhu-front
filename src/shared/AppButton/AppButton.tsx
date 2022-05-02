import React from "react";

export interface ButtonProps {
  content?: string;
}

const AppButton: React.FC<ButtonProps> = (props) => {
  return (
    <div>
      <button className="btn btn-outline-info" type="button">
        {props.content || "Clique aqui"}
      </button>
    </div>
  );
};

export default AppButton;
