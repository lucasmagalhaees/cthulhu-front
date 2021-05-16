import React from "react";
import "./Container.css";

// import { Container } from './styles';

const Container: React.FC = (props) => {
  return <div className="AppContainer">{props.children}</div>;
};

export default Container;
