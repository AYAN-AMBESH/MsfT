// Card.js
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #333;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
  width: 150px; /* Fixed width for rectangular shape */
  height: 200px; /* Fixed height for rectangular shape */

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h3`
  color: #fff05f; /* Lavender */
  margin: 0 0 10px;
  font-size: 18px; /* Adjust font size */
`;

const Description = styled.p`
  color: #ccc; /* Light gray for description */
  font-size: 14px; /* Adjust font size */
`;

const Card = ({ title, description }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default Card;
