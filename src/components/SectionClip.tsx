import styled from "styled-components";

interface ComponentProps {
  bgColor: string;
}

const Top = styled.div<ComponentProps>`
  flex-shrink: 0;
  background-color: ${({ bgColor }) => bgColor};

  height: 48px;
  @media (min-width: 600px) {
    height: 48px;
  }
  @media (min-width: 960px) {
    height: 60px;
  }
  @media (min-width: 1280px) {
    height: 72px;
  }
  @media (min-width: 1920px) {
    height: 96px;
  }
`;

const Bottom = styled.div<ComponentProps>`
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};

  clip-path: polygon(0 0, 100% 48px, 100% 100%, 0 100%);
  @media (min-width: 600px) {
    clip-path: polygon(0 0, 100% 48px, 100% 100%, 0 100%);
  }
  @media (min-width: 960px) {
    clip-path: polygon(0 0, 100% 60px, 100% 100%, 0 100%);
  }
  @media (min-width: 1280px) {
    clip-path: polygon(0 0, 100% 72px, 100% 100%, 0 100%);
  }
  @media (min-width: 1920px) {
    clip-path: polygon(0 0, 100% 96px, 100% 100%, 0 100%);
  }
`;

interface SectionClipProps {
  startColor: string;
  endColor: string;
}

function SectionClip({ startColor, endColor }: SectionClipProps) {
  return (
    <Top bgColor={startColor}>
      <Bottom bgColor={endColor} />
    </Top>
  );
}

export default SectionClip;
