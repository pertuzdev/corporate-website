import React from "react";

import { useTranslation } from "gatsby-plugin-react-i18next";

import {
  ProfilePrinciples,
  PrincipleItem,
  PrincipleText,
} from "./Principles.styles";

import { FaHandHoldingHeart } from "react-icons/fa";

const PrinciplesSection = () => {
  const { t } = useTranslation();
  return (
    <ProfilePrinciples>
      <PrincipleItem>
        <FaHandHoldingHeart />
        <PrincipleText>
          {t("aboutpage.principlesSection.principles.passion")}
        </PrincipleText>
      </PrincipleItem>
      <PrincipleItem>
        <FaHandHoldingHeart />
        <PrincipleText>
          {t("aboutpage.principlesSection.principles.excellence")}
        </PrincipleText>
      </PrincipleItem>
      <PrincipleItem>
        <FaHandHoldingHeart />
        <PrincipleText>
          {t("aboutpage.principlesSection.principles.authenticity")}
        </PrincipleText>
      </PrincipleItem>
    </ProfilePrinciples>
  );
};

export default PrinciplesSection;
