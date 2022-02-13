import React from "react";

import data from "data/data";

import { colors } from "styles/colors";

import Card from "components/shared/Card";
import Section from "components/shared/Section";
import List from "components/shared/List";

export default function ServicesSection() {
  const { services } = data;
  const renderItem = ({ item }) => {
    const { id, icon, altText, name, short_description } = item;
    return (
      <Card
        key={id}
        imgWidth="124px"
        imgHeight="121.23px"
        img={icon}
        altText={altText}
        title={name}
        desc={short_description}
      />
    );
  };
  return (
    <Section title="servicios" titleColor={colors["secondary-blue"]}>
      <List items={services} renderItem={renderItem} />
    </Section>
  );
}
