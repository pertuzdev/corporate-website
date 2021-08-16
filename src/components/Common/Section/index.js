import React from "react";

import { SectionContainer, SectionWrapper, SectionHeading } from "./styles";
import { Title, Text } from "components/Common/texts.style";

export default function Section({
  secColor,
  title,
  titleColor,
  secIntro,
  introSize,
  children,
}) {
  return (
    <SectionContainer color={secColor}>
      <SectionWrapper>
        <SectionHeading>
          <Title color={titleColor} marginBottom>
            {title.toUpperCase()}
          </Title>
          {secIntro ? <Text fontSize={introSize}>{secIntro}</Text> : <></>}
        </SectionHeading>
        {children}
      </SectionWrapper>
    </SectionContainer>
  );
}
