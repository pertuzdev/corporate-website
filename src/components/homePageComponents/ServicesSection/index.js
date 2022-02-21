import React from "react";

import { useTranslation } from "gatsby-plugin-react-i18next";

import data from "data/data";

import { colors } from "styles/colors";

import Card from "components/shared/Card";
import Section from "components/shared/Section";
import List from "components/shared/List";

export default function ServicesSection() {
  const { t } = useTranslation();
  const { services } = data;
  const renderItem = ({ item }) => {
    const {
      id,
      icon,
      altText,
      name,
      short_description,
      trans_key: transKey,
    } = item;
    return (
      <Card
        key={id}
        imgWidth="124px"
        imgHeight="121.23px"
        img={icon}
        altText={altText}
        title={t(`homepage.servicesSection.services.${transKey}.title`)}
        transKey={transKey}
        desc={t(`homepage.servicesSection.services.${transKey}.description`)}
      />
    );
  };
  return (
    <Section
      title={t("homepage.servicesSection.title")}
      titleColor={colors["secondary-blue"]}
    >
      <List items={services} renderItem={renderItem} />
    </Section>
  );
}
