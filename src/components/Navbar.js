
  import React, { useState } from "react";
  import Navbar from "react-bootstrap/Navbar";
  import Nav from "react-bootstrap/Nav";
  import Container from "react-bootstrap/Container";
  import logo from "../Assets/knight.svg";
  import Button from "react-bootstrap/Button";
  import { Link } from "react-router-dom";
  import { 
    
    AiOutlineUpSquare,AiOutlineHome, AiOutlineBook, AiOutlineSave
  } from "react-icons/ai";

  import { CgFileDocument } from "react-icons/cg";


  function NavBar() {
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
    apiKey: "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",
  });
    const openai = new OpenAIApi(configuration);

    const generator = async () => {
    const res  = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "My experience is \"--Engineered autonomous camera-based attendance system that could scan the faces of multiple students and could be a successor to all the traditional biometric devices that are being used to date. -- Worked upon Caffe-based Deep Learning face detector to localize faces in the snap and Torch-based model is used for extracting facial 128-d embedding of the detected faces in a snap, via DL feature extraction. ---- Achieved confidence greater than 85% by training the \"classical\" machine learning model on the top of 128-d embeddings for identifying a given person in the snap. -- Skills Developed- AI, Image Processing, OpenCV, Deep Learning, MySQl.\" For this can you create solid resume points which display impact?",
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
    console.log(res);
  };
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <div><font color="red"><b>Trojan Resume</b></font></div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
          </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={generator}
                >
                  <AiOutlineUpSquare style={{ marginBottom: "2px" }} /> <font color="black"><b>Tailor</b></font>
                </Nav.Link>
              </Nav.Item>
             
              <Nav.Item>
                <Nav.Link as={Link} to="/review" onClick={() => updateExpanded(false)}>
                  <AiOutlineBook style={{ marginBottom: "2px" }} /> <font color="black"><b>Review</b></font>
                </Nav.Link>
              </Nav.Item>

             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default NavBar;
