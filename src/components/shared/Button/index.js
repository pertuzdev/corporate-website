import React from "react";

import { Link } from "gatsby";

import { StyledButton } from "./styles";

const handleLinkWrapping = (Component, props) => {
  const { href, to, target, children, ...rest } = props;

  const button = <Component {...rest}>{children}</Component>;

  if (href)
    return (
      <a
        href={href}
        target={target || "_blank"}
        rel={!target ? "noopener noreferrer" : undefined}
      >
        {button}
      </a>
    );
  if (to) return <Link to={to}>{button}</Link>;
  return button;
};

export const Button = (props) => handleLinkWrapping(StyledButton, props);

export const OutlineButton = (props) =>
  handleLinkWrapping(StyledOutlineButton, props);
