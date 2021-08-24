import React from "react";

import { colors } from "styles/colors";

import {
  CoverContainer,
  CoverWrapper,
  CoverRow,
  CoverSocialMedia,
  SocialIconLink,
  TextWrapper,
  CoverTitle,
  Highlight,
  CoverIntro,
  CoverButton,
} from "./styles";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import img from "assets/img/cover-image.png";
import Image from "components/common/Image";

export default function Cover() {
  return (
    <CoverContainer color={colors["lighter-white"]}>
      <CoverWrapper>
        <CoverRow maxWidth550 maxWidth450 center coverHeading flexStart>
          <TextWrapper>
            <CoverTitle>
              DE LA <Highlight>IDEA</Highlight> A LA REALIDAD
              <Highlight>.</Highlight>
            </CoverTitle>
            <CoverIntro left>
              Creamos asombrosas estrategias de marketing digital y excelentes
              productos de software.
            </CoverIntro>
          </TextWrapper>
          <CoverButton primary big>
            Contáctanos
          </CoverButton>
        </CoverRow>
        <CoverRow maxWidth550 center flexEnd>
          <Image
            width="555px"
            height="555px"
            src={img}
            alt="person animated with computer"
          />
        </CoverRow>
      </CoverWrapper>
      <CoverSocialMedia>
        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
          <FaFacebook />
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
          <FaInstagram />
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialIconLink>
      </CoverSocialMedia>
    </CoverContainer>
  );
}
