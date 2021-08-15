import React from "react";
import { SectionContainer, SectionWrapper } from "../../../styles/globalStyles";
import { TextWrapper } from "./styles";

import { Title } from "components/Common/texts.style";

export default function ServicesIntro() {
  const intro =
    "Todo lo que necesitas para llevar tu negocio al siguiente nivel";
  return (
    <SectionContainer>
      <SectionWrapper>
        <Title>{intro.toUpperCase()}</Title>
      </SectionWrapper>
    </SectionContainer>
  );
}
