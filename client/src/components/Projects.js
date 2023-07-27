import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import { QUERY_TEAMS } from '../utils/queries';
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Routes, Route } from 'react-router-dom';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from "react";

export const Projects = () => {
  const [teams, setTeams] = useState();

  const { loading, data } = useQuery(QUERY_TEAMS);
  // console.log("teams",teams);
  // const teams= data.team;
  useEffect(() => {
    for (let item in data) {
      if (Array.isArray(data[item])) {
        setTeams(data[item]);
      }
    }
    console.log(teams);
  }, [data]);
  console.log(data);

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>NRL Teams</h2>
                <p> Click on any team to join the discussion on all things NRL</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                 
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row>
                      {Auth.loggedIn() ? (
            <>
    
                      {
                        
                        
                          teams && teams.map((team, index) => {

                            const teamsWithId = {...team, index};

                            return (
                              <ProjectCard
                                key={index}
                                {...teamsWithId}
                                />
                            )
                          })
                        }
            </>
                    ) : (
            <>

              <Link to='/register'>
                {/* <button className="vvd"><span>Members Area</span></button> */}
                <h3 className="Login">Login to the members area for exclusive access to teams. 
                You're one click away from KICK OFF!</h3>
              </Link>
              <div class= 'notLoggedIn'>
              
              </div>
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
