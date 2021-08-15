import React from "react";

import rocket from "assets/img/rocket.png";

import { PhraseSectionRow, PhraseSectionIntro, PSImgContainer } from "./styles";
import { SectionContainer, SectionWrapper } from "styles/globalStyles";
import { Title } from "components/common/texts.style";
import { colors } from "styles/colors";
import { Img } from "components/Common/Image.style";

export default function PhraseSection() {
  return (
    <SectionContainer color={colors["white-light"]}>
      <SectionWrapper>
        <PhraseSectionRow marginBottom>
          <Title color={colors["secondary-blue"]}>IMPULSAMOS TU MARCA</Title>
        </PhraseSectionRow>
        <PhraseSectionRow marginBottom>
          <PhraseSectionIntro>
            Creamos contenido digital que impacte a tus clientes para que no
            dejen de hablar de tu marca.
          </PhraseSectionIntro>
        </PhraseSectionRow>
        <PhraseSectionRow>
          <PSImgContainer>
            <Img src={rocket} alt="Image of rocket with colors lines" />
          </PSImgContainer>
        </PhraseSectionRow>
      </SectionWrapper>
    </SectionContainer>
  );
}
