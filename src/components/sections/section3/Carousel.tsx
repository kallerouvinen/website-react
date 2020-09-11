import React from "react";
import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";
import Hidden from "@material-ui/core/Hidden";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";

import { Stepper } from "components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &:hover > button {
    opacity: 1;
  }
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

const BrowseButton = styled.button`
  position: absolute;
  height: 48px;
  width: 48px;
  border: none;
  border-radius: 48px;
  cursor: pointer;
  transition: 0.2s all;
  background-color: ${({ theme }) => theme.color1.main};
  color: ${({ theme }) => theme.white};
  --webkit-tap-highlight-color: transparent;
  opacity: 0;
  &:hover {
    background-color: ${({ theme }) => theme.color1.dark};
  }
  &:focus {
    outline: none;
  }
`;

const ButtonNext = styled(BrowseButton)`
  right: 16px;
`;

const ButtonPrev = styled(BrowseButton)`
  left: 16px;
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

function Carousel(props: Props) {
  const {
    children,
    onChangeIndex = () => {},
    onNextClick = () => {},
    onPrevClick = () => {},
    selected,
  } = props;

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
      <Hidden mdDown>
        <Overlay />
      </Hidden>
      <Hidden mdDown>
        <ButtonPrev onClick={onPrevClick}>
          <ChevronLeft />
        </ButtonPrev>
        <ButtonNext onClick={onNextClick}>
          <ChevronRight />
        </ButtonNext>
      </Hidden>
      <Stepper activeStep={selected} steps={children.length} />
    </Container>
  );
}

export default Carousel;
