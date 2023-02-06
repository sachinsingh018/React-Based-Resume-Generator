import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../Assets/home-main.svg";
import Particle from "./Particle";
import axios from "axios"
function GenrateInfo() {
   getDataOnTopic("What is web")
  return (
    <Container fluid className="home-section" style={{ height: "100vh" }}>
      <Row>
        <Col xs>Our Playground</Col>
        <Col xs={{ order: 12 }}>Fun </Col>
        <Col xs={{ order: 1 }}></Col>
      </Row>
    </Container>
  );
}

function getDataOnTopic(topic) {
  let secret = "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";
  
  var data = JSON.stringify({
    model: "text-davinci-003",
    prompt:
      topic,
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ["\n"],
  });

  var config = {
    method: "post",
    url: "https://api.openai.com/v1/completions",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer "+secret,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default GenrateInfo;
