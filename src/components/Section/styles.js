import styled from "styled-components";

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

export const SectionHeading = styled.div`
  margin-bottom: ${({ marginBottom }) => (marginBottom ? "64px" : "unset")};
  @media screen and (max-width: 640px) {
    margin-bottom: ${({ marginBottom }) => (marginBottom ? "40px" : "unset")};
  }
`;

export const ServiceDescription = styled.p`
  font-size: 0.9rem;
  margin-top: 12px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
