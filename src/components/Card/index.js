import React from "react";

import { IconContext } from "react-icons";

import { StaticImage } from "gatsby-plugin-image";

import { Img } from "components/common/Image.styles";
import {
  CardContainer,
  ImgWrapper,
  CardDesc,
  CardTitle,
  ServiceImgWrapper,
} from "./styles";
import { colors } from "styles/colors";

export default function Card({
  cardWidth,
  width,
  height,
  img,
  altText,
  title,
  desc,
}) {
  const Icon = img;

  return (
    <CardContainer cardWidth={cardWidth}>
      {typeof img === "string" ? (
        <ImgWrapper width={width} height={height}>
          <Img src={img} alt={altText} />
        </ImgWrapper>
      ) : (
        <Icon />
      )}
      <CardTitle>{title}</CardTitle>
      <CardDesc>{desc}</CardDesc>
    </CardContainer>
  );
}
