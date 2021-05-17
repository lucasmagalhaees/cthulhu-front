import "bootstrap/dist/css/bootstrap.min.css";
import Container from "../../shared/Container";
import AppButton from "../../shared/AppButton";
import Header from "../Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="Algastock"></Header>
      <Container>
        <AppButton content="Button"></AppButton>
      </Container>
    </div>
  );
}

export default App;
