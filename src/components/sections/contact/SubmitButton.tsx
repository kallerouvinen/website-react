import React from "react";
import styled from "styled-components";

interface ButtonProps {
  color: string;
}

const StyledSubmit = styled.input<ButtonProps>`
  padding: 12px 48px;
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

  transition: 0.2s all;
  font-family: roboto;
  font-size: 18px;
  color: #fff;
  font-weight: 500;
`;

interface Props extends React.HTMLProps<HTMLButtonElement> {
  color?: string; // TODO: Should be key of colors
}

function SubmitButton(props: Props) {
  const { color = "color1" } = props;

  return <StyledSubmit color={color} type="submit" value="Send message" />;
}

export default SubmitButton;
