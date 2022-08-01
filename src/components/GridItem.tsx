import styled, { css } from "styled-components";

interface GridItemProps {
  name: string;
  direction?: "column" | "row";
  // TODO: Typing
  justify?: string;
  align?: string;
}

const GridItem = styled.div<GridItemProps>`
  display: flex;
  flex: 1;
  flex-direction: ${({ direction }) => direction};
  grid-area: ${({ name }) => name};

  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}

  ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `}
`;

GridItem.defaultProps = {
  direction: "column",
};

export default GridItem;
