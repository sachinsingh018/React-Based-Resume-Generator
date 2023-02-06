      import { Container, Row, Col } from "react-bootstrap";
      import Button from 'react-bootstrap/Button';
      import Form from 'react-bootstrap/Form';
      import React, { useState } from 'react';
      import { Document, Packer } from 'docx';
      import { CircleLoader } from "react-spinners";
      import './extra.css';


      function Review() {
      const [inputValue, setInputValue] = useState('');
      const [desc, setDesc] = useState('');

      const [outputValue, setop] = useState('');

      const [fileContents, setFileContents] = useState('');
      const [buttonText, setButtonText] = useState("Review");

      const [loading, setLoading] = useState(false);

      const handleFileRead = async (e) => {
        setLoading(true);
        console.log("step 1")
        const file = e.target.files[0];
        const doc = await Document.load(file);
        const text = doc.getText();
        setFileContents(text);
        console.log(text)
        setLoading(false);
      };

      return (
        <Container fluid className="about-section">
                      {loading ? (<div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <div>
        <CircleLoader size={80} color={"black"} loading={loading} />
        <p style={{textAlign: "left", color:"black" ,   marginTop: "1rem"}}>Please wait while we generate some good reviews for your resume</p>
      </div>
    </div>

                          
                          
                        ) : (
                          <div>

        
        
          <Container>
            
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
            <Form.Label><font color="black"><b>Paste Resume Content</b></font></Form.Label>
            <Form.Control style={{ fontSize: 17, padding: 3 }} as="textarea" className="form-control-lg2" value={inputValue}
              onChange={(e)=>setInputValue(e.target.value)}  placeholder="Type here..."/>
            
          </Form.Group>
          <div>
            
          
          <p>{fileContents}</p>
        </div>
          

        </Form>
        

              </Col>
              <Col
                md={6}
                style={{ paddingTop: "30px", paddingBottom: "50px" }}
                className="about-img"
              >
                  <Form>

                  <Form.Label style={{textAlign: 'left !important', color: 'black'}}><font color="black"><b>Resume Review</b></font></Form.Label>
                  <textarea rows="20" cols="55" readOnly data-gramm="false" >
                      {outputValue}
                  </textarea>



          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><font color="black"><b>Job Description / Role</b></font></Form.Label>
            <Form.Control style={{ fontSize: 17, padding: 3 }} as="textarea" onChange={(e)=>setDesc(e.target.value)} value={desc} className="form-control-lg5" placeholder="Type here..."/>
            
          </Form.Group>



          <Button variant="primary" style={{ float: "right" }}  onClick={async (e)=>{
            setLoading(true);
            
            let topic="My resume is this:  "+inputValue+" .Review my resume based on the Job Role: "+desc+" and tell me about the parts that need improvement and what approach should I take? Make your opinions in bullet points";
            console.log(topic);
            let finalvalue= await getDataOnTopic(topic);
            let finale = finalvalue.trim()
            setop(finale);
            console.log(finale);
            setLoading(false);
          }}>
            {loading ? "Loading..." : buttonText}      </Button>
          

        
        </Form>
        
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
      max_tokens: 500,
      top_p: 0,
      frequency_penalty: 0,
      presence_penalty: 0,
      });

      let finalvalue=response.data.choices[0].text;
      return finalvalue;
      }

      export default Review;
