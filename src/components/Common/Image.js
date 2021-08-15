import React from "react";

import { ImgContainer, Img } from "./Image.style";

export default function Image({
  width = "fit-content",
  height = "fit-content",
  src,
  alt = "catech image",
}) {
  return (
    <ImgContainer w={width} h={height}>
      <Img src={src} alt={alt} />
    </ImgContainer>
  );
}
