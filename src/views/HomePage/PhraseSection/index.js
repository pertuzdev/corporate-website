import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { PhraseSectionRow, PhraseSectionIntro, PSImgContainer } from "./styles";
import { SectionContainer, SectionWrapper } from "styles/globalStyles";
import { Title } from "components/common/texts.styles";
import { colors } from "styles/colors";
import { Img } from "components/common/Image.styles";
import Section from "components/Section";

import rocket2 from "assets/img/homepage/rocket.png";

export default function PhraseSection() {
  const rocket = "../../../assets/img/homepage/rocket.png";
  const INTRO =
    "Creamos contenido digital que impacte a tus clientes para que no" +
    "dejen de hablar de tu marca.";
  return (
    <Section
      secColor={colors["white-light"]}
      title="impulsamos tu marca"
      titleColor={colors["secondary-blue"]}
      secIntro={INTRO}
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
