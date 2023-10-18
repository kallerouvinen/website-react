import styled from "styled-components";

const inBezier = "cubic-bezier(0.55, 0.05, 0.67, 0.2)";
const outBezier = "cubic-bezier(0.2, 0.6, 0.35, 1)";

interface MenuIconProps {
  isOpen: boolean;
}

const MenuIcon = styled.span<MenuIconProps>`
  position: absolute;
  display: block;
  width: 24px;
  height: 3px;
  background-color: #fff;
  border-radius: 2px;
  transition: transform 0.2s ${inBezier};

  &::before,
  &::after {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 2px;
    content: "";
  }
  &::before {
    bottom: 8px;
    transition:
      bottom 0.1s ${inBezier} 0.2s,
      transform 0.2s ${inBezier};
  }
  &::after {
    top: 8px;
    transition:
      top 0.1s ${inBezier} 0.2s,
      transform 0.2s ${inBezier};
  }

  ${({ isOpen }) =>
    isOpen &&
    `
      transition: transform 0.2s ${outBezier} 0.1s;
      transform: rotate(135deg);
      &::before {
        transition: bottom 0.1s ${outBezier}, transform 0.2s ${outBezier} 0.1s;
        bottom: 0;
        transform: rotate(90deg);
      }
      &::after {
        transition: top 0.1s ${outBezier}, transform 0.2s ${outBezier} 0.1s;
        top: 0;
        transform: rotate(90deg);
      }
    `}
`;

MenuIcon.defaultProps = {
  isOpen: false,
};

export default MenuIcon;
