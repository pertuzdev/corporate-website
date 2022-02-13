import React from "react";
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
  FooterButton,
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
  return (
    <FooterContainer color={footerColor}>
      <FooterWrapper>
        <FooterSubscription>
          <FooterSubHeading>
            ¿Interesado en nuestros servicios?
          </FooterSubHeading>
          <Button big to="/contact">
            Contáctanos
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
                <FooterLinkTitle>NOSOTROS</FooterLinkTitle>
                <FooterLink to="/about/#whoWeAre">¿Quiénes somos?</FooterLink>
                <FooterLink to="/about/#whyUs">¿Por qué nosotros?</FooterLink>
                <FooterLink to="/about/#missionAndVission">
                  Nuestra Misión
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper hasMarginLeft>
              <FooterLinkItems>
                <FooterLinkTitle>SERVICIOS</FooterLinkTitle>
                <FooterLink to="/services">Desarrollo de Sitios web</FooterLink>
                <FooterLink to="/services">
                  Desarrollo de Aplicaciones móviles
                </FooterLink>
                <FooterLink to="/services">
                  Marketing en redes sociales
                </FooterLink>
                <FooterLink to="/services">Branding</FooterLink>
                <FooterLink to="/services">Preguntas</FooterLink>
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
