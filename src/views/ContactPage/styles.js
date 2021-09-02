import styled from "styled-components";

import { SectionContainer, SectionWrapper } from "styles/globalStyles";

export const ContactSC = styled(SectionContainer)`
  padding-top: 70px;
`;

export const ContactSW = styled(SectionWrapper)`
  @media screen and (min-width: 994px) {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ maxWidth }) => maxWidth};
  flex-basis: ${({ maxWidth }) => maxWidth};
  margin: 2.5%;
  @media screen and (max-width: 994px) {
    width: 100%;
    max-width: 100%;
    flex-basis: 100%;
  }
`;
