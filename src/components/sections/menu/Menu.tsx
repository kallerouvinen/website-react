import React, { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

import MenuIcon from "./MenuIcon";

const springWobbly = (t: number) => {
  return (
    -0.5 *
    2.71828 ** (-6 * t) *
    (-2 * 2.71828 ** (6 * t) + Math.sin(12 * t) + 2 * Math.cos(12 * t))
  );
};

const lerp = (a: number, b: number, p: number) => {
  return a + p * (b - a);
};

const wobblyAnimation = (start: number, end: number) => {
  // TODO: Type
  const anim: any = {};
  for (let i = 0; i < 101; i++) {
    const t = i / 100;
    const p = springWobbly(t);
    const size = lerp(start, end, p);
    anim[`${i}%`] = { height: size, width: size };
  }
  return anim;
};

const size = 450;

const ButtonContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
`;

const ToggleMenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 56px;
  height: 56px;
  border-radius: 48px;
  border: none;
  cursor: pointer;
  transition: 0.3s all;
  background-color: #3f5efb;
  & > * {
    color: #fff;
    font-size: 32px;
  }
  &:hover {
    background-color: #284bfb;
  }
  &:focus {
    outline: none;
  }
`;

const MenuLink = styled.button`
  border: none;
  cursor: pointer;
  transition: 0.2s all;
  background-color: transparent;
  &:hover {
    transform: scale(1.08);
    & > * {
      color: #fff;
    }
  }
  &:focus {
    outline: none;
  }
  color: #cdd5fe;
  font-size: 32px;
`;

interface MenuLinkContainerProps {
  isOpen: boolean;
}

const MenuLinkContainer = styled.div<MenuLinkContainerProps>`
  display: flex;
  position: fixed;
  flex-direction: column;
  top: 48px;
  right: calc(45vw - 75px);
  @media (min-width: 400px) {
    right: 105px;
  }
  text-align: center;
  & > * {
    margin: 12px 0;
  }
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: ${({ isOpen }) =>
    isOpen ? "opacity 0.2s ease 0.3s" : "opacity 0s"};
`;

interface MenuContainerProps {
  isOpen: boolean;
  shouldAnimate: boolean;
}

const MenuContainer = styled.div<MenuContainerProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  background-color: #3f5efb;
  border-bottom-left-radius: ${size - 25}px;
  overflow: hidden;

  animation: ${({ isOpen, shouldAnimate }) =>
    isOpen
      ? css`
          ${openMenu} 500ms
        `
      : shouldAnimate
      ? css`
          ${closeMenu} 500ms
        `
      : css``};
  animation-fill-mode: ${({ isOpen }) => (isOpen ? "forwards" : "none")};
`;

const openMenu = keyframes`${wobblyAnimation(0, size)}`;
const closeMenu = keyframes`
  0% { width: ${size}px; height: ${size}px }
  100% { width: 0; height: 0 }
`;

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const enableAnimations = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      enableAnimations.current = true;
    }, 5);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (number: number) => {
    document
      .getElementById(`section${number}`)
      ?.scrollIntoView({ behavior: "smooth" });
    toggleMenu();
  };

  const scrollToSection1 = () => scrollToSection(1);
  const scrollToSection2 = () => scrollToSection(2);
  const scrollToSection3 = () => scrollToSection(3);
  const scrollToSection4 = () => scrollToSection(4);

  return (
    <>
      <MenuContainer isOpen={isOpen} shouldAnimate={enableAnimations.current}>
        <MenuLinkContainer isOpen={isOpen}>
          <MenuLink onClick={scrollToSection1}>Home</MenuLink>
          <MenuLink onClick={scrollToSection2}>About me</MenuLink>
          <MenuLink onClick={scrollToSection3}>My work</MenuLink>
          <MenuLink onClick={scrollToSection4}>Contact</MenuLink>
        </MenuLinkContainer>
      </MenuContainer>
      <ButtonContainer>
        <ToggleMenuButton onClick={toggleMenu}>
          <MenuIcon isOpen={isOpen} />
        </ToggleMenuButton>
      </ButtonContainer>
    </>
  );
}

export default Menu;
