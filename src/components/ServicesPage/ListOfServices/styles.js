import styled from "styled-components";
import {
  Colors,
  SectionWrapper,
  SectionContainer,
} from "../../../styles/globalStyles";

export const ServicesSectionContainer = styled(SectionContainer)`
  padding: 50px 0;
`;

export const ServicesSectionWrapper = styled(SectionWrapper)`
  @media screen and (max-width: 640px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;
export const ServicesList = styled.ul`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
