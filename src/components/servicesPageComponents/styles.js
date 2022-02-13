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

export const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#e7e7e9" : "#fff",
    color: "#6e6d7a",
    fontWeight: "bold",
  }),
  indicatorSeparator: (provided, state) => ({
    width: 0,
  }),
  control: (provided, state) => ({
    ...provided,
    padding: 4,
    fontWeight: "bold",
  }),
};
