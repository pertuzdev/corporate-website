import React from "react";

import { Text } from "components/common/texts.styles";
import Card from "components/Card";

import {
  Img,
  ServiceTitle,
  SectionDescriptionWrapper,
  ServiceDescriptionSC,
  ServiceSteps,
  ServiceStepsTitle,
  ServiceStepsList,
  ServiceTools,
  ServiceToolsTitle,
  ServiceToolsList,
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
  return (
    <ServiceDescriptionSC>
      <SectionDescriptionWrapper>
        <Img src={icon} alt={"imagen del servicio"} />
        <ServiceTitle>{name}</ServiceTitle>
        <Text>{description}</Text>
        <ServiceSteps>
          <ServiceStepsTitle>¿Cómo procedemos?</ServiceStepsTitle>
          <Text>
            We take care of every project with our standardized method,
            providing clear process from the beginning until final delivery.
          </Text>
          <ServiceStepsList>
            {stepsToFollow.map((step) => {
              if (step) {
                const { icon, altText, title, desc } = step;
                return (
                  <Card
                    cardWidth="25%"
                    width="214px"
                    height="211.23px"
                    img={icon}
                    altText={altText}
                    title={title}
                    desc={desc}
                  />
                );
              } else {
                return <></>;
              }
            })}
          </ServiceStepsList>
        </ServiceSteps>
        <ServiceTools>
          <ServiceToolsTitle>Herramientas</ServiceToolsTitle>
          <Text>
            Ocupamos las mejores herramientas en el desarrollo de software
          </Text>
          <ServiceToolsList>
            {tools.map((tool) => (
              <ToolItemContainer>
                <ToolIcon
                  src={tool}
                  alt={"Logo de herramienta de desarrollo de software"}
                />
              </ToolItemContainer>
            ))}
          </ServiceToolsList>
        </ServiceTools>
      </SectionDescriptionWrapper>
    </ServiceDescriptionSC>
  );
}
