import styled, { css } from "styled-components";

import { Tilt } from "components/shared/Tilt";

const isPair = (amount) => {
  return amount % 2 === 0;
};

const isFirstInPairLayout = (amount, index) => {
  //console.log("amount: ", amount, "index: ", index);
  if (!isPair(amount)) {
    return index === 0;
  } else {
    return false;
  }
};

const validateLayout = (amount, index) => {
  if (isFirstInPairLayout(amount, index)) {
    return css`
      flex-direction: row;
      justify-content: space-around;
      max-width: 95%;
      flex-basis: 95%;
      padding: 0;
    `;
  } else {
    return css`
      flex-direction: column;
      align-items: center;
      max-width: 45%;
      flex-basis: 45%;
      padding: 25px 20px;
    `;
  }
};

export const ProjectItemWrapper = styled(Tilt)`
  display: flex;
  /*flex: 1;*/
  color: white;
  ${({ amount, index }) => validateLayout(amount, index)}
  font-weight: 500;
  background-color: ${({ color }) => color || "unset"};
  border-radius: 15px;
  margin: 20px auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    flex-basis: 100%;
    padding: ${({ amount, index }) =>
      isFirstInPairLayout(amount, index) ? 0 : "20px"};
  }
`;

export const ProjectItemTextWrapper = styled.div`
  width: ${({ amount, index }) => isFirstInPairLayout(amount, index) && "45%"};
  padding: ${({ amount, index }) =>
    isFirstInPairLayout(amount, index) && "20px"};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  @media screen and (max-width: 768px) {
    width: unset;
    background: ${({ amount, index }) =>
      isFirstInPairLayout(amount, index) && "#3a3c70"};
    clip-path: ${({ amount, index }) =>
      isFirstInPairLayout(amount, index) &&
      "polygon(0 0, 100% 0%, 100% 93%, 0 100%)"};
  }
`;

export const ServiceImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const ProjectItemImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: ${({ amount, index }) => isFirstInPairLayout(amount, index) && "55%"};
  padding: 30px 0;
  @media screen and (max-width: 768px) {
    width: unset;
    max-width: 460px;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  @media screen and (max-width: 768px) {
  }
`;

export const ProjectItemTitle = styled.p`
  font-family: Inter, serif;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const ProjectItemDescription = styled.p`
  font-size: 1.25rem;
  line-height: 30px;
  font-family: Inter, serif;
  font-weight: bold;
  margin-bottom: 40px;
`;
