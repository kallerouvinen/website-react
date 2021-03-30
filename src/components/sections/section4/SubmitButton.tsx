import React from "react";
import styled, { css, keyframes } from "styled-components";

interface ButtonProps {
  disabled: boolean;
  state: string;
}

interface LabelProps {
  position: string;
}

const errorAnim = keyframes`
  0% { transform: translateX(8px); }
  20% { transform: translateX(-8px); }
  40% { transform: translateX(4px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(2px); }
  100% { transform: translateX(0px); }
`;

const Container = styled.div<ButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 160px;

  transition: 0.2s all;
  border-radius: 48px;
  box-shadow: 0px 3px 16px 5px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme, state }) =>
    state === "Success"
      ? theme.success
      : state === "Error"
      ? theme.error
      : theme.color4.main};
  ${({ disabled, theme }) =>
    !disabled &&
    css`
      &:hover {
        background-color: ${theme.color4.dark};
        transform: scale(1.08);
      }
    `}
  overflow: hidden;
  ${({ state }) =>
    state === "Error" &&
    css`
      animation: 0.4s ${errorAnim} linear 0.35s;
    `}
`;

const StyledSubmit = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  z-index: 1;
`;

const StyledLabel = styled.label<LabelProps>`
  position: absolute;
  transition: 0.3s all cubic-bezier(0.83, 0, 0.17, 1);
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  transform: translateY(${({ position }) => position});
`;

interface Props extends React.HTMLProps<HTMLButtonElement> {
  disabled?: boolean;
  state?: string;
}

function SubmitButton(props: Props) {
  const { disabled = false, state = "Ready" } = props;

  return (
    <Container state={state} disabled={disabled}>
      <StyledLabel
        position={state === "Ready" ? "0px" : "-50px"}
        htmlFor="submit"
      >
        Send
      </StyledLabel>
      <StyledLabel
        position={
          state === "Ready" ? "50px" : state === "Loading" ? "0px" : "-50px"
        }
        htmlFor="submit"
      >
        Sending...
      </StyledLabel>
      <StyledLabel
        position={state === "Success" ? "0px" : "50px"}
        htmlFor="submit"
      >
        Done!
      </StyledLabel>
      <StyledLabel
        position={state === "Error" ? "0px" : "50px"}
        htmlFor="submit"
      >
        Failed!
      </StyledLabel>
      <StyledSubmit type="submit" id="submit" value="" disabled={disabled} />
    </Container>
  );
}

export default SubmitButton;
