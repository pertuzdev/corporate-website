import styled from "styled-components";

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: ${({ w }) => (w ? w : "fit-content")};
  max-height: ${({ h }) => (h ? h : "fit-content")};
`;
export const Img = styled.img`
  width: 100%;
`;
