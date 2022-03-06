import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

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
  Link,
} from "./styles";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Cover() {
  const { t, i18n } = useTranslation();

  const imgSrc = "../../../assets/img/homepage/cover-image.png";
  return (
    <CoverContainer color={colors["lighter-white"]} animated>
      <CoverWrapper>
        <CoverRow maxWidth550 maxWidth450 center coverHeading flexStart>
          <TextWrapper>
            <CoverTitle>
              <Trans i18nKey="homepage.coverSection.coverPhrase">
                DE LA <Highlight>IDEA</Highlight> A LA REALIDAD
              </Trans>
              <Highlight>.</Highlight>
            </CoverTitle>
            <CoverIntro left>
              {t("homepage.coverSection.coverIntro")}
            </CoverIntro>
          </TextWrapper>
          <CoverButton primary big to="contact">
            {t("buttons.contact")}
          </CoverButton>
        </CoverRow>
        <CoverRow maxWidth550 center flexEnd>
          <StaticImage
            src={imgSrc}
            alt="Illustration of person with computer"
            placeholder="blurred"
            layout="constrained"
            width={555}
            height={555}
          />
        </CoverRow>
      </CoverWrapper>
      <CoverSocialMedia>
        <SocialIconLink target="_blank" aria-label="Facebook">
          <Link href="https://www.facebook.com/catechsv" target="_blank">
            <FaFacebook />
          </Link>
        </SocialIconLink>
        <SocialIconLink target="_blank" aria-label="Instagram">
          <Link href="https://www.instagram.com/catechsv" target="_blank">
            <FaInstagram />
          </Link>
        </SocialIconLink>
        <SocialIconLink target="_blank" aria-label="LinkedIn">
          <Link
            href="https://www.linkedin.com/company/central-american-technologies-s-a-de-c-v"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
        </SocialIconLink>
      </CoverSocialMedia>
    </CoverContainer>
  );
}
