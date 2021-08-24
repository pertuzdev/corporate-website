import styled from "styled-components";
import { SectionContainer, SectionWrapper } from "components/Section/styles";
import { Title, Text } from "components/common/texts.styles";

export const GoalsContainer = styled(SectionContainer)`
  width: 90%;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;
  margin: 140px auto;
  padding: 100px 0;
  @media screen and (max-width: 1280px) {
    max-width: 100%;
    padding: 0 0 48px 0;
  }
  @media (max-width: 640px) {
    max-width: 100%;
    width: 100%;
    margin: 70px auto;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 50px;
  }
`;
export const GoalsSectionWrapper = styled(SectionWrapper)`
  flex-direction: row;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const GoalsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;
  padding: 0 30px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-self: unset;
  }
  @media screen and (max-width: 640px) {
    padding: 0;
  }
`;
export const GoalsTitle = styled(Title)`
  line-height: 1.1;
  font-weight: bold;
  /*margin-bottom: ${({ marginBottom }) => (marginBottom ? "64px" : "unset")};*/
  @media screen and (max-width: 1024px) {
    font-size: 38px;
    margin-bottom: 34px;
  }
  @media screen and (max-width: 640px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;
export const GoalsDescription = styled(Text)`
  line-height: 1.89;
  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }
`;
