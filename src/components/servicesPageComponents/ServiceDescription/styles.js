import styled from "styled-components";

import { Title } from "styles/globalStyles";

import {
  Colors,
  SectionWrapper,
  SectionContainer,
} from "components/shared/Section/styles";

export const ServiceDescriptionSC = styled(SectionContainer)`
  padding-top: 30px;
  padding-bottom: 140px;
`;

export const SectionDescriptionWrapper = styled(SectionWrapper)`
  margin: 0 auto;
  padding-left: 50px;
  padding-right: 50px;
  @media screen and (max-width: 640px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  width: 124px;
  height: 121.23px;
  @media screen and (max-width: 640px) {
    width: 104px;
    height: 101.23px;
  }
`;

export const ServiceTitle = styled(Title)`
  font-size: 38px;
  margin: 20px 0;
`;

export const ServiceSteps = styled.div`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServiceStepsList = styled.ul`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const ServiceStepsTitle = styled(Title)`
  font-size: 28px;
  margin: 20px 0;
`;

export const ServiceTools = styled.div`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServiceToolsTitle = styled(Title)`
  font-size: 28px;
  margin: 20px 0;
`;

export const ServiceToolsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;
export const ToolItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  color: #57546a;
  border: 1px solid #e1dafe;
  padding: 25px 20px;
  flex: 1;
  max-width: 25%;
  flex-basis: 25%;
  margin: 20px 2.5%;
  @media screen and (max-width: 1024px) {
    max-width: 40%;
    flex-basis: 40%;
  }
  @media screen and (max-width: 640px) {
    max-width: 100%;
    flex-basis: 100%;
    padding: 25px 50px;
  }
`;

export const ToolIcon = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  width: 150px;
  height: 88.83px;
  @media screen and (max-width: 640px) {
    width: 100px;
    height: 59.22px;
  }
`;
