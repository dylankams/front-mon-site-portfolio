import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../molecules/ProjectCard";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "site e-commerce plexiglass",
      description: "Ajout de nouvelles fonctionnalités et maintenance du site",
      imgUrl: projImg1,
    },
    {
      title: "Site web jardin paysager",
      description: "Rédaction et optimisation des articles de blog",
      imgUrl: projImg2,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projets</h2>
                <p>Mes projets sont le reflet de mon savoir-faire et de mon engagement à offrir des solutions sur mesure. Des sites web intuitifs aux identités visuelles uniques, découvrez mes réalisations et laissez-vous inspirer par mon approche créative.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Développement web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Analyse de données</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p>Refonte du site web <a href="https://www.elase.fr" target="_blank" rel="noopener noreferrer">elase.fr</a></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Réalisation d'un projet personnel sous power BI qui consistait à visualiser la ville qui a accueilli le plus grand nombre de 
                        supporter lors de la coupe du monde de football Russie 2018.Pour réliser ce projet, j'ai collecter les données
                        sur statista, kaggle, wikipédia ensuite je les ai traitées, transformées (Power query) puis j'ai restitué les données clés (KPI) sous forme de visuels graphiques
                        sous power BI.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Arrière plan"/>
    </section>
  )
}
