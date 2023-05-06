import { useState, useEffect } from "react";
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
                <span className="tagline">Bienvenue sur mon portolio !</span>
                <h2>{`Bonjour ! je suis Dylan KAMENI,`} <span className="txt-rotate" data-period="1000" data-rotate='[ "Web Developer", "Data analyst", "Web Designer" ]'><span className="wrap">{text}</span></span></h2>
                  <p>Bonjour, je suis Dylan KAMENI, un développeur passionné par la création de solutions innovantes. Avec une expérience solide en développement full stack Javascript, je suis capable de répondre à tous vos besoins en matière de développement web. Mon objectif est de créer des applications qui apportent une réelle valeur ajoutée à vos utilisateurs. Parcourez mon portfolio pour découvrir mes projets les plus récents et n'hésitez pas à me contacter pour discuter de votre prochain projet.</p>
                  <ContactLink href={`mailto:${myEmail}`}>Envoyez moi un mail ! <ArrowRightCircle size={25} /></ContactLink>
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