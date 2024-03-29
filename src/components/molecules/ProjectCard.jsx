import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, techno, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="iamge projet"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <b>{techno}</b>
        </div>
      </div>
    </Col>
  )
}
