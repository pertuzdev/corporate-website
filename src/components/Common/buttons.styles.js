import styled from "styled-components";

import { Link } from "gatsby";

import { colors } from "styles/colors";

export const Button = styled(Link)`
  border-radius: 6px;
  background: ${({ primary }) => (primary ? colors["primary-purple"] : "#fff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
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
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
