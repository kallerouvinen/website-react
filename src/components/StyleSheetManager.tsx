import { ReactNode } from "react";
import {
  StyleSheetManager as SCStyleSheetManager,
  WebTarget,
} from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

interface StyleSheetManagerProps {
  children?: ReactNode;
}

function StyleSheetManager({ children }: StyleSheetManagerProps) {
  const shouldForwardProp = (propName: string, target: WebTarget) =>
    typeof target === "string" ? isPropValid(propName) : true;

  return (
    <SCStyleSheetManager shouldForwardProp={shouldForwardProp}>
      {children}
    </SCStyleSheetManager>
  );
}

export default StyleSheetManager;
