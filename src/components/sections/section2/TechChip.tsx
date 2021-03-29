import React from "react";
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
  font-weight: 600;
  margin: 0;
  color: #fff;
`;

interface Props {
  icon?: React.ReactNode;
  label?: string;
}

function ReactChip(props: Props) {
  const { icon = null, label } = props;

  return (
    <Container>
      {icon}
      <Label>{label}</Label>
    </Container>
  );
}

export default ReactChip;
