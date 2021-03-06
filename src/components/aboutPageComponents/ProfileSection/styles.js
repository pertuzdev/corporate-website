import styled from "styled-components";

import { colors } from "styles/colors";

import { Title } from "styles/globalStyles";
import { SectionContainer, SectionWrapper } from "styles/globalStyles";

export const ProfileContainer = styled(SectionContainer)`
  padding: 80px 0;
  opacity: 0;
  animation: fadeIn 1s ease-in both;
  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const ProfileWrapper = styled(SectionWrapper)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 994px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProfileRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: ${({ alignStart }) => (alignStart ? "flex-start" : "flex-end")};
  justify-content: ${({ justifyContent }) => justifyContent};
  max-width: ${({ maxWidth450 }) => maxWidth450 && "450px"};
  @media screen and (max-width: 994px) {
    max-width: ${({ maxWidth550 }) => maxWidth550 && "650px"};
    align-items: ${({ center }) => center && "center"};
    text-align: ${({ center }) => center && "center"};
  }
`;

export const ProfileTextWrapper = styled.div``;

export const ProfileTitle = styled(Title)`
  font-size: 3.5rem;
  line-height: 1.1;
  letter-spacing: -3.5px;
  @media screen and (max-width: 994px) {
    letter-spacing: 0;
    font-size: 3rem;
  }
`;
export const ProfileHighlight = styled.span`
  color: ${colors["primary-purple"]};
`;
