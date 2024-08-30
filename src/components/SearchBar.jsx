import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap-icons/font/bootstrap-icons.css";

const SearchBar = () => {
  return (
    <>
      <Col xs={12} className="my-4">
        <InputGroup size="lg">
          <InputGroup.Text className="bg-info" id="inputGroup-sizing-lg">
            <i className="bi bi-search"></i>
          </InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Inserisci la tua città"
          />
        </InputGroup>
      </Col>
    </>
  );
};

export default SearchBar;
