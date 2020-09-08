import React from "react";
import styled from "styled-components";

interface StyledButtonProps {
  color: string;
}

const StyledButton = styled.button<StyledButtonProps>`
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
`;

const StyledLabel = styled.span`
  transition: 0.2s all;
  font-family: roboto;
  font-size: 18px;
  color: #fff;
  font-weight: 500;
`;

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode;
  color?: string; // TODO: Should be key of colors
}

function Button(props: Props) {
  const { children = "", color = "color1", ...otherProps } = props;

  // {...otherProps} type="button"
  return (
    <StyledButton color={color}>
      <StyledLabel>{children}</StyledLabel>
    </StyledButton>
  );
}

export default Button;
