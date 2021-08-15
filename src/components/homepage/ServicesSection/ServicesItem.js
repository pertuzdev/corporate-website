import React from "react";

import Image from "components/Common/Image";
import {
  ServicesItemContainer,
  Img,
  ServiceDescription,
  ServiceItemTitle,
  ServiceImgWrapper,
} from "./styles";

export default function ServicesItem({ img, altText, title, description }) {
  return (
    <ServicesItemContainer>
      <Image width="124px" height="121.23px" src={img} alt={altText} />
      <ServiceItemTitle>{title}</ServiceItemTitle>
      <ServiceDescription>{description}</ServiceDescription>
    </ServicesItemContainer>
  );
}
