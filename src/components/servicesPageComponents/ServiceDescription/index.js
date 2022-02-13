import React from "react";

import { Text } from "styles/globalStyles";
import Card from "components/shared/Card";

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
            Cuidamos cada parte del proyecto con metodologías ágiles, que nos
            permite entregar productos de valor con transparencia y comunicación
            asertiva entre nuestros colaboradores y clientes en todo el proceso.
          </Text>
          <ServiceStepsList>
            {stepsToFollow.map((step) => {
              if (step) {
                const { id, icon, altText, title, desc } = step;
                return (
                  <Card
                    key={id}
                    cardWidth="25%"
                    imgWidth="214px"
                    imgHeight="211.23px"
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
        {tools && Object.keys(tools) === 0 && (
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
        )}
      </SectionDescriptionWrapper>
    </ServiceDescriptionSC>
  );
}
