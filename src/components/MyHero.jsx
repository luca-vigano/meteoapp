import SearchBar from "./SearchBar";
import SearchCard from "./SearchCard";
import React from "react";
import "../App.css";
import { Container, Row } from "react-bootstrap";

const MyHero = () => {
  return (
    <Container
      fluid
      className="h-100 p-0 bg-primary d-flex text-center justify-content-around"
    >
      <Row className="justify-content-around mb-4">
        <SearchBar />
        <SearchCard search="milano" />
        <SearchCard search="roma" />
        <SearchCard search="napoli" />
        <SearchCard search="torino" />
        <SearchCard search="venezia" />
        <SearchCard search="palermo" />
      </Row>
    </Container>
  );
};

export default MyHero;
