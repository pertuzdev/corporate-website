import styled from "styled-components";

import {
  SectionWrapper,
  SectionContainer,
} from "components/shared/Section/styles";
import { colors } from "styles/colors";

export const ServicesSectionContainer = styled(SectionContainer)`
  padding: 50px 0;
`;

export const ServicesSectionWrapper = styled(SectionWrapper)`
  @media screen and (max-width: 640px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;
