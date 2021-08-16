import React from "react";

import { services } from "./ServiceData";

import ServicesItem from "./ServicesItem";

import { ServicesList } from "./styles";
import { SectionContainer, SectionWrapper } from "styles/globalStyles";
import { Title } from "components/Common/texts.style";
import { colors } from "styles/colors";
import Card from "components/Common/Card";

export default function ServicesSection() {
  return (
    <SectionContainer>
      <SectionWrapper>
        <Title color={colors["secondary-blue"]} marginBottom>
          SERVICIOS
        </Title>
        <ServicesList>
          {services.map(({ image, altText, title, description }) => (
            <Card
              key={title}
              width="124px"
              height="121.23px"
              img={image}
              altText={altText}
              title={title}
              desc={description}
            />
          ))}
        </ServicesList>
      </SectionWrapper>
    </SectionContainer>
  );
}
