import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";

import { ReactComponent as ChevronLeft } from "@/assets/icons/chevron-left.svg";
import { ReactComponent as ChevronRight } from "@/assets/icons/chevron-right.svg";
import { Stepper } from "@/components";
import { useMediaQuery } from "@/hooks";

const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
`;

interface ButtonProps {
  disabled: boolean;
}

const BrowseButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 64px;
  width: 48px;
  border: none;
  padding: 0;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  transition: 0.2s all;
  background-color: transparent;
  color: ${({ theme, disabled }) =>
    disabled ? "transparent" : theme.color1.main};
  > * {
    font-size: 48px !important;
  }
  @media (min-width: 960px) {
    height: 48px;
    border-radius: 48px;
  }
  &:hover {
    background-color: ${({ theme, disabled }) =>
      !disabled && theme.color1.veryLight};
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

const styles = {
  views: {
    height: "100%",
  },
  container: {
    height: "100%",
  },
};

interface Props {
  children: JSX.Element[];
  onChangeIndex: (index: number) => void;
  onNextClick?: () => void;
  onPrevClick?: () => void;
  selected: number;
}

function Carousel({
  children,
  onChangeIndex = () => {},
  onNextClick = () => {},
  onPrevClick = () => {},
  selected,
}: Props) {
  const desktop = useMediaQuery("(min-width: 900px)");

  return (
    <Container>
      <SwipeableViews
        style={styles.views}
        containerStyle={styles.container}
        index={selected}
        onChangeIndex={onChangeIndex}
      >
        {children}
      </SwipeableViews>
      {desktop && <Overlay />}
      <ButtonPrev
        aria-label="previous-project"
        onClick={onPrevClick}
        disabled={selected <= 0}
      >
        <ChevronLeft />
      </ButtonPrev>
      <ButtonNext
        aria-label="next-project"
        onClick={onNextClick}
        disabled={selected >= children.length - 1}
      >
        <ChevronRight />
      </ButtonNext>
      <Stepper activeStep={selected} steps={children.length} />
    </Container>
  );
}

export default Carousel;
