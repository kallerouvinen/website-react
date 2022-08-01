import styled from "styled-components";

const LinkBase = styled.a`
  &:link,
  &:visited {
    color: ${({ theme }) => theme.onBackground};
    text-decoration: none;
  }
`;

export default LinkBase;
