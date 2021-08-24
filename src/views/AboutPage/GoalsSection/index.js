import React from "react";

import {
  GoalsContainer,
  GoalsSectionWrapper,
  GoalsWrapper,
  GoalsDescription,
  GoalsTitle,
} from "./styles";

import { colors } from "styles/colors";

export default function GoalsSection() {
  return (
    <GoalsContainer color={colors["primary-purple"]}>
      <GoalsSectionWrapper>
        <GoalsWrapper>
          <GoalsTitle color="white">Misión</GoalsTitle>
          <GoalsDescription color="white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            deleniti dolor impedit, incidunt laborum nisi nobis quas sequi. At
            id, iure nihil quod recusandae similique suscipit. Beatae
            consequatur corporis soluta.
          </GoalsDescription>
        </GoalsWrapper>
        <GoalsWrapper>
          <GoalsTitle color="white">Visión</GoalsTitle>
          <GoalsDescription color="white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            deleniti dolor impedit, incidunt laborum nisi nobis quas sequi. At
            id, iure nihil quod recusandae similique suscipit. Beatae
            consequatur corporis soluta.
          </GoalsDescription>
        </GoalsWrapper>
      </GoalsSectionWrapper>
    </GoalsContainer>
  );
}
