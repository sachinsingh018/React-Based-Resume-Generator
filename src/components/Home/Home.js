
            import React, {useState, useEffect} from "react";
            import { Container, Row, Col } from "react-bootstrap";
            import YouTube, { YouTubeProps } from 'react-youtube';
            //import "video-react.css"; // import css
            import { Player } from 'video-react';
            import homeLogo from "../../Assets/home-main.svg";
            import resumePoints from '../../Assets/Resume Points.gif';
            import brewer from '../../Assets/brewing.gif';
            import workExperience from '../../Assets/workexi.gif';
            import jobDescription from '../../Assets/jdi.gif';
            import './Opac.css';

            import Type from "./Type";

            const Gifs = [
              jobDescription,
              workExperience,
              brewer
            ];
            
            function Home() {
              
              const [currentGif, setCurrentGif] = useState(0);

              useEffect(() => {
              const intervalId = setInterval(() => {
              setCurrentGif(prevGif => (prevGif + 1) % Gifs.length);
               }, 10000);
              return () => clearInterval(intervalId);
              }, []);

              return (
                <section>
                  <Container fluid className="home-section" id="home">
                              <Container className="home-content">
                      <Row>
                        <Col md={6} className="home-header">
                          <br></br>
                        <h1 style={{ paddingBottom: 15,paddingTop: 70 }} className="heading">
                            Generate Tailored Resumes{" "}
                          </h1>

                          <h3 className="heading-name">
                            Create curated resume points suitable for desired job descriptions or specific roles
                          </h3>
                          </Col>
                          <Col md={6} className="home-header">
                          <div className="OpacityImage">

                          <img src={Gifs[currentGif]} alt="Playing GIFs" />
                          </div>
                          
                          </Col>
                        </Row>

                       
                        <Row>
                          <Col md={3} className="home-header">
                          
                          </Col>
                          <Col md={4} className="home-header">
                          </Col>
                          <Col md={3} className="home-header">
                          
                          </Col>
                        </Row>

                        
                       
                        <Row>
                          <Col md={3} className="home-header">
                          
                          </Col>
                          <Col md={4} className="home-header">
                          </Col>
                          <Col md={3} className="home-header">
                          
                          </Col>
                        </Row>
                    </Container>
                  </Container>
                </section>
              );
            }

            export default Home;