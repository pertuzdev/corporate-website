import React from "react";

import { colors } from "styles/colors";

import { Img } from "components/common/Image.styles";
import Card from "components/Card";
import Section from "components/Section";

import { WhyUsImgWrapper, WhyUsList, WhyUsRow } from "./styles";

import img from "assets/img/why-us-image.png";
import { IconContext } from "react-icons";
import { FaRegStar, FaRegLightbulb, FaPalette } from "react-icons/fa";

export default function WhyUs() {
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
              <WhyUsImgWrapper width="309px" height="309px">
                <Img src={img} alt="CoverImage" />
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
