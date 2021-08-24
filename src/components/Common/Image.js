import React from "react";

import { ImgContainer, Img } from "./Image.styles";

export default function Image({
  width = "fit-content",
  height = "fit-content",
  src,
  alt = "catech image",
  isCard = false,
}) {
  console.log(isCard, "isCard");
  return (
    <ImgContainer width={width} height={height} isCard={isCard}>
      <Img src={src} alt={alt} />
    </ImgContainer>
  );
}
