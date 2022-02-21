import React from "react";

import { useTranslation } from "gatsby-plugin-react-i18next";

import { Text } from "styles/globalStyles";
import {
  ContactIntroContainer,
  ContactInfoTitle,
  List,
  ItemList,
} from "./styles";

const ContactIntro = () => {
  const { t } = useTranslation();
  return (
    <ContactIntroContainer>
      <ContactInfoTitle marginBottom>{t("contactPage.intro")}</ContactInfoTitle>
      <Text>{t("contactPage.suggestions.title")}</Text>
      <List>
        <ItemList>{`- ${t(
          "contactPage.suggestions.suggestions_items.0"
        )}`}</ItemList>
        <ItemList>{`- ${t(
          "contactPage.suggestions.suggestions_items.1"
        )}`}</ItemList>
        <ItemList>{`- ${t(
          "contactPage.suggestions.suggestions_items.0"
        )}`}</ItemList>
      </List>
    </ContactIntroContainer>
  );
};

export default ContactIntro;
