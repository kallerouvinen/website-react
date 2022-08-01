import styled from "styled-components";

import ButtonBase from "@/components/ButtonBase";

const PrimaryButton = styled(ButtonBase)`
  height: 48px;
  width: 192px;
  margin: 16px 0;
  border-radius: 48px;
  transition: 0.2s all;
  background-color: ${({ theme }) => theme.color1.main};
  &:hover {
    background-color: ${({ theme }) => theme.color1.dark};
    transform: scale(1.08);
  }
  &:focus {
    outline: none;
  }

  font-size: 18px;
  color: #fff;
  font-weight: 500;
`;

export default PrimaryButton;
