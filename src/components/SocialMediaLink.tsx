import { ReactNode } from "react";
import styled from "styled-components";

import ButtonBase from "@/components/ButtonBase";

const Button = styled(ButtonBase)`
  margin: 8px;
  height: 32px;
  width: 32px;
  color: #fff;
`;

interface Props {
  ariaLabel?: string;
  href: string;
  icon: ReactNode;
}

function SocialMediaLink({ ariaLabel, href, icon }: Props) {
  return (
    <Button
      as="a"
      aria-label={ariaLabel}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      {icon}
    </Button>
  );
}

export default SocialMediaLink;
