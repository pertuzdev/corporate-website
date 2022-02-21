import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { IconContext } from "react-icons";
import { FaRegStar, FaRegLightbulb, FaPalette } from "react-icons/fa";
import { colors } from "styles/colors";

import Card from "components/shared/Card";
import Section from "components/shared/Section";

import { WhyUsImgWrapper, WhyUsList, WhyUsRow } from "./styles";

export default function WhyUsSection() {
  const { t } = useTranslation();
  const imgSrc = "../../../assets/img/aboutpage/why-us-image.png";
  return (
    <>
      <div id="whyUs"></div>
      <Section title="¿Por qué nosotros?">
        <WhyUsList>
          <IconContext.Provider value={{ color: colors["primary-purple"] }}>
            <WhyUsRow>
              <Card
                img={FaRegStar}
                altText="Icon"
                title={t("aboutpage.whyUsSection.excellence.title")}
                desc={t("aboutpage.whyUsSection.excellence.description")}
              />
              <WhyUsImgWrapper>
                <StaticImage
                  src={imgSrc}
                  alt="Illustration of a boy working on a desk with computers"
                  placeholder="blurred"
                  layout="fixed"
                  width={309}
                  height={309}
                />
              </WhyUsImgWrapper>
              <Card
                img={FaRegLightbulb}
                altText="Icon"
                title={t("aboutpage.whyUsSection.innovation.title")}
                desc={t("aboutpage.whyUsSection.innovation.description")}
              />
            </WhyUsRow>
            <Card
              img={FaPalette}
              altText="Icon"
              title={t("aboutpage.whyUsSection.creativity.title")}
              desc={t("aboutpage.whyUsSection.excellence.description")}
            />
          </IconContext.Provider>
        </WhyUsList>
      </Section>
    </>
  );
}
