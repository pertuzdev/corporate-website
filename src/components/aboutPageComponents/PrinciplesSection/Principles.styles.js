import styled from "styled-components";

import { colors } from "styles/colors";

export const ProfilePrinciples = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 4rem;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PrincipleItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  margin-right: 10px;
  align-items: center;
  padding: 15px 10px;
  background: white;
  border-radius: 10px;
  box-shadow: 1px 1px 13px rgb(214 215 216 / 57%);
  transition: all 0.2s ease-in;
  :hover {
    background-color: ${colors["primary-purple"]};
    color: white;
  }
  @media screen and (max-width: 640px) {
    flex-basis: 70%;
    width: 70%;
    margin-bottom: 10px;
    background-color: ${colors["primary-purple"]};
    color: white;
    margin-right: 0;
  }
`;

export const PrincipleText = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
  @media screen and (max-width: 640px) {
    font-size: 12px;
  }
`;
