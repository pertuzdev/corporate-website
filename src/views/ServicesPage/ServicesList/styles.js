import styled from "styled-components";

import { Link } from "gatsby";

import { colors } from "styles/colors";

import { SectionWrapper, SectionContainer } from "components/Section/styles";

export const ServicesSectionContainer = styled(SectionContainer)`
  padding: 50px 0;
`;

export const ServicesSectionWrapper = styled(SectionWrapper)`
  @media screen and (max-width: 640px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;
export const List = styled.ul`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const ServiceItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  color: #57546a;
  min-width: 200px;
  padding: 12px 16px;
  margin-bottom: 30px;
  margin-right: 16px;
  border: 1px solid #e1dafe;
  border-radius: 10px;
  transition: all 0.2s ease-in;
  :hover {
    background-color: ${colors["primary-purple"]};
    color: white;
  }
  @media screen and (max-width: 768px) {
    min-width: 0;
    width: 48%;
    margin-right: 0;
    padding: 12px;
    :nth-child(2n + 1) {
      margin-right: 10px;
    }
  }
`;
export const ServiceItemName = styled(Link)`
  font-weight: bold;
  font-size: 0.9em;
`;
