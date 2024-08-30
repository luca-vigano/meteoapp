import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchCard = (props) => {
  const [meteo, setMeteo] = useState({});
  const [MyIcon, setMyIcon] = useState();
  const [temperature, setTemperature] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMeteo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMeteo = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${props.search}&appid=711e8d9b8520830c3819d3f0de2b91a6&units=metric&lang=it`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("La chiamata non è andata a buon fine");
        }
      })
      .then((cityMeteo) => {
        setMeteo(cityMeteo);
        setTemperature(cityMeteo.main.temp);
        setMyIcon(
          "http://openweathermap.org/img/w/" +
            cityMeteo.weather[0].icon +
            ".png"
        );

        console.log(cityMeteo);
      })
      .catch((err) => {
        console.log("ERRORE RECUPERO DATI", err);
      });
  };

  return (
    <>
      <Col xs={12} md={6} lg={4} className="mb-5 g-2">
        <Card
          onClick={() => {
            navigate(/details/ + meteo.name);
          }}
        >
          <Card.Body className="d-flex justify-content-around">
            <Card.Img className="w-25" variant="top" src={MyIcon} />
            <Card.Title>{meteo.name}</Card.Title>
            <Card.Text>{temperature}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default SearchCard;
