import React from "react";

import {
  ProfilePrinciples,
  PrincipleItem,
  PrincipleText,
} from "./Principles.styles";

import { FaHandHoldingHeart } from "react-icons/fa";

const Principles = () => {
  return (
    <ProfilePrinciples>
      <PrincipleItem>
        <FaHandHoldingHeart />
        <PrincipleText>Pasión</PrincipleText>
      </PrincipleItem>
      <PrincipleItem>
        <FaHandHoldingHeart />
        <PrincipleText>Excelencia</PrincipleText>
      </PrincipleItem>
      <PrincipleItem>
        <FaHandHoldingHeart />
        <PrincipleText>Autenticidad</PrincipleText>
      </PrincipleItem>
    </ProfilePrinciples>
  );
};

export default Principles;
