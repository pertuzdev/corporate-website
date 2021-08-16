import React from "react";

import rocket from "assets/img/rocket.png";

import { PhraseSectionRow, PhraseSectionIntro, PSImgContainer } from "./styles";
import { SectionContainer, SectionWrapper } from "styles/globalStyles";
import { Title } from "components/common/texts.style";
import { colors } from "styles/colors";
import { Img } from "components/Common/Image.style";
import Section from "components/Common/Section";

export default function PhraseSection() {
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
          <Img src={rocket} alt="Image of rocket with colors lines" />
        </PSImgContainer>
      </PhraseSectionRow>
    </Section>
  );
}
