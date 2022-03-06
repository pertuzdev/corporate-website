import styled from "styled-components";

import { Link } from "gatsby";

import { colors } from "styles/colors";

export const StyledButton = styled.button`
  border-radius: 6px;
  background: ${({ primary }) => (primary ? colors["primary-purple"] : "#fff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 0" : "10px 0")};
  width: ${({ big }) => (big ? "225px" : "135px")};
  color: ${({ primary }) => (primary ? "#fff" : colors["primary-purple"])};
  font-weight: ${(primary) => (primary ? "500" : "bold")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    //background: #fff;
    background-color: ${({ primary }) => (primary ? "#4623b0" : "#e0e0e0")};
  }
  :focus {
    outline: none;
  }
`;

export const OutlineButton = styled(StyledButton)`
  border: 1px solid #e1dafe;
  background: "#fff";
  :hover {
    background-color: ${colors["primary-purple"]};
    color: white;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    padding: 12px;
  }
`;

/* export const ServiceItemWrapper = styled.li`
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
`; */
