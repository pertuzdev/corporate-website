import React from "react";

import { StyledImgContainer, StyledCardImgContainer, Img } from "./styles";

const handleWrapping = (Component, props) => {
  const { src, alt, width, height } = props;

  return (
    <Component width={width} height={height}>
      <Img src={src} alt={alt} />
    </Component>
  );
};

export const Image = (props) => handleWrapping(StyledImgContainer, props);

export const CardImage = (props) =>
  handleWrapping(StyledCardImgContainer, props);
