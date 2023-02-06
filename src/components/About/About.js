                      import { Container, Row, Col } from "react-bootstrap";
                      import Particle from "../Particle";
                      import laptopImg from "../../Assets/about.png";
                      import Button from 'react-bootstrap/Button';
                      import Form from 'react-bootstrap/Form';
                      import React, { useState } from 'react';
                      import axios from 'axios';
                      import { CircleLoader } from "react-spinners";

                      function About() {
                        const [inputValue, setInputValue] = useState('');
                        const [desc, setDesc] = useState('');
                        const [outputValue, setOutputValue] = useState('');
                        const [buttonText, setButtonText] = useState("Revamp");
                        const [loading, setLoading] = useState(false);
                        const handleClick = async () => {
                          setLoading(true);
                          let topic = "My experience is: " + inputValue + ". REVAMP my experiance to make fanstastic and unique resume Bullet Points(each point should have 25+ words) suitable to the Job position/description: " + desc +"."
                          console.log(topic);
                          let finalValue = await getDataOnTopic(topic);
                          let newval=finalValue.trim()
                          setOutputValue(newval);
                          console.log(outputValue);
                          setLoading(false);
                        };

                        return (
                        <Container fluid className="about-section">
                            {loading ? (
                            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                            <div>
                            <CircleLoader size={80} color={"black"} loading={loading} />
                            <p style={{textAlign: "left", color:"black" ,   marginTop: "1rem"}}>Brewing your resume points, just a moment please!</p>
                            </div>

                            </div>
                            ) : (
                            <div>
                            <Container>

                            <Row style={{ justifyContent: "center", padding: "10px"}}>

                            <Form.Label style={{textAlign: 'left !important', color: 'black'}}><font color="black"><b>Resume Points</b></font></Form.Label>
                              <textarea rows="10" cols="155" readOnly data-gramm="false">
                                      {outputValue}
                              </textarea>

                            </Row>

                              <Row style={{ justifyContent: "center", padding: "10px" }}>
                                <Col
                                  md={6}
                                  style={{
                                    justifyContent: "center",
                                    paddingTop: "30px",
                                    paddingBottom: "50px",
                                  }}
                                >

                                  <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                              <Form.Label style={{textAlign: 'left !important', color: 'black'}}><font color="black"><b>Work Experience</b></font></Form.Label>
                              <p style={{color: 'black', fontSize: '14px', textAlign: 'left'}}><i>Please provide a detailed account of your past work experiences, listing them one by one. For example, Currently studing BS in Business Administration at USC</i></p>
                              <Form.Control  style={{ fontSize: 17, padding: 3 }} as="textarea" className="form-control-lg" value={inputValue}
                              onChange={(e)=>setInputValue(e.target.value)}  placeholder="Type here..."/>
                            </Form.Group>
                            </Form>
                                </Col>
                                <Col
                                  md={6}
                                  style={{ paddingTop: "30px", paddingBottom: "50px" }}
                                  className="about-img">
                                  <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label><font color="black"><b>Job description</b></font></Form.Label>
                              <p style={{color: 'black', fontSize: '14px',textAlign: 'left'}}><i>Please provide a detailed "Job Description" or the "Specific Company" role you are interested in, for example: Software Developer</i></p>


                              <Form.Control style={{ fontSize: 17, padding: 3 }} as="textarea" onChange={(e)=>setDesc(e.target.value)} value={desc} className="form-control-lg" placeholder="Type here..." />

                            </Form.Group>
                          </Form>
                                            </Col>
                              </Row>
                              <Row style={{ justifyContent: "center" }}>
                                <Col
                                  md={5}
                                  style={{
                                    justifyContent: "center",
                                    paddingTop: "30px",
                                    paddingBottom: "50px",
                                  }}
                                  >

                                  </Col>
                                  <Col md={2} style={{ paddingTop: "5px", paddingBottom: "100px" }}>
                                  <Button variant="primary" onClick={handleClick}>{loading ? "Loading..." : buttonText}</Button>
                                  </Col>

                                  <Col
                                    md={5}
                                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                                    className="about-img"
                                >
                                </Col>
                              </Row>
                            </Container>
                            </div> ) }
                          </Container>
                        );
                      }

                      async function getDataOnTopic(topic)
                      {

                      const { Configuration, OpenAIApi } = require("openai");

                      const configuration = new Configuration({
                        apiKey: "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",
                      });

                      const openai = new OpenAIApi(configuration);

                      const response = await openai.createCompletion({
                        model: "text-davinci-003",
                        prompt: topic,
                        temperature: 1,
                        max_tokens: 512,
                        top_p: 0,
                        frequency_penalty: 1,
                        presence_penalty: 0,
                      });

                      let finalvalue=response.data.choices[0].text;
                      return finalvalue;
                      }

                      export default About;
