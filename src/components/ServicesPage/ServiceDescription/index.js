import React from "react";
import { SectionWrapper } from "../../../styles/globalStyles";
import {
  Img,
  ServiceTitle,
  ServiceDescriptionTxt,
  ServiceWorkType,
  SectionDescriptionWrapper,
  ServiceTools,
} from "./styles";

export default function ServiceDescription({
  name,
  description,
  icon,
  worktype,
  tools,
}) {
  return (
    <SectionDescriptionWrapper>
      <Img src={icon} alt={"imagen del servicio"} />
      <ServiceTitle>{name}</ServiceTitle>
      <ServiceDescriptionTxt>{description}</ServiceDescriptionTxt>
      <ServiceTools>{tools[0]}</ServiceTools>
    </SectionDescriptionWrapper>
  );
}
