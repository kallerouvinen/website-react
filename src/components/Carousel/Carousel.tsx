import { Children, ReactNode } from "react";
import styled from "styled-components";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import CarouselNavigation from "@/components/Carousel/CarouselNavigation";
import CarouselPagination from "@/components/Carousel/CarouselPagination";
import { useMediaQuery } from "@/hooks";

const StyledSwiper = styled(Swiper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  pointer-events: none;
  background: linear-gradient(
    to right,
    #fff,
    transparent 5%,
    transparent 95%,
    #fff
  );
  z-index: 1;
`;

interface CarouselProps {
  children: ReactNode[];
}

function Carousel({ children }: CarouselProps) {
  const desktop = useMediaQuery("(min-width: 900px)");

  return (
    <StyledSwiper>
      {Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
      {desktop && <Overlay />}
      <CarouselNavigation />
      <CarouselPagination />
    </StyledSwiper>
  );
}

export default Carousel;
