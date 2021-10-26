import styled from "styled-components";

interface Props {
  activeStep?: number;
  steps: number;
}

interface DotProps {
  active: boolean;
}

const Container = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  & > * {
    margin: 4px;
  }
`;

const Dot = styled.div<DotProps>`
  background-color: ${({ active, theme }) =>
    active ? theme.color1.main : theme.gray};
  height: 8px;
  width: 8px;
  border-radius: 8px;
  transition: 0.1s transform;
  transform: ${({ active }) => (active ? "scale(1.2)" : "scale(1)")};
`;

function Stepper(props: Props) {
  const { activeStep = 0, steps } = props;

  const dots = [];
  for (let i = 0; i < steps; i++) {
    dots.push(<Dot key={i} active={activeStep === i} />);
  }

  return <Container>{dots}</Container>;
}

export default Stepper;
