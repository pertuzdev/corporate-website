import styled from "styled-components";

import { Link } from "gatsby-plugin-react-i18next";

import tw from "twin.macro";

import { Button } from "components/shared/Button";

import { FaMagento } from "react-icons/fa";

export const FooterContainer = styled.footer`
  background-color: ${({ color }) => (color ? color : "white")};
`;
export const FooterWrapper = styled.div`
  width: 100%;
  background-color: #221e41;
  padding: 4rem 24px 2rem 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 100px;
  max-width: calc(100% - 40px);

  @media screen and (max-width: 1439px) {
    max-width: calc(100% - 50px);
  }

  @media screen and (max-width: 1299px) {
    max-width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: 4rem 0 2rem 4rem;
  }

  @media screen and (min-width: 640px) and (max-width: 768px) {
    padding: 4rem 3rem 2rem 3rem;
  }

  @media (max-width: 575.98px) {
    max-width: 100%;
    border-top-right-radius: 50px;
  }
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px 0;
  color: #fff;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);

  @media screen and (min-width: 1024px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 15%;
  }
`;

export const FooterContactAndNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContactInfoContainer = styled.div`
  ${tw`self-start flex-grow pt-2.5 px-2.5`}
`;

export const ContactInfoWrapper = styled.div`
  ${tw`pt-8 pb-10`}
`;

export const ContactInfoItem = styled.div`
  ${tw`flex text-white mb-5`}
`;

export const FooterEmailContact = styled.div`
  ${tw`text-base`}
`;

export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 40px;
  line-height: 40px;
  font-weight: bold;
  animation-name: fadeInUp;
  font-size: 40px;

  @media screen and (min-width: 1024px) {
    max-width: 410px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 36px;
    line-height: 52px;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 640px) {
    font-size: 32px;
    line-height: 41px;
  }
  @media screen and (max-width: 479px) {
    font-size: 30px;
  }
`;

export const FooterButton = styled(Button)`
  padding: 12px 64px;
`;

export const FooterSubText = styled.p`
  ${tw`text-base text-white ml-5`}
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FooterLinksContainer = styled.div`
  /*width: 100%;
  max-width: 1000px;*/
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;
export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  align-self: flex-start;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  font-family: Quicksand, serif;
`;

export const NavIcon = styled.img`
  margin-right: 0.5rem;
  width: 26px;
  height: 34.67px;
`;

export const BoldSpan = styled.span`
  font-weight: 700;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  margin-right: 0;
  margin-left: 0;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  ${tw`mb-4 font-bold`}
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #e0e0e0;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  /*max-width: 1000px;*/
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /*width: 90%;*/
  /*max-width: 1000px;*/
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.p`
  margin-top: 25px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 16px;
  font-size: 11px;
  line-height: 14px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
