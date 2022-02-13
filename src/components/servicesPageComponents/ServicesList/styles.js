import styled from "styled-components";

import {
  SectionWrapper,
  SectionContainer,
} from "components/shared/Section/styles";

export const ServicesSectionContainer = styled(SectionContainer)`
  padding: 50px 0;
`;

export const ServicesSectionWrapper = styled(SectionWrapper)`
  @media screen and (max-width: 640px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const ServiceItemWrapper = styled.li`
  cursor: pointer;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    width: 48%;
  }
`;
