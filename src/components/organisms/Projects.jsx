import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../molecules/ProjectCard";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg4 from "../../assets/img/project-img4.png";
import projImg5 from "../../assets/img/project-img5.png";
import projImg6 from "../../assets/img/project-img6.png";
import projImg7 from "../../assets/img/project-img7.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "site e-commerce plexiglass",
      description: "Ajout de nouvelles fonctionnalités et maintenance du site",
      techno: "Wordpress, HTML, CSS, Javascript",
      imgUrl: projImg1,
      link: "https://www.plaque-plexiglass.fr/"
    },
    {
      title: "Site web jardin paysager",
      description: "Rédaction et optimisation des articles de blog",
      techno: "Wordpress, HTML, CSS, Javascript",
      imgUrl: projImg2,
      link: "http://www.jardinpaysager.fr/"
    },
    {
      title: "Application de gestion d'école",
      description: "Il s'agit d'une application web qui permet de gérer les élèves d'une école",
      techno: "ReactJs, Java/Spring",
      imgUrl: projImg4,
      link: "https://drive.google.com/file/d/17epzM35uDgI_4r23E4b7dzZWhssrS5YT/view?usp=drive_link"
    },
    {
      title: "Devops: Site e-commerce",
      description: "Déploiement continu d'un site e-commerce de ventes de produits Apple",
      techno: "HTML, CSS, Jenkins, AWS EC2, AWS Beanstalk, Github",
      imgUrl: projImg6,
      link: "https://github.com/dylankams/ProjetDevops/"
    },
    {
      title: "Application mobile de Météo",
      description: "Il s'agit d'une application mobile de météo qui affiche les prévisions météorologiques actuelles et futures.",
      techno: "React native, API (openweathermap.org)",
      imgUrl: projImg5,
      link: "https://github.com/dylankams/WeatherProject"
    },
    {
      title: "Application mobile de gestion de tâche",
      description: "Ajout, modification et suppression de tâche",
      techno: "React native, HTML, CSS, Typescript",
      imgUrl: projImg7,
      link: "https://github.com/dylankams/TodoProject"
    },
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
                      <Nav.Link eventKey="first">Développement web et mobile</Nav.Link>
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
                        {projects.map((project, index) => (
                          <ProjectCard
                            key={index}
                            title={<a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>{project.title}</a>}
                            description={<a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>{project.description}</a>}
                            techno={<b style={{ color: 'white' }}><br /><br />Technologies: {project.techno}</b>}
                            imgUrl={project.imgUrl}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Refonte du site web <a href="https://www.elase.fr" target="_blank" rel="noopener noreferrer">elase.fr</a></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>
                      <ul>
                        <li>Réalisation d'un projet personnel sous Power BI : visualisation de la ville ayant accueilli le plus grand nombre de supporters lors de la Coupe du Monde de football en Russie 2018. Collecte de données sur Statista, Kaggle et Wikipédia, traitement et transformation des données avec Power Query, restitution des données clés (KPI) sous forme de visuels graphiques.</li>
                        <br/>
                        <li>Audit du tracking sur des sites web</li>
                        <br/>
                        <li>Audit RGPD (CMP, conditionnement des tags au consentement des utilisateurs, émission de recommandations)</li>
                        <br/>
                        <li>Rédaction de plan de marquage</li>
                        <br/>
                        <li>Installation, paramétrage et mise en production des tags medias via Google Tag Manager</li>
                        <br/>
                        <li>Nettoyage de conteneurs Google Tag Manager</li>
                        <br/>
                        <li>Analyse et interprétation des données clients avec Google Analytics</li>
                        <br/>
                        <li>Utilisation des algorithmes de machine et deep learning</li>
                        <br/>
                        <li>Analyse de séries temporelles (Modèle additif, multiplicatif, ARIMA)</li>
                      </ul>
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
