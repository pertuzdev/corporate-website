import React from "react";

import { CardContainer, ImgWrapper, CardDesc, CardTitle } from "./styles";
import { CardImage } from "components/shared/Image";

export default function Card({
  cardWidth,
  imgWidth,
  imgHeight,
  img,
  altText,
  title,
  desc,
}) {
  const Icon = img;

  return (
    <CardContainer cardWidth={cardWidth}>
      {typeof img === "string" ? (
        <CardImage
          src={img}
          alt={altText}
          width={imgWidth}
          height={imgHeight}
        />
      ) : (
        <Icon />
      )}
      <CardTitle>{title}</CardTitle>
      <CardDesc>{desc}</CardDesc>
    </CardContainer>
  );
}
