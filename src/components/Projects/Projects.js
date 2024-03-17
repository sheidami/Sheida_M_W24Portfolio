import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shop from "../../Assets/Projects/shop.png";
import ticTakToe from "../../Assets/Projects/ticTakToe.png";
import myBlog from "../../Assets/Projects/myBlog.png";
import weather from "../../Assets/Projects/weather.png";
import chatRoom from "../../Assets/Projects/chatRoom.png";
import empMan from "../../Assets/Projects/empMan.png";
import ipark from "../../Assets/Projects/image.png";
import Tilt from "react-parallax-tilt";
import Button from "react-bootstrap/Button";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Project <strong className="purple">Overview </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weatherify"
              description="This is a React-based Weather Application that utilizes APIs from open weather map website to fetch weather data. It's built using React.js, providing users with a responsive and interactive interface to view weather information."
              ghLink="https://github.com/sheidami/project_weather"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={empMan}
              isBlog={false}
              title="Staff Track"
              description="The Staff Track is a web-based application that allows users to manage employee records. Users can perform operations such as viewing, updating, adding, and deleting employee information. Additionally, the system provides authentication features with login and signup functionality."
              ghLink="https://github.com/sheidami/project_employee_management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatRoom}
              isBlog={false}
              title="Chatter Box"
              description="ChatterBox revolutionizes your chat experience with its real-time messaging capabilities. Utilizing MongoDB for efficient data storage and Socket.IO for instant communication, ChatterBox ensures that conversations flow seamlessly. Its sleek and user-friendly interface, built on React.js, enhances usability and engagement. Join ChatterBox now and discover a whole new level of connectivity and conversation!"
              ghLink="https://github.com/sheidami/project_chat_app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myBlog}
              isBlog={false}
              title="My Blog"
              description="My Blog is a blog website designed for readers to discover and engage with articles on various topics. It utilizes React.js for browsing and Firebase for secure login functionality. Users can interact with articles by commenting and liking, fostering a sense of community within the platform."
              ghLink="https://github.com/sheidami/project-React-Intro"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticTakToe}
              isBlog={false}
              title="Tic-Tak-Toe"
              description="A console Tic Tac Toe game with intelligent AI is a computer program that allows a player to play the classic game of Tic Tac Toe against the computer. The AI component of the game is designed to make the computer player challenging by using advanced algorithms to analyze the game board and make strategic moves."
              ghLink="https://github.com/sheidami/project-tic-tak-toe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Flexi Cart"
              description="A dynamic shopping webpage is a website that allows users to browse and purchase products online in real-time. It typically includes features such as product search, product filtering, shopping cart, and checkout functionality."
              ghLink="https://github.com/sheidami/project-HTML-CSS"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={ipark} className="img-fluid" alt="avatar" />
            </Tilt>
            <br />
            <strong className="purple">
              Please click the button below to access additional information
              about our project, including business requirements, project plan,
              requirements analysis and design, wireframes, status reports, and
              system implementation details.
            </strong>
            <br />
            <br />
            <Button
              href="https://drive.google.com/drive/folders/1A5si3I26MKEvkbEtsj1YUhNfPTQq5uhw?usp=drive_link"
              target="_blank"
            >
              {"More Info"}{" "}
              <AiOutlineFundProjectionScreen style={{ fontSize: "1.1em" }} />
            </Button>
          </Col>

          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> IPark </span>
            </h1>
            <p className="home-about-body">
              <strong className="purple">Project Vision:</strong>
              <br />
              <br />
              The vision of the IPark project is to revolutionize parking
              reservation services by implementing a software-centric approach
              that eliminates the need for traditional hardware systems. Through
              a user-friendly mobile and web interface, IPark aims to facilitate
              prompt and advanced parking spot reservations, prioritizing user
              convenience. By redefining urban parking management, IPark seeks
              to create a more adaptable, user-centered, and financially
              advantageous solution for both users and providers.
              <br />
              <br />
              <strong className="purple">Project Summary:</strong>
              <br />
              <br />
              The objective of the IPark project is to develop a cutting-edge
              parking reservation service that offers seamless user experiences
              and maximizes operational efficiency. By leveraging technology to
              simplify reservation management and provide up-to-date
              availability information, IPark prioritizes customer convenience.
              Additionally, the project aims to optimize resource utilization by
              enhancing space management and maximizing parking space utility.
              By incorporating feedback mechanisms and profile management, IPark
              seeks to elevate user engagement and enrich the overall user
              experience. Furthermore, IPark aims to streamline operations
              through improved insights into space utilization and pricing
              strategies, while also supporting revenue maximization through
              seamless payment solutions and dynamic pricing structures.
              Ultimately, the project embodies digital advancement by redefining
              traditional parking management with a digital-centric solution.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
