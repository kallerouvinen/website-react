import { AnchorHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

import ButtonBase from "@/components/ButtonBase";

const LinkButton = styled(ButtonBase)`
  margin: 8px;
  height: 32px;
  width: 32px;
  color: #fff;
`;

interface SocialMediaLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ReactNode;
}

function SocialMediaLink({ icon, ...rest }: SocialMediaLinkProps) {
  return (
    <LinkButton {...rest} as="a" target="_blank" rel="noreferrer noopener">
      {icon}
    </LinkButton>
  );
}

export default SocialMediaLink;
