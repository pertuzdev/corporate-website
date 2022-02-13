import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import { Text } from "styles/globalStyles";
import {
  SocialContainer,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./styles";

export default function Social() {
  return (
    <SocialContainer>
      <Text>Siguenos!</Text>
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
    </SocialContainer>
  );
}
