import React from "react";
import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% { transform: scaleY(1) translateY(-9px) }
  100% { transform: scaleY(0.8) translateY(0px) }
`;

const Mouse = styled.div`
  display: flex;
  height: 35px;
  width: 20px;
  border-radius: 15px;
  border: solid 2px #fc466b;
  align-items: center;
  justify-content: center;
`;

const Wheel = styled.div`
  height: 10px;
  width: 4px;
  border-radius: 50%;
  background-color: #fc466b;
  animation: ${scroll} 0.9s ease infinite alternate;
`;

function ScrollIndicator() {
  return (
    <Mouse>
      <Wheel />
    </Mouse>
  );
}

export default ScrollIndicator;
