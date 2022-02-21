import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { useTranslation, Trans } from "gatsby-plugin-react-i18next";

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

import PrinciplesSection from "../PrinciplesSection";

export default function ProfileSection() {
  const { t } = useTranslation();
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
                <Trans i18nKey={"aboutpage.profileSection.title"}>
                  ¿<ProfileHighlight>Quiénes</ProfileHighlight> Somos?
                </Trans>
              </ProfileTitle>
              <Text left>{t("aboutpage.profileSection.description")}</Text>
            </ProfileTextWrapper>
            <PrinciplesSection />
          </ProfileRow>
        </ProfileWrapper>
      </ProfileContainer>
    </>
  );
}
