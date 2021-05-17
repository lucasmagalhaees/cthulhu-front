import { InputGroup, Button, FormControl } from "react-bootstrap";
import "./Input.css";
export interface InputProps {
  fieldName: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="AppInput">
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant="info disabled">{props.fieldName}</Button>
        </InputGroup.Prepend>
        <FormControl
          placeholder={props.placeholder}
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  );
};

export default Input;
