import React from "react";
import {
  SectionContainer as SC,
  SectionWrapper,
} from "../../../styles/globalStyles";
import {
  Img,
  ServiceTitle,
  ServiceDescriptionTxt,
  ServiceWorkType,
  SectionDescriptionWrapper,
  ServiceTools,
  ServiceDescriptionSC,
  Steps,
  StepItemContainer,
  StepDesc,
  StepItemTitle,
  Icon,
  StepsTitle,
  StepsList,
  StepsIntro,
  Tools,
  ToolsTitle,
  ToolsIntro,
  ToolsList,
  ToolItemContainer,
  ToolIcon,
} from "./styles";

export default function ServiceDescription({
  name,
  description,
  icon,
  tools,
  arreglo,
  stepsToFollow,
}) {
  console.log({ name, tools }, "QUE PEDOOOO");
  console.log(arreglo, "arregloDeImagenes");
  return (
    <ServiceDescriptionSC>
      <SectionDescriptionWrapper>
        <Img src={icon} alt={"imagen del servicio"} />
        <ServiceTitle>{name}</ServiceTitle>
        <ServiceDescriptionTxt>{description}</ServiceDescriptionTxt>
        <Steps>
          <StepsTitle>¿Cómo procedemos?</StepsTitle>
          <StepsIntro>
            We take care of every project with our standardized method,
            providing clear process from the beginning until final delivery.
          </StepsIntro>
          <StepsList>
            {stepsToFollow.map(({ icon, altText, title, desc }) => (
              <StepItemContainer>
                <Icon src={icon} alt={altText} />
                <StepItemTitle>{title}</StepItemTitle>
                <StepDesc>{desc}</StepDesc>
              </StepItemContainer>
            ))}
          </StepsList>
        </Steps>
        <Tools>
          <ToolsTitle>Herramientas</ToolsTitle>
          <ToolsIntro>
            Ocupamos las mejores herramientas en el desarrollo de software
          </ToolsIntro>
          <ToolsList>
            {tools.map((tool) => (
              <ToolItemContainer>
                <ToolIcon
                  src={tool}
                  alt={"Logo de herramienta de desarrollo de software"}
                />
              </ToolItemContainer>
            ))}
          </ToolsList>
        </Tools>
      </SectionDescriptionWrapper>
    </ServiceDescriptionSC>
  );
}
