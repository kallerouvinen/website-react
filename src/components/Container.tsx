import styled, { css } from "styled-components";

interface ContainerProps {
  maxWidth?: number;
  padding?: string;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  box-sizing: border-box;
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px;`}
  ${({ padding }) => `padding: ${padding};`}
`;

Container.defaultProps = {
  padding: "16px",
};

export default Container;
