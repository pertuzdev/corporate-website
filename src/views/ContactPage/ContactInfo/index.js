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

import { ContactInfoWrapper, ContactInfoItem, ContactInfoText } from "./styles";

export default function ContactInfo() {
  return (
    <ContactInfoWrapper>
      <ContactInfoItem>
        <FaRegAddressBook />
        <ContactInfoText fontSize="16px" left>
          Start Oficinas, Calle La Reforma #209, San Salvador
        </ContactInfoText>
      </ContactInfoItem>
      <ContactInfoItem>
        <FaPhoneAlt />
        <ContactInfoText fontSize="16px" left>
          +503 2351 1960
        </ContactInfoText>
      </ContactInfoItem>
      <ContactInfoItem>
        <FaWhatsapp />
        <ContactInfoText fontSize="16px" left>
          +503 7496 3874
        </ContactInfoText>
      </ContactInfoItem>
      <ContactInfoItem pointer>
        <FaRegEnvelope />
        <ContactInfoText fontSize="16px" left>
          info@catech.com.sv
        </ContactInfoText>
      </ContactInfoItem>
      <ContactInfoItem
        pointer
        href="https://www.facebook.com/catechsv"
        target="_blank"
        aria-label="Facebook"
      >
        <FaFacebook />
        <ContactInfoText fontSize="16px" left>
          Facebook
        </ContactInfoText>
      </ContactInfoItem>
      <ContactInfoItem
        pointer
        href="https://www.instagram.com/catechsv"
        target="_blank"
        aria-label="Instagram"
      >
        <FaInstagram />
        <ContactInfoText fontSize="16px" left>
          Instagram
        </ContactInfoText>
      </ContactInfoItem>
      <ContactInfoItem
        pointer
        href="https://www.linkedin.com/company/central-american-technologies-s-a-de-c-v"
        target="_blank"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
        <ContactInfoText fontSize="16px" left>
          LinkedIn
        </ContactInfoText>
      </ContactInfoItem>
    </ContactInfoWrapper>
  );
}
