import React from 'react';
import './Container.css';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Container: React.FC<Props> = (props) => {
  return <div className='AppContainer'>{props.children}</div>;
};

export default Container;
