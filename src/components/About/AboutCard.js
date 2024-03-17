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
            I am honored to share that I have been recognized for my academic
            excellence by being named to the Student Dean's List for five
            consecutive semesters during my time at George Brown College. The
            Student Dean's List is a prestigious honor that recognizes students
            who have achieved a high level of academic success during the
            semester. In order to be named to the list, a student must earn a
            GPA above a certain threshold, usually around 3.5 or higher. Being
            on the Student Dean's List for five semesters in a row is a
            testament to my hard work and dedication to academic excellence. I
            have always been passionate about learning and pushing myself to
            achieve my full potential, and being recognized in this way has been
            incredibly rewarding.
          </p>
          <Row>
          <Col >
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
