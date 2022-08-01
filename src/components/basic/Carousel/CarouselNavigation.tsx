import { useState } from "react";
import styled from "styled-components";
import { useSwiper } from "swiper/react";

import { ReactComponent as ChevronLeft } from "@/assets/icons/chevron-left.svg";
import { ReactComponent as ChevronRight } from "@/assets/icons/chevron-right.svg";
import ButtonBase from "@/components/basic/ButtonBase";

const BrowseButton = styled(ButtonBase)`
  position: absolute;
  height: 64px;
  width: 48px;
  transition: 0.2s all;
  color: ${({ theme }) => theme.color1.main};
  z-index: 1;
  ${({ disabled }) => disabled && "display: none;"}

  @media (min-width: 960px) {
    height: 48px;
    border-radius: 48px;
  }

  > svg {
    font-size: 48px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color1.veryLight};
  }

  &:focus {
    outline: none;
  }
`;

const ButtonPrev = styled(BrowseButton)`
  left: 0px;
  border-top-right-radius: 48px;
  border-bottom-right-radius: 48px;
  @media (min-width: 960px) {
    left: 8px;
  }
`;

const ButtonNext = styled(BrowseButton)`
  right: 0px;
  border-top-left-radius: 48px;
  border-bottom-left-radius: 48px;
  @media (min-width: 960px) {
    right: 8px;
  }
`;

function CarouselNavigation() {
  const swiper = useSwiper();
  const [slideProgress, setSlideProgress] = useState(0);

  swiper.on("slideChange", (e) => {
    setSlideProgress(e.progress);
  });

  const prevSlide = () => swiper.slidePrev();
  const nextSlide = () => swiper.slideNext();

  return (
    <>
      <ButtonPrev
        aria-label="Previous project"
        disabled={slideProgress <= 0}
        onClick={prevSlide}
      >
        <ChevronLeft />
      </ButtonPrev>
      <ButtonNext
        aria-label="Next project"
        disabled={slideProgress >= swiper.slides.length - 1}
        onClick={nextSlide}
      >
        <ChevronRight />
      </ButtonNext>
    </>
  );
}

export default CarouselNavigation;
