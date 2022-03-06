import React from "react";

import { SectionHeading } from "./styles";
import {
  Title,
  Text,
  SectionContainer,
  SectionWrapper,
} from "styles/globalStyles";

export default function Section({
  secColor,
  title,
  titleColor,
  secIntro,
  introSize,
  children,
  titleMarginBottom = true,
  animated,
}) {
  return (
    <SectionContainer color={secColor} animated={animated}>
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
