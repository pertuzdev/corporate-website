import React from "react";

import { colors } from "styles/colors";

import { Text } from "components/common/texts.styles";
import Image from "components/common/Image";

import {
  ProfileContainer,
  ProfileRow,
  ProfileTitle,
  ProfileWrapper,
  ProfileHighlight,
  ProfileTextWrapper,
} from "./styles";

import img from "../../../assets/img/about-profile-img.png";
import Principles from "../Principles";

export default function ProfileSection() {
  return (
    <>
      <div id="whoWeAre"></div>
      <ProfileContainer color={colors["lighter-white"]}>
        <ProfileWrapper>
          <ProfileRow justifyContent="center" maxWidth550 center alignStart>
            <Image
              width="455px"
              height="455px"
              src={img}
              alt="Illustration of person with VR glasses"
            />
          </ProfileRow>
          <ProfileRow
            maxWidth550
            center
            coverHeading
            alignStart
            justifyContent="flex-start"
          >
            <ProfileTextWrapper>
              <ProfileTitle marginBottom>
                ¿<ProfileHighlight>Quiénes</ProfileHighlight> Somos?
              </ProfileTitle>
              <Text left>
                CATECH es una empresa que nace en El Salvador con el propósito
                de servir a todo negocio que necesite llevar a cabo la
                implementación de proyectos de desarrollo de software y
                marketing digital o requieran renovar su imagen corporativa y
                digitalizar sus procesos. Nuestro equipo de profesionales
                cumplirá con sus objetivos de forma satisfactoria ya que
                priorizamos la creatividad y calidad en nuestro trabajo. Nuestro
                objetivo es brindarle las herramientas digitales y la asesoría
                necesaria para empoderarlo en este mundo digital, buscamos que
                su empresa pueda ser escalable, competitiva y eficiente.
              </Text>
            </ProfileTextWrapper>
            <Principles />
          </ProfileRow>
        </ProfileWrapper>
      </ProfileContainer>
    </>
  );
}
