import { ReactComponent } from "*.svg";
import * as React from "react";
import { readConfigFile } from "typescript";
import "./Button.css";

export interface ButtonProps {
  content?: string;
  onClick?: () => void;
  appendIcon: JSX.Element;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div>
      <button onClick={props.onClick} className="AppButton">
        {props.children || "Nameless Button"}
        {props.appendIcon}
      </button>
    </div>
  );
};

export default Button;
