import styled from "styled-components";

import Img from "gatsby-image";

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: ${({ width }) => (width ? width : "fit-content")};
  max-height: ${({ height }) => (height ? height : "fit-content")};
`;
export const ImgStyled = styled(Img)`
  width: 100%;
`;
