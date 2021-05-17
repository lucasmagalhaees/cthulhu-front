import "bootstrap/dist/css/bootstrap.min.css";
import Container from "../../shared/Container";
import AppButton from "../../shared/AppButton";
import Header from "../Header";
import "./App.css";
import Input from "../../shared/Input";

function App() {
  return (
    <div className="App">
      <Header title="Algastock"></Header>
      <Container>
        <AppButton content="Button"></AppButton>
      </Container>
      <Input fieldName="Nome" placeholder="Digite o nome"></Input>
    </div>
  );
}

export default App;
