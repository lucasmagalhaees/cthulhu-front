import * as React from "react";
import ReactTooltip from "react-tooltip";
import "./TooltipButton.css";

export interface TooltipButtonProps {
  content?: string;
  style: string;
  outline?: boolean;
  onClick?: () => void;
  appendIcon?: JSX.Element;
  submit?: boolean;
  dataFor?: string;
  tooltip?: string;
}

const TooltipButton: React.FC<TooltipButtonProps> = (props) => {
  return (
    <div>
      <button
        data-tip
        data-for={props.dataFor}
        onClick={props.onClick}
        className={`customButton btn btn${props.outline ? "-outline" : ""}${
          "-" + props.style
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
      <ReactTooltip id={props.dataFor} place="top" effect="solid">
        {props.tooltip}
      </ReactTooltip>
    </div>
  );
};

export default TooltipButton;
