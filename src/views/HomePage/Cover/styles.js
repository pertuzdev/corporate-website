import styled from "styled-components";
import tw from "twin.macro";

import { Text } from "components/common/texts.styles";
import { SectionContainer, SectionWrapper } from "components/Section/styles";
import { Button } from "components/common/buttons.styles";

export const CoverContainer = styled(SectionContainer)`
  padding: 10px 0;
  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const CoverWrapper = styled(SectionWrapper)`
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 994px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CoverRow = styled.div`
  ${tw`flex flex-col`};
  width: 100%;
  align-items: ${({ flexStart }) => (flexStart ? "flex-start" : "flex-end")};
  max-width: ${({ maxWidth450 }) => maxWidth450 && "450px"};
  @media screen and (max-width: 994px) {
    max-width: ${({ maxWidth550 }) => maxWidth550 && "650px"};
    align-items: ${({ center }) => center && "center"};
    text-align: ${({ center }) => center && "center"};
  }
`;

export const CoverSocialMedia = styled.ul`
  ${tw`flex`};
  justify-content: flex-end;
  align-items: center;
  margin-top: 7rem;
  margin-right: 120px;

  ::before {
    content: "";
    width: 100%;
    height: 1px;
    background: #e3e2ef;
    margin-right: 40px;
  }

  @media screen and (max-width: 994px) {
    ::before {
      display: none;
    }

    justify-content: center;
    margin-top: 2rem;
    margin-right: 0;
  }
`;

export const SocialIconLink = styled.li`
  ${tw`text-gray-500 text-2xl mr-4`}
`;

export const TextWrapper = styled.div`
  ${tw`mt-4`};
`;

export const CoverTitle = styled.h1`
  font-family: "Inter", serif;
  font-weight: bold;
  font-size: 5rem;
  line-height: 1.1;
  letter-spacing: -3.5px;
  @media screen and (max-width: 994px) {
    font-size: 4rem;
    letter-spacing: 0;
  }
  @media screen and (max-width: 640px) {
    font-size: 3rem;
  }
`;

export const Highlight = styled.span`
  ${tw`text-primary-purple`}
`;

export const CoverIntro = styled(Text)`
  font-size: 24px;
  @media screen and (max-width: 994px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CoverButton = styled(Button)`
  margin-top: 0.75rem;
`;
