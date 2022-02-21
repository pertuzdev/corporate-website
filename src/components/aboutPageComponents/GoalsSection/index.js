import React from "react";

import { useTranslation } from "gatsby-plugin-react-i18next";

import {
  GoalsContainer,
  GoalsSectionWrapper,
  GoalsWrapper,
  GoalsDescription,
  GoalsTitle,
} from "./styles";

import { colors } from "styles/colors";

export default function GoalsSection() {
  const { t } = useTranslation();
  return (
    <>
      <div id="missionAndVission"></div>
      <GoalsContainer color={colors["primary-purple"]}>
        <GoalsSectionWrapper>
          <GoalsWrapper>
            <GoalsTitle color="white">
              {t("aboutpage.goalsSection.missionStatement.title")}
            </GoalsTitle>
            <GoalsDescription color="white">
              {t("aboutpage.goalsSection.missionStatement.description")}
            </GoalsDescription>
          </GoalsWrapper>
          <GoalsWrapper>
            <GoalsTitle color="white">
              {t("aboutpage.goalsSection.visionStatement.title")}
            </GoalsTitle>
            <GoalsDescription color="white">
              {t("aboutpage.goalsSection.visionStatement.description")}
            </GoalsDescription>
          </GoalsWrapper>
        </GoalsSectionWrapper>
      </GoalsContainer>
    </>
  );
}
