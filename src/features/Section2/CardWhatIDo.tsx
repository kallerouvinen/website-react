import styled from "styled-components";

import Divider from "@/components/Divider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 12px;
  font-size: 44px;
  color: #fff;
`;

const Paragraph = styled.p`
  margin: 12px;
  font-size: 18px;
  color: #fff;
`;

function CardWhatIDo() {
  return (
    <Container>
      <Title>What I do</Title>
      <Paragraph>
        I create dynamic, responsive and fast user interfaces with years of
        experience in building apps using <b>React</b> and <b>React Native</b>.
      </Paragraph>
      <Paragraph>
        On my free time I have dabbled with game programming using{" "}
        <b>Unreal Engine</b>. I also enjoy travelling to new places.
      </Paragraph>
      <Divider />
      <Title>What I don't do</Title>
      <Paragraph>
        I would fail to draw any popular sorting algorithm on a whiteboard off
        the top of my head. I also can't recall the difference between slice()
        and splice() whenever I need to split an array.
      </Paragraph>
      <Paragraph>Also, I don't drink coffee.</Paragraph>
    </Container>
  );
}

export default CardWhatIDo;
