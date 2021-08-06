import React from "react";

import { services } from "./ServiceData";

import ServicesItem from "./ServicesItem";

import { ServicesList } from "./styles";
import {
  SectionContainer,
  SectionWrapper,
  Colors,
  Title,
} from "styles/globalStyles";

export default function ServicesSection() {
  return (
    <SectionContainer>
      <SectionWrapper>
        <Title color={Colors["secondary-blue"]} marginBottom>
          SERVICIOS
        </Title>
        <ServicesList>
          {services.map(({ image, altText, title, description }) => (
            <ServicesItem
              key={title}
              img={image}
              altText={altText}
              title={title}
              description={description}
            />
          ))}
        </ServicesList>
      </SectionWrapper>
    </SectionContainer>
  );
}
