import styled from "styled-components";

import { ImgContainer } from "components/Common/Image.style";

export const ImgWrapper = styled(ImgContainer)`
  width: ${({ width }) => (width ? width : "fit-content")};
  height: ${({ height }) => (height ? height : "fit-content")};
  @media screen and (max-width: 640px) {
    width: 104px;
    height: ${({ width, height }) =>
      (parseFloat(height) / parseFloat(width)) * 104 + "px"};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 13px rgb(214 215 216 / 57%);
  background-color: white;
  border-radius: 15px;
  padding: 25px 20px;
  flex: 1;
  max-width: ${({ cardWidth }) => (cardWidth ? cardWidth : "30%")};
  flex-basis: ${({ cardWidth }) => (cardWidth ? cardWidth : "30%")};
  margin: 20px auto;
  @media screen and (max-width: 1024px) {
    max-width: ${({ cardWidth }) => (cardWidth ? cardWidth : "30%")};
    flex-basis: ${({ cardWidth }) => (cardWidth ? cardWidth : "30%")};
  }
  @media screen and (max-width: 640px) {
    max-width: 100%;
    flex-basis: 100%;
    padding: 25px 50px;
  }
`;

export const CardTitle = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 16px;
  color: #514e4e;
  text-align: center;
`;

export const CardDesc = styled.p`
  font-size: 0.9rem;
  margin-top: 12px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
