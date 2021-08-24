import React from "react";

import { services } from "./ServiceData";

import ServicesItem from "./ServicesItem";

import { ServicesList } from "./styles";

import { colors } from "styles/colors";

import Card from "components/Card";
import Section from "components/Section";

export default function ServicesSection() {
  return (
    <Section title="servicios" titleColor={colors["secondary-blue"]}>
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
    </Section>
  );
}
