import React from "react";

import { useTranslation } from "gatsby-plugin-react-i18next";

import data from "data/data";

import { colors } from "styles/colors";
import {
  ClientsContainer,
  ClientsIntro,
  ClientsTitle,
  ClientsDescription,
} from "./styles";

import { SectionWrapper } from "styles/globalStyles";
import List from "components/shared/List";
import ClientItem from "./ClientItem";

export default function ClientsSection() {
  const { t } = useTranslation();
  const { clients } = data;

  const renderItem = ({ item }) => {
    const { id, img } = item;
    return <ClientItem key={id} logo={img} />;
  };
  return (
    <ClientsContainer color={colors["primary-purple"]}>
      <SectionWrapper>
        <ClientsIntro>
          <ClientsTitle color="white" marginBottom>
            {t("homepage.clientsSection.title")}
          </ClientsTitle>
          <ClientsDescription color={"white"}>
            {t("homepage.clientsSection.description")}
          </ClientsDescription>
        </ClientsIntro>
        <List items={clients} renderItem={renderItem} center />
      </SectionWrapper>
    </ClientsContainer>
  );
}
