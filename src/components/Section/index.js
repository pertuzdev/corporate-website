import React from "react";

import { SectionContainer, SectionWrapper, SectionHeading } from "./styles";
import { Title, Text } from "components/elements/texts.styles";

export default function Section({
  secColor,
  title,
  titleColor,
  secIntro,
  introSize,
  children,
  titleMarginBottom = true,
}) {
  return (
    <SectionContainer color={secColor}>
      <SectionWrapper>
        {title ? (
          <SectionHeading marginBottom={titleMarginBottom}>
            <Title color={titleColor} marginBottom={titleMarginBottom}>
              {title.toUpperCase()}
            </Title>
            {secIntro ? <Text fontSize={introSize}>{secIntro}</Text> : <></>}
          </SectionHeading>
        ) : (
          <></>
        )}
        {children}
      </SectionWrapper>
    </SectionContainer>
  );
}
