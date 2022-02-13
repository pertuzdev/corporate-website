import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { IconContext } from "react-icons";
import { FaRegStar, FaRegLightbulb, FaPalette } from "react-icons/fa";
import { colors } from "styles/colors";

import Card from "components/shared/Card";
import Section from "components/shared/Section";

import { WhyUsImgWrapper, WhyUsList, WhyUsRow } from "./styles";

export default function WhyUsSection() {
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
                title="Excelencia"
                desc="Nuestro equipo no solo desarrolla. Resuelve con soluciones de alto nivel."
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
                title="Innovación"
                desc="Queremos ir un paso más allá, creando productos que hagan una
                  diferencia, que innoven."
              />
            </WhyUsRow>
            <Card
              img={FaPalette}
              altText="Icon"
              title="Creatividad"
              desc="Somos un equipo creativo que busca que tu idea sea única."
            />
          </IconContext.Provider>
        </WhyUsList>
      </Section>
    </>
  );
}
