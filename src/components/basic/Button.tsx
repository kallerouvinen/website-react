import React from "react";
import styled from "styled-components";

interface ButtonProps {
  color: string;
}

const StyledButton = styled.button<ButtonProps>`
  height: 48px;
  width: 192px;
  margin: 16px 0;
  border: none;
  border-radius: 48px;
  cursor: pointer;
  transition: 0.2s all;
  background-color: ${({ theme, color }) => theme[color].main};
  --webkit-tap-highlight-color: transparent;
  &:hover {
    background-color: ${({ theme, color }) => theme[color].dark};
    transform: scale(1.08);
  }
  &:focus {
    outline: none;
  }
`;

const Label = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 500;
`;

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode;
  color?: string; // TODO: Should be key of colors
}

function Button(props: Props) {
  const { children = "", color = "color1", onClick } = props;

  return (
    <StyledButton color={color} onClick={onClick}>
      <Label>{children}</Label>
    </StyledButton>
  );
}

export default Button;
