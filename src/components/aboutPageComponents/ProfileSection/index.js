import React from "react";

import { colors } from "styles/colors";

import { Text } from "styles/globalStyles";

import {
  ProfileContainer,
  ProfileRow,
  ProfileTitle,
  ProfileWrapper,
  ProfileHighlight,
  ProfileTextWrapper,
} from "./styles";

import img from "assets/img/aboutpage/about-profile-img.png";
import PrinciplesSection from "../PrinciplesSection";
import { StaticImage } from "gatsby-plugin-image";

export default function ProfileSection() {
  const imgSrc = "../../../assets/img/aboutpage/about-profile-img.png";
  return (
    <>
      <div id="whoWeAre"></div>
      <ProfileContainer color={colors["lighter-white"]}>
        <ProfileWrapper>
          <ProfileRow justifyContent="center" maxWidth550 center alignStart>
            <StaticImage
              src={imgSrc}
              alt="Illustration of person with VR glasses"
              placeholder="blurred"
              layout="fixed"
              width={455}
              height={455}
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
            <PrinciplesSection />
          </ProfileRow>
        </ProfileWrapper>
      </ProfileContainer>
    </>
  );
}