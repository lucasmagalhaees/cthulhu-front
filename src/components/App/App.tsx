import Button from "../Button";
import Header from "../Header";
import "./App.css";

const TestComponent = () => {
  return (
    <img
      src="https://media.istockphoto.com/vectors/magnifying-glass-icon-vector-id986618996"
      alt="search icon"
      width="20px"
      height="20px"
    />
  );
};

function App() {
  return (
    <div className="App">
      <Header title="Algastock"></Header>
      <div className="Container">
        <Button
          onClick={() => {
            window.alert("event captured");
          }}
          appendIcon={<TestComponent />}
        ></Button>
      </div>
    </div>
  );
}

export default App;
