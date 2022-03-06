import styled from "styled-components";

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
