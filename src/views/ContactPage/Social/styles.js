import styled from "styled-components";

import { FaMagento } from "react-icons/fa";
import { colors } from "styles/colors";

export const SocialContainer = styled.div``;
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

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.p`
  margin-top: 25px;
  color: ${colors["primary-purple"]};
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
  color: ${colors["primary-purple"]};
  font-size: 48px;
`;
