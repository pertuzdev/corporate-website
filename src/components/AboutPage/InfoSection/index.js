import React from "react";

import {
  InfoContainer,
  InfoSectionWrapper,
  InfoIntro,
  InfoDescription,
  InfoTitle,
} from "./styles";

import { colors } from "styles/colors";

export default function InfoSection() {
  return (
    <InfoContainer color={colors["primary-purple"]}>
      <InfoSectionWrapper>
        <InfoIntro>
          <InfoTitle color="white">Misión</InfoTitle>
          <InfoDescription color="white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            deleniti dolor impedit, incidunt laborum nisi nobis quas sequi. At
            id, iure nihil quod recusandae similique suscipit. Beatae
            consequatur corporis soluta.
          </InfoDescription>
        </InfoIntro>
        <InfoIntro>
          <InfoTitle color="white">Visión</InfoTitle>
          <InfoDescription color="white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            deleniti dolor impedit, incidunt laborum nisi nobis quas sequi. At
            id, iure nihil quod recusandae similique suscipit. Beatae
            consequatur corporis soluta.
          </InfoDescription>
        </InfoIntro>
      </InfoSectionWrapper>
    </InfoContainer>
  );
}
