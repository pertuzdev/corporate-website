import styled from "styled-components";

export const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: ${({ center }) => center && "center"};
`;
