import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import broncos from "../assets/nrl teams/broncos.jpg";
import bulldogs from "../assets/nrl teams/bulldogs.jpg";
import cowboys from "../assets/nrl teams/cowboys.jpg";
import dolphins from "../assets/nrl teams/dolphins.jpg";
import dragons from "../assets/nrl teams/dragons.jpg";
import eels from "../assets/nrl teams/eels.jpg";
import knights from "../assets/nrl teams/knights.jpg";
import panthers from "../assets/nrl teams/panthers.jpg";
import rabbitohs from "../assets/nrl teams/rabbitohs.jpg";
import raiders from "../assets/nrl teams/raiders.jpg";
import roosters from "../assets/nrl teams/roosters.jpg";
import seaeagles from "../assets/nrl teams/seaeagles.jpg";
import sharks from "../assets/nrl teams/sharks.jpg";
import storm from "../assets/nrl teams/storm.jpg";
import titans from "../assets/nrl teams/titans.jpg";
import warriors from "../assets/nrl teams/warriors.jpg";
import westtigers from "../assets/nrl teams/Wests-Tigers.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Routes, Route } from 'react-router-dom';

export const Projects = () => {

  const projects = [
    {
      title: "Brisbane Broncos",
      description: "Suncorp Stadium",
      imgUrl: broncos,
    },
    {
      title: "Canterbury Bulldogs",
      description: "Belmore Sports Ground",
      imgUrl: bulldogs,
    },
    {
      title: "North Queensland Cowboys",
      description: "Queensland Country Bank Stadium",
      imgUrl: cowboys,
    },
    {
      title: "Redcliffe Dolphins",
      description: "Moreton Daily Stadium",
      imgUrl: dolphins,
    },
    {
      title: "St. George Illawarra Dragons",
      description: "WIN Stadium",
      imgUrl: dragons,
    },
    {
      title: "Paramatta Eels",
      description: "CommBank Stadium",
      imgUrl: eels,
    },
    {
      title: "Newcastle Knights",
      description: "McDonald Jones Stadium",
      imgUrl: knights,
    },
    {
      title: "Penrith Panthers",
      description: "BlueBet Stadium",
      imgUrl: panthers,
    },
    {
      title: "South Sydney Rabbitohs",
      description: "Accor Stadium",
      imgUrl: rabbitohs,
    },
    {
      title: "Canberra Raiders",
      description: "GIO Stadium Canberra",
      imgUrl: raiders,
    },
    {
      title: "Sydney Roosters",
      description: "Sydney Cricket Ground",
      imgUrl: roosters,
    },
    {
      title: "Manly Warringah Sea Eagles",
      description: "Brookvale Oval",
      imgUrl: seaeagles,
    },
    {
      title: "Cronulla Sutherland Sharks",
      description: "PointsBet Stadium (Shark Park)",
      imgUrl: sharks,
    },
    {
      title: "Melbourne Storm",
      description: "AAMI Park",
      imgUrl: storm,
    },
    {
      title: "Gold Coast Titans",
      description: "Cbus Super Stadium",
      imgUrl: titans,
    },
    {
      title: "New Zealand Warriors",
      description: "Go Media Stadium Mt Smart",
      imgUrl: warriors,
    },
    {
      title: "Wests Tigers",
      description: "Campbelltown Stadium",
      imgUrl: westtigers,
    },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>NRL Teams</h2>
                <p>Total attendance for Rugby League exceeds 3.17 million. The NRL record the codes highest ever crowd average for a regular season with on average 16,468 attending each game that season. The NRL holds the first ever Rugby League Grand Final in the competitions 98 year history involving no New South Wales teams.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                 
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                      {Auth.loggedIn() ? (
            <>
                      {
                          projects.map((project, index) => {

                            const projectWithIndex = {...project, index};

                            return (
                              <ProjectCard
                                key={index}
                                {...projectWithIndex}
                                />
                            )
                          })
                        }
            </>
                    ) : (
            <>

              <Link to='/register'>
                <button className="vvd"><span>Members Area</span></button>
              </Link>

              </>
          )}



                        
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
