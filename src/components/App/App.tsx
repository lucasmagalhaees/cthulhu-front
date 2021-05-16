import "bootstrap/dist/css/bootstrap.min.css";
import Container from "../../shared/Container";
import AppButton from "../AppButton";
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
      <Container>
        <AppButton></AppButton>
      </Container>
    </div>
  );
}

export default App;
