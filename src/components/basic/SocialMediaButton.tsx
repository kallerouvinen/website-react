import { ReactNode } from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

const Button = styled(IconButton)`
  > * {
    color: #fff;
  }
`;

interface Props {
  ariaLabel?: string;
  href: string;
  icon: ReactNode;
}

function SocialMediaButton({ ariaLabel, href, icon }: Props) {
  return (
    <a
      aria-label={ariaLabel}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Button aria-label={ariaLabel}>{icon}</Button>
    </a>
  );
}

export default SocialMediaButton;
