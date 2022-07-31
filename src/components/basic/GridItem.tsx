import styled, { css } from "styled-components";

interface GridItemProps {
  centered?: boolean;
  name?: string;
  direction?: "column" | "row";
}

const GridItem = styled.div<GridItemProps>`
  display: flex;
  flex: 1;
  flex-direction: ${({ direction }) => direction};

  ${({ centered }) =>
    centered &&
    css`
      justify-content: center;
      align-items: center;
    `};

  ${({ name }) =>
    css`
      grid-area: ${name};
    `};
`;

GridItem.defaultProps = {
  centered: false,
  direction: "column",
};

export default GridItem;
