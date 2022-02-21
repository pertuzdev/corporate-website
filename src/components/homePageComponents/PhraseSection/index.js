import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { PhraseSectionRow, PSImgContainer } from "./styles";

import { colors } from "styles/colors";

import Section from "components/shared/Section";

export default function PhraseSection() {
  const { t } = useTranslation();
  const rocket = "../../../assets/img/homepage/rocket.png";

  return (
    <Section
      secColor={colors["white-light"]}
      title={t("homepage.phraseSection.title")}
      titleColor={colors["secondary-blue"]}
      secIntro={t("homepage.phraseSection.description")}
      introSize="1.7rem"
    >
      <PhraseSectionRow>
        <PSImgContainer>
          <StaticImage
            src={rocket}
            alt="Illustration of rocket with colored lines"
            placeholder="blurred"
            layout="constrained"
            width={400}
            height={400}
          />
        </PSImgContainer>
      </PhraseSectionRow>
    </Section>
  );
}
