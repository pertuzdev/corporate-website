import styled from "styled-components";

export const StyledImgContainer = styled.div`
  max-width: ${({ width }) => (width ? width : "auto")};
  max-height: ${({ height }) => (height ? height : "auto")};
`;

export const StyledCardImgContainer = styled(StyledImgContainer)`
  width: ${({ width }) => (width ? width : "fit-content")};
  height: ${({ height }) => (height ? height : "fit-content")};
  @media screen and (max-width: 640px) {
    width: 104px;
    height: ${({ width, height }) =>
      (parseFloat(height) / parseFloat(width)) * 104 + "px"};
  }
`;
export const Img = styled.img`
  width: 100%;
`;
