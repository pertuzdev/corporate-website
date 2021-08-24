import styled from "styled-components";

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: ${({ width }) => (width ? width : "fit-content")};
  max-height: ${({ height }) => (height ? height : "fit-content")};
`;
export const Img = styled.img`
  width: 100%;
`;
