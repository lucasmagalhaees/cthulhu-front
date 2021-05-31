import * as React from "react";
import "./Button.css";

export interface ButtonProps {
  content?: string;
  color: string;
  outline?: boolean;
  onClick?: () => void;
  appendIcon?: JSX.Element;
  submit?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className={`customButton btn btn${props.outline ? "-outline" : ""}${
          "-" + props.color
        }`}
        type={props.submit ? "submit" : "button"}
      >
        <span className="innerButton">
          <h6 className="textButton">{props.content?.toUpperCase() || ""}</h6>

          {props.appendIcon && (
            <div className={props.content ? "ml-2" : ""}>
              {props.appendIcon}
            </div>
          )}
        </span>
      </button>
    </div>
  );
};

export default Button;
