import React from "react";
import { withResizeDetector } from "react-resize-detector";

interface ResizeProps {
  height: number;
  width: number;
}

function withResponsiveWrapper(Component: any) {
  const CustomComponent = (props: ResizeProps) => {
    const { height, width } = props;
    const isMobile = height > width;

    const newProps = { ...props, isMobile };
    return <Component {...newProps} />;
  };

  return withResizeDetector(CustomComponent);
}

export default withResponsiveWrapper;
