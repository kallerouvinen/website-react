import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid #fff;
  border-radius: 8px;
  > svg {
    font-size: 18px;
    padding-right: 4px;
    color: #61dafb; // TODO: Move to theme
  }
`;

const Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  color: #fff;
`;

interface TechChipProps {
  icon?: ReactNode;
  label: string;
}

function TechChip({ icon = null, label }: TechChipProps) {
  return (
    <Container>
      {icon}
      <Label>{label}</Label>
    </Container>
  );
}

export default TechChip;
