import styled from "styled-components";

const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
  }
`;

export default ButtonBase;
