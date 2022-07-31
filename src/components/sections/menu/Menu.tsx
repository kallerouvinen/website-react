import { useCallback, useEffect, useRef, useState } from "react";
import styled, { css, keyframes, SimpleInterpolation } from "styled-components";

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
  const anim: SimpleInterpolation = {};
  for (let i = 0; i <= 100; i++) {
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

interface ToggleMenuButtonProps {
  isOpen: boolean;
}

const ToggleMenuButton = styled.button<ToggleMenuButtonProps>`
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

  ${({ isOpen }) =>
    !isOpen &&
    css`
      box-shadow: 0px 3px 16px 5px rgba(0, 0, 0, 0.1);
    `}

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
  width: 150px;
  padding: 0;
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
  font-size: 28px;
  text-transform: uppercase;
`;

interface MenuLinkContainerProps {
  isOpen: boolean;
}

const MenuLinkContainer = styled.div<MenuLinkContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 64px;
  padding-right: calc(45vw - 75px);
  @media (min-width: 400px) {
    padding-right: 105px;
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
  box-shadow: -3px 3px 16px 5px rgba(0, 0, 0, 0.1);

  animation: ${({ isOpen, shouldAnimate }) =>
    isOpen
      ? css`
          ${openMenu} 400ms
        `
      : shouldAnimate
      ? css`
          ${closeMenu} 300ms
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
  const menuEl = useRef<HTMLDivElement>(null);
  const toggleButtonEl = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTimeout(() => {
      enableAnimations.current = true;
    }, 5);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      !menuEl.current?.contains(event.target as Node) &&
      !toggleButtonEl.current?.contains(event.target as Node)
    ) {
      closeMenu();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const closeMenu = () => {
    window.onscroll = null;
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    window.onscroll = isOpen ? null : closeMenu;
  };

  const scrollToSection = (number: number) => {
    document
      .getElementById(`section${number}`)
      ?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const scrollToSection1 = () => scrollToSection(1);
  const scrollToSection2 = () => scrollToSection(2);
  const scrollToSection3 = () => scrollToSection(3);
  const scrollToSection4 = () => scrollToSection(4);

  return (
    <>
      <MenuContainer
        ref={menuEl}
        isOpen={isOpen}
        shouldAnimate={enableAnimations.current}
      >
        <MenuLinkContainer isOpen={isOpen}>
          <MenuLink onClick={scrollToSection1}>Home</MenuLink>
          <MenuLink onClick={scrollToSection2}>About</MenuLink>
          <MenuLink onClick={scrollToSection3}>My work</MenuLink>
          <MenuLink onClick={scrollToSection4}>Contact</MenuLink>
        </MenuLinkContainer>
      </MenuContainer>
      <ButtonContainer>
        <ToggleMenuButton
          ref={toggleButtonEl}
          aria-label="toggle-menu"
          onClick={toggleMenu}
          isOpen={isOpen}
        >
          <MenuIcon isOpen={isOpen} />
        </ToggleMenuButton>
      </ButtonContainer>
    </>
  );
}

export default Menu;
