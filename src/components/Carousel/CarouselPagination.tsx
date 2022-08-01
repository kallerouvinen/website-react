import { useState } from "react";
import styled from "styled-components";
import { useSwiper } from "swiper/react";

interface DotProps {
  active: boolean;
}

const Container = styled.div`
  display: flex;
`;

const Dot = styled.div<DotProps>`
  background-color: ${({ active, theme }) =>
    active ? theme.color1.main : theme.gray};
  height: 8px;
  width: 8px;
  margin: 4px;
  border-radius: 50%;
  transition: 0.1s transform;
  transform: ${({ active }) => (active ? "scale(1.2)" : "scale(1)")};
`;

function CarouselPagination() {
  const swiper = useSwiper();
  const [slideProgress, setSlideProgress] = useState(0);

  swiper.on("slideChange", (e) => {
    setSlideProgress(e.progress);
  });

  const dots = Array.from(Array(swiper.slides.length));

  return (
    <Container>
      {dots.map((_, i) => (
        <Dot key={i} active={slideProgress === i} />
      ))}
    </Container>
  );
}

export default CarouselPagination;
