import styled from "styled-components";

interface GridItemProps {
  name: string;
}

const GridItem = styled.div<GridItemProps>`
  display: flex;
  flex: 1;
  grid-area: ${({ name }) => name};
`;

export default GridItem;
