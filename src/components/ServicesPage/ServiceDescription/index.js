import React from "react";

import { colors } from "styles/colors";

import { Text } from "components/common/texts.style";

import {
  SectionContainer as SC,
  SectionWrapper,
} from "../../../styles/globalStyles";
import {
  Img,
  ServiceTitle,
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
  Tools,
  ToolsTitle,
  ToolsList,
  ToolItemContainer,
  ToolIcon,
} from "./styles";
import Card from "components/Common/Card";

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
        <Text>{description}</Text>
        <Steps>
          <StepsTitle>¿Cómo procedemos?</StepsTitle>
          <Text>
            We take care of every project with our standardized method,
            providing clear process from the beginning until final delivery.
          </Text>
          <StepsList>
            {stepsToFollow.map(({ icon, altText, title, desc }) => (
              <Card
                cardWidth="25%"
                width="214px"
                height="211.23px"
                img={icon}
                altText={altText}
                title={title}
                desc={desc}
              />
            ))}
          </StepsList>
        </Steps>
        <Tools>
          <ToolsTitle>Herramientas</ToolsTitle>
          <Text>
            Ocupamos las mejores herramientas en el desarrollo de software
          </Text>
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
