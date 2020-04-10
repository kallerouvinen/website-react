import React from "react";
import { withResizeDetector } from "react-resize-detector";

interface ResizeProps {
  height: number;
  width: number;
}

interface SizeProps extends ResizeProps {
  aspectRatio: "mobile" | "normal" | "wide";
  isMobile: boolean;
  isNormal: boolean;
  isWide: boolean;
  mobileBreakpoint: number;
  wideBreakpoint: number;
}

export interface ResponsiveWrapperProps {
  size: SizeProps;
}

// TODO: Typing
export function withResponsiveWrapper(Component: any) {
  const CustomComponent = (props: ResizeProps) => {
    const { height, width } = props;

    const aspectRatio =
      height > 1.25 * width
        ? "mobile"
        : width / height <= 16 / 9
        ? "normal"
        : "wide";

    const isMobile = aspectRatio === "mobile";
    const isNormal = aspectRatio === "normal";
    const isWide = aspectRatio === "wide";

    const mobileBreakpoint = height / 1.25;
    const wideBreakpoint = (16 / 9) * height;

    const newProps = {
      size: {
        ...props,
        aspectRatio,
        isMobile,
        isNormal,
        isWide,
        mobileBreakpoint,
        wideBreakpoint,
      },
    };
    return <Component {...newProps} />;
  };

  return withResizeDetector(CustomComponent);
}
