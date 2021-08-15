import React from "react";

import { ImgContainer, Img } from "./Image.style";

export default function Image({
  width = "fit-content",
  height = "fit-content",
  src,
  alt = "catech image",
}) {
  return (
    <ImgContainer width={width} height={height}>
      <Img src={src} alt={alt} />
    </ImgContainer>
  );
}
