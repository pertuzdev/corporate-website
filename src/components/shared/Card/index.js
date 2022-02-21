import React from "react";

import { useTranslation } from "gatsby-plugin-react-i18next";

import { CardContainer, ImgWrapper, CardDesc, CardTitle } from "./styles";

import { CardImage } from "components/shared/Image";

export default function Card({
  cardWidth,
  imgWidth,
  imgHeight,
  img,
  altText,
  title,
  transKey,
  desc,
}) {
  const Icon = img;

  const { t } = useTranslation();

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
