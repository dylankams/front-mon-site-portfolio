import React,{ useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/logo.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import styled from 'styled-components';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Accueil</Nav.Link>
                <Nav.Link href="/#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Compétences</Nav.Link>
                <Nav.Link href="/#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projets</Nav.Link>
                <Nav.Link href="../../assets/cv/CV_Loïc_Dylan_KAMENI.pdf" download className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Mon CV</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <IconLink href="https://www.linkedin.com/in/dylan-kameni/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="" />
              </IconLink>

              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}


const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 7px;

  img {
    margin-top: -3px;
  }
`;
