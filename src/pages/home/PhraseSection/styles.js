import styled from "styled-components";

import { Text } from "components/elements/texts.styles";

export const PhraseSectionRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ marginBottom }) => marginBottom && "64px"};
  @media screen and (max-width: 640px) {
    margin-bottom: ${({ marginBottom }) => marginBottom && "40px"};
  }
`;
export const PhraseSectionIntro = styled(Text)`
  font-size: 1.7rem;
  @media screen and (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

export const PSImgContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 400px;
  @media screen and (max-width: 1024px) {
    max-width: 320px;
  }
  @media screen and (max-width: 640px) {
    max-width: 220px;
  }
`;
