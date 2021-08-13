import styled from "styled-components";

import {
  Colors,
  SectionWrapper,
  SectionContainer,
} from "../../../styles/globalStyles";

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
export const ServiceTitle = styled.p`
  font-family: "Inter", serif;
  line-height: 1.1;
  font-size: 38px;
  text-align: center;
  font-weight: bold;
  color: unset;
  margin-bottom: unset;
  margin: 20px 0;
  color: #514e4e;
`;
export const ServiceDescriptionTxt = styled.p`
  --tw-text-opacity: 1;
  text-align: center;
  color: rgba(107, 114, 128, var(--tw-text-opacity));
  margin-top: 1rem;
  font-size: 20px;
  font-weight: 500;
  opacity: 0.9;
  max-width: 820px;
  @media and (max-width: 640px) {
    text-align: center;
  }
`;

export const ServiceWorkType = styled.div``;
export const ServiceTools = styled.div``;

export const Steps = styled.div`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StepsList = styled.ul`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const StepItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 13px rgb(214 215 216 / 57%);
  background-color: white;
  border-radius: 15px;
  padding: 25px 20px;
  flex: 1;
  max-width: 25%;
  flex-basis: 25%;
  margin: 20px auto;
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

export const ServiceImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Icon = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  width: 214px;
  height: 211.23px;
  @media screen and (max-width: 640px) {
    width: 104px;
    height: 101.23px;
  }
`;

export const StepItemTitle = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 16px;
  color: #514e4e;
  text-align: center;
`;

export const StepDesc = styled.p`
  font-size: 0.9rem;
  margin-top: 12px;
`;

export const StepsTitle = styled.p`
  font-family: "Inter", serif;
  line-height: 1.1;
  font-size: 28px;
  text-align: center;
  font-weight: bold;
  color: unset;
  margin-bottom: unset;
  margin: 20px 0;
  color: #514e4e;
`;

export const StepsIntro = styled.p`
  --tw-text-opacity: 1;
  color: rgba(107, 114, 128, var(--tw-text-opacity));
  text-align: center;
  margin-top: 1rem;
  font-size: 20px;
  font-weight: 500;
  opacity: 0.9;
  max-width: 750px;
  margin-bottom: 2rem;
`;

export const Tools = styled.div`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ToolsTitle = styled.p`
  font-family: "Inter", serif;
  line-height: 1.1;
  font-size: 28px;
  text-align: center;
  font-weight: bold;
  color: unset;
  margin-bottom: unset;
  margin: 20px 0;
  color: #514e4e;
`;
export const ToolsIntro = styled.p`
  --tw-text-opacity: 1;
  color: rgba(107, 114, 128, var(--tw-text-opacity));
  text-align: center;
  margin-top: 1rem;
  font-size: 20px;
  font-weight: 500;
  opacity: 0.9;
  max-width: 750px;
  margin-bottom: 2rem;
`;
export const ToolsList = styled.ul`
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
