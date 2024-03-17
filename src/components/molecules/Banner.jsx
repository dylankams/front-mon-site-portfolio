import React,{ useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import styled from 'styled-components';


const myEmail = 'dylankam989@gmail.com';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = [ "Développeur web", "Web Designer", "Data analyst" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setLoopNum(loopNum + 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenue sur mon portfolio !</span>
                <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
                  <iframe src="https://drive.google.com/file/d/1oOUCEhCqQTUOCY_XCmhZ53wz_fk-PMxc/preview" 
                          title="Presentation" 
                          allow="autoplay"
                          style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: 'none' }}>
                  </iframe>
                </div>
                <br /><br /><ContactLink href={`mailto:${myEmail}`}>Envoyez moi un mail ! <ArrowRightCircle size={25} /></ContactLink>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="bannière" className="banner-image"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const ContactLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color:white;
  }
`;