import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const SectionContainer = styled.section`
  background-color: ${({ color }) => color || "unset"};
  padding: 140px 0;
  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
`;
export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 120px;
  padding-left: 120px;
  @media screen and (max-width: 1024px) {
    padding-right: 80px;
    padding-left: 80px;
  }
  @media screen and (max-width: 640px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

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
