import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSwiper } from "swiper/react";

import ChevronLeftIcon from "@/assets/icons/chevron-left.svg?react";
import ChevronRightIcon from "@/assets/icons/chevron-right.svg?react";
import ButtonBase from "@/components/ButtonBase";

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
  const [selectedSlide, setSelectedSlide] = useState(0);

  useEffect(() => {
    const listener = () => setSelectedSlide(swiper.realIndex);

    swiper.on("slideChange", listener);
    return () => swiper.off("slideChange", listener);
  }, [swiper]);

  const prevSlide = () => swiper.slidePrev();
  const nextSlide = () => swiper.slideNext();

  return (
    <>
      <ButtonPrev
        aria-label="Previous project"
        disabled={selectedSlide <= 0}
        onClick={prevSlide}
      >
        <ChevronLeftIcon />
      </ButtonPrev>
      <ButtonNext
        aria-label="Next project"
        disabled={selectedSlide >= swiper.slides.length - 1}
        onClick={nextSlide}
      >
        <ChevronRightIcon />
      </ButtonNext>
    </>
  );
}

export default CarouselNavigation;
