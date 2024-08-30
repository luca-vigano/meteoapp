import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const CityDettails = () => {
  const urlParameter = useParams();
  const [meteo, setMeteo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMeteo();
  }, [urlParameter]);

  const fetchMeteo = () => {
    console.log(urlParameter.cityId);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${urlParameter.cityId}&appid=711e8d9b8520830c3819d3f0de2b91a6&units=metric&lang=it`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("La chiamata non è andata a buon fine");
        }
      })
      .then((cityMeteo) => {
        console.log(cityMeteo);
        setMeteo(cityMeteo);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("ERRORE RECUPERO DATI", err);
      });
  };

  return (
    <>
      {isLoading ? (
        "Wait.."
      ) : (
        <Container
          fluid
          className="bg-primary m-0 d-flex justify-content-around"
        >
          <Row>
            <Col>
              <ListGroup>
                <ListGroup.Item>{meteo.name}</ListGroup.Item>
                <ListGroup.Item>{meteo.weather[0].description}</ListGroup.Item>
                <ListGroup.Item>TEMPERATURA-{meteo.main.temp}</ListGroup.Item>
                <ListGroup.Item>MIN-{meteo.main.temp_min}</ListGroup.Item>
                <ListGroup.Item>MAX-{meteo.main.temp_max}</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default CityDettails;
