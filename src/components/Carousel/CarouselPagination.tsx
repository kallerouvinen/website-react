import { useEffect, useState } from "react";
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
  cursor: pointer;
`;

function CarouselPagination() {
  const swiper = useSwiper();
  const [selectedSlide, setSelectedSlide] = useState(0);

  useEffect(() => {
    const listener = () => setSelectedSlide(swiper.realIndex);

    swiper.on("slideChange", listener);
    return () => swiper.off("slideChange", listener);
  }, [swiper]);

  const dots = Array.from(Array(swiper.slides.length));

  return (
    <Container>
      {dots.map((_, i) => (
        <Dot
          key={i}
          active={selectedSlide === i}
          onClick={() => swiper.slideTo(i)}
        />
      ))}
    </Container>
  );
}

export default CarouselPagination;
