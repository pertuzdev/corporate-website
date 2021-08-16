import styled from "styled-components";

export const Title = styled.h2`
  font-family: "Inter", serif;
  line-height: 1.1;
  font-size: 48px;
  text-align: center;
  font-weight: bold;
  color: ${({ color }) => color || "unset"};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? "32px" : "unset")};
  @media screen and (max-width: 640px) {
    font-size: 32px;
    margin-bottom: ${({ marginBottom }) => (marginBottom ? "20px" : "unset")};
  }
`;

export const Text = styled.p`
  color: ${({ color }) => (color ? color : "black")};
  text-align: ${({ left }) => (left ? "left" : "center")};
  margin-top: 1rem;
  font-size: ${({ fontSize }) => fontSize || "20px"};
  font-weight: 500;
  opacity: 0.9;
  max-width: 750px;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
