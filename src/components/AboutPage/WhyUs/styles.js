import styled from "styled-components";

import { ImgContainer } from "components/Common/Image.style";

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
  align-items: center;
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

export const WhyUsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  box-shadow: 1px 1px 13px rgb(214 215 216 / 57%);
  background-color: white;
  border-radius: 15px;
  padding: 25px 20px;
  flex: 1;
  max-width: 300px;
  max-height: 200px;
  flex-basis: 100%;
  margin: 20px auto;
  @media screen and (max-width: 640px) {
    padding: 25px 25px;
  }
`;

export const WhyUsItemTitle = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 16px;
  color: #514e4e;
  text-align: center;
`;

export const WhyUsDescription = styled.p`
  font-size: 0.9rem;
  margin-top: 12px;
`;
