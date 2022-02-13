import styled from "styled-components";

import { Text } from "styles/globalStyles";
import { SectionContainer } from "components/shared/Section/styles";
import { Title } from "styles/globalStyles";

export const ClientsContainer = styled(SectionContainer)`
  width: 100%;
  border-top-left-radius: 100px;
  margin-left: auto;
  @media screen and (max-width: 1280px) {
    max-width: 100%;
  }
  @media (max-width: 640px) {
    max-width: 100%;
    border-top-left-radius: 50px;
  }
`;

export const ClientsIntro = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-self: unset;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const ClientsTitle = styled(Title)`
  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

export const ClientsDescription = styled(Text)`
  line-height: 1.89;
  margin-left: 55px;
  margin-top: 0;
  margin-bottom: 0;
  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }
`;

export const ClientItemContainer = styled.div`
  display: flex;
  /*justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};*/
  flex: 1;
  max-width: 30%;
  flex-basis: 30%;
  justify-content: center;
  @media screen and (max-width: 640px) {
    max-width: 100%;
    flex-basis: 100%;
    padding: 25px 50px;
    border: none;
    justify-content: center;
  }
`;
