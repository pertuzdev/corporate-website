import React from "react";

import { useTranslation } from "gatsby-plugin-react-i18next";

import {
  FaRegAddressBook,
  FaPhoneAlt,
  FaWhatsapp,
  FaRegEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  FooterSubscription,
  FooterContactAndNav,
  ContactInfoContainer,
  ContactInfoWrapper,
  ContactInfoItem,
  FooterSubText,
  FooterSubHeading,
  FooterLinksContainer,
  FooterLinksWrapper,
  NavLogo,
  NavIcon,
  BoldSpan,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./styles";

import { Button } from "components/shared/Button";

import logo from "assets/img/brand-identity/logo-mobile.svg";

function Footer({ footerColor }) {
  const { t } = useTranslation();
  return (
    <FooterContainer color={footerColor}>
      <FooterWrapper>
        <FooterSubscription>
          <FooterSubHeading>{t("homepage.footer.intro")}</FooterSubHeading>
          <Button big to="/contact">
            {t("buttons.contact")}
          </Button>
        </FooterSubscription>
        <FooterContactAndNav>
          <ContactInfoContainer>
            <NavLogo to="/">
              <NavIcon src={logo} alt="catech_logo" />
              CA<BoldSpan>TECH</BoldSpan>
            </NavLogo>
            <ContactInfoWrapper>
              <ContactInfoItem>
                <FaRegAddressBook />
                <FooterSubText>
                  Start Oficinas, Calle La Reforma #209, San Salvador
                </FooterSubText>
              </ContactInfoItem>
              <ContactInfoItem>
                <FaPhoneAlt />
                <FooterSubText>+503 2351 1960</FooterSubText>
              </ContactInfoItem>
              <ContactInfoItem>
                <FaWhatsapp />
                <FooterSubText>+503 7496 3874</FooterSubText>
              </ContactInfoItem>
              <ContactInfoItem>
                <FaRegEnvelope />
                <FooterSubText>info@catech.com.sv</FooterSubText>
              </ContactInfoItem>
            </ContactInfoWrapper>
          </ContactInfoContainer>
          <FooterLinksContainer>
            <FooterLinksWrapper hasMarginRight>
              <FooterLinkItems>
                <FooterLinkTitle>
                  {t("homepage.footer.aboutSection.title")}
                </FooterLinkTitle>
                <FooterLink to="/about/#whoWeAre">
                  {t("homepage.footer.aboutSection.aboutus")}
                </FooterLink>
                <FooterLink to="/about/#whyUs">
                  {t("homepage.footer.aboutSection.whyus")}
                </FooterLink>
                <FooterLink to="/about/#missionAndVission">
                  {t("homepage.footer.aboutSection.mission")}
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper hasMarginLeft>
              <FooterLinkItems>
                <FooterLinkTitle>
                  {t("homepage.footer.servicesSection.title")}
                </FooterLinkTitle>
                <FooterLink to="/services">
                  {t("homepage.footer.servicesSection.webDev")}
                </FooterLink>
                <FooterLink to="/services">
                  {t("homepage.footer.servicesSection.appDev")}
                </FooterLink>
                <FooterLink to="/services">
                  {t("homepage.footer.servicesSection.digitalMarketing")}
                </FooterLink>
                <FooterLink to="/services">
                  {t("homepage.footer.servicesSection.socialMedia")}
                </FooterLink>
                <FooterLink to="/services">
                  {t("homepage.footer.servicesSection.branding")}
                </FooterLink>
                <FooterLink to="/services">
                  {t("homepage.footer.servicesSection.questions")}
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterContactAndNav>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/catechsv"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/catechsv"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/company/central-american-technologies-s-a-de-c-v"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
            <WebsiteRights>
              2021©CATECH. Todos los derechos reservados.
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
