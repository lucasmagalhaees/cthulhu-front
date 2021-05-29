import * as React from "react";
import "./Button.css";

export interface ButtonProps {
  content: string;
  style: string;
  outline?: boolean;
  onClick?: () => void;
  appendIcon?: JSX.Element;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className={`customButton btn btn${props.outline ? "-outline" : ""}${
          "-" + props.style
        }`}
        type="button"
      >
        <span className="innerButton">
          <h6 className="textButton">{props.content?.toUpperCase()}</h6>

          {props.appendIcon && <div className="ml-2"> {props.appendIcon}</div>}
        </span>
      </button>
    </div>
  );
};

export default Button;
