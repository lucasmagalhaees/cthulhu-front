import React from "react";

class ClassComponent extends React.Component<{ name: string }> {
  state = {
    name: "Mundo!!!",
  };

  render() {
    return (
      <div>
        <div>Olá {this.state.name} eu sou um componente baseado em classe</div>
        <div>
          Olá {this.props.name} eu sou uma propriedade passada para o componente
        </div>
        <p>name: {this.state.name}</p>
        <button
          onClick={() => {
            if (this.state.name === "Daniel") this.setState({ name: "Mundo" });
            else this.setState({ name: "Daniel" });
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default ClassComponent;
