import React, { useState } from "react";
import "./TestComponent.css";

const TestComponent = (props: { name: string }) => {
  let [age, setAge] = useState(24);

  const updateAge = () => {
    setAge(age + 1);
  };

  return (
    <div className="TestComponent">
      Test Component!!!! Testando 123! Is it working? {props.name}
      <br />
      Minha idade é {age}
      <br />
      <button onClick={updateAge}>+</button>
    </div>
  );
};

export default TestComponent;
