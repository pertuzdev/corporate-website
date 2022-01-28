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
    <>
      <div id="missionAndVission"></div>
      <GoalsContainer color={colors["primary-purple"]}>
        <GoalsSectionWrapper>
          <GoalsWrapper>
            <GoalsTitle color="white">Misión</GoalsTitle>
            <GoalsDescription color="white">
              Ofrecer y entregar soluciones tecnológicas creativas e
              innovadoras, adaptables a las necesidades de nuestros clientes en
              EL Salvador y Centroamerica, fomentando su desarrollo y
              productividad, mediante un equipo de profesionales en TIC
              altamente competitivo.
            </GoalsDescription>
          </GoalsWrapper>
          <GoalsWrapper>
            <GoalsTitle color="white">Visión</GoalsTitle>
            <GoalsDescription color="white">
              Ser una empresa competitiva que innove a la región en servicios y
              productos de TI que mejoren notablemente la productividad de las
              PYMES, reconocida en la región centroamericana, por las soluciones
              que entregamos, generando relaciones duraderas con clientes,
              proveedores y nuestra gente.
            </GoalsDescription>
          </GoalsWrapper>
        </GoalsSectionWrapper>
      </GoalsContainer>
    </>
  );
}
