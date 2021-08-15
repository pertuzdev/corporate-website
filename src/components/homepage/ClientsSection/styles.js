import styled from "styled-components";

import { Text } from "components/Common/texts.style";
import { SectionContainer } from "styles/globalStyles";
import { Title } from "components/common/texts.style";

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
export const ClientsContainer2 = styled.div`
  width: 100%;
  background-color: #6937ff;
  padding: 4rem 24px 2rem 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 100px;
  max-width: calc(100% - 40px);
  margin-left: auto;

  @media screen and (max-width: 1439px) {
    max-width: calc(100% - 50px);
  }

  @media screen and (max-width: 1299px) {
    max-width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: 4rem 4rem 2rem 0;
  }

  @media screen and (min-width: 640px) and (max-width: 768px) {
    padding: 4rem 3rem 2rem 3rem;
  }

  @media (max-width: 575.98px) {
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
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-self: unset;
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
export const ClientsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    margin-top: 60px;
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
export const ClientImg = styled.img`
  width: 100%;
`;
export const ClientLink = styled.a`
  display: flex;
  justify-content: center;
  max-width: 220px;
  max-height: 206.75px;
  // padding: 20px;
  /*@media (max-width: 575.98px) {
    height: 90px;
  }*/
`;
