import styled from "styled-components";

import { ImgContainer } from "components/common/Image.styles";

export const WhyUsImgWrapper = styled(ImgContainer)`
  margin: 100px;
  margin-top: 0;
  @media screen and (max-width: 994px) {
    margin: 20px 0 0 0;
    order: -1;
  }
`;

export const WhyUsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 994px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WhyUsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
