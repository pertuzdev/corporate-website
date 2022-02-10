import React from "react";

import { colors } from "styles/colors";

import Card from "components/Card";
import Section from "components/Section";
import List from "components/List";
import { services } from "./ServiceData";

export default function ServicesSection() {
  const renderItem = ({ item }) => {
    const { id, image, altText, title, description } = item;
    return (
      <Card
        key={id}
        imgWidth="124px"
        imgHeight="121.23px"
        img={image}
        altText={altText}
        title={title}
        desc={description}
      />
    );
  };
  return (
    <Section title="servicios" titleColor={colors["secondary-blue"]}>
      <List items={services} renderItem={renderItem} />
    </Section>
  );
}
