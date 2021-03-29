import React from "react";
import styled, { css } from "styled-components";

const inBezier = "cubic-bezier(0.55, 0.05, 0.67, 0.2)";
const outBezier = "cubic-bezier(0.2, 0.6, 0.35, 1)";

interface IconProps {
  isOpen: boolean;
}

const Icon = styled.span<IconProps>`
  position: absolute;
  display: block;
  width: 24px;
  height: 3px;
  background-color: #fff;
  border-radius: 2px;
  transition: transform 0.2s ${inBezier};
  &::before {
    position: absolute;
    display: block;
    bottom: 8px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 2px;
    content: "";
    transition: bottom 0.1s ${inBezier} 0.2s, transform 0.2s ${inBezier};
  }
  &::after {
    position: absolute;
    display: block;
    top: 8px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 2px;
    content: "";
    transition: top 0.1s ${inBezier} 0.2s, transform 0.2s ${inBezier};
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      transition: transform 0.2s ${outBezier} 0.1s;
      transform: rotate(135deg);
      &::before {
        transition: bottom 0.1s ${outBezier}, transform 0.2s ${outBezier} 0.1s;
        bottom: 0;
        transform: rotate(90deg);
      }
      &::after {
        transition: top 0.1s ${outBezier}, transform 0.2s ${outBezier} 0.1s;
        top: 0;
        transform: rotate(90deg);
      }
    `}
`;

interface Props {
  isOpen?: boolean;
}

function MenuIcon(props: Props) {
  const { isOpen = false } = props;

  return <Icon isOpen={isOpen} />;
}

export default MenuIcon;
