import styled from "styled-components";

import { Colors, SectionWrapper } from "../../../styles/globalStyles";

export const SectionDescriptionWrapper = styled(SectionWrapper)`
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
export const ServiceTitle = styled.p``;
export const ServiceDescriptionTxt = styled.p``;
export const ServiceWorkType = styled.div``;
export const ServiceTools = styled.div``;
