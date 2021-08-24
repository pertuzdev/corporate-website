import styled from "styled-components";

import { ImgContainer } from "components/common/Image.styles";
import { Text } from "components/common/texts.style";

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

export const PSImgContainer = styled(ImgContainer)`
  max-width: 400px;
  @media screen and (max-width: 1024px) {
    max-width: 320px;
  }
  @media screen and (max-width: 640px) {
    max-width: 220px;
  }
`;
