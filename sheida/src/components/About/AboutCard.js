import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {  Row, Col } from "react-bootstrap";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am honored to share that I have recently graduated from a 3-year
            programmer program with honors, achieving academic excellence
            throughout my tenure at George Brown College. Notably, I was named
            to the Student Dean's List for six consecutive semesters, being on the Dean's List 
            reflects my passion for learning and my commitment to pushing myself
            to achieve my full potential. This recognition has been incredibly
            rewarding, affirming my belief in the value of hard work and
            perseverance. As I embark on the next chapter of my journey, I carry
            with me the lessons and experiences gained during my time at George
            Brown College. I am eager to leverage my academic achievements and
            skills in computer programming and analysis to make meaningful
            contributions in the tech industry, driving innovation and
            addressing societal challenges.
          </p>
          <Row>
            <Col>
              <p style={{ textAlign: "justify" }}>
                <span className="purple">Advanced Web APIs with ASP.NET Core 8</span>
                <br />
                Linkedin
                <br />
                Issued May 2024
                <br />
                <span className="purple">ASP.NET Core . API Development</span>
                <br />
                <br />
                <Button
                  href="https://www.linkedin.com/learning/certificates/85385a75ae3966b54d7b30aa1695e014e742b9a8196b199073fd174b7ea2b7d1?u=2155426"
                  target="_blank"
                >
                  {"View Credential"}
                </Button>
              </p>
            </Col>
            <Col>
              <p style={{ textAlign: "justify" }}>
                <span className="purple">Building Web APIs with ASP.NET Core 8</span>
                <br />
                Linkedin
                <br />
                Issued May 2024
                <br />
                <span className="purple">API Development . ASP.NET Core</span>
                <br />
                <br />
                <Button
                  href="https://www.linkedin.com/learning/certificates/5574890f38d70c49e434d9bc6cfd14e1f36f67b0fc455135f178de9ed0797e2a?u=2155426"
                  target="_blank"
                >
                  {"View Credential"}
                </Button>
              </p>
            </Col>
          </Row>
          <Row>
          <Col>
              <p style={{ textAlign: "justify" }}>
                <span className="purple">Explore React.js Development</span>
                <br />
                Linkedin
                <br />
                Issued Aug 2023
                <br />
                <span className="purple">JavaScript and React.js</span>
                <br />
                <br />
                <Button
                  href="https://www.linkedin.com/learning/certificates/ddfba1765b16bd88d646f44685919567c32a32934b054f2dbdf2b87fea70bcb7?u=2155426"
                  target="_blank"
                >
                  {"View Credential"}
                </Button>
              </p>
            </Col>
            <Col>
              <p style={{ textAlign: "justify" }}>
                <span className="purple">React: Authentication</span>
                <br />
                Linkedin
                <br />
                Issued Aug 2023
                <br />
                <span className="purple">Authentication and React.js</span>
                <br />
                <br />
                <Button
                  href="https://www.linkedin.com/learning/react-authentication/take-advantage-of-react-authentication?u=2155426"
                  target="_blank"
                >
                  {"View Credential"}
                </Button>
              </p>
            </Col>
          </Row>
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
