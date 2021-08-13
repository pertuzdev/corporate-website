import styled from "styled-components";

import { SectionContainer, SectionWrapper } from "styles/globalStyles";

export const ContactSC = styled(SectionContainer)`
  padding-top: 70px;
`;

export const ContactSW = styled(SectionWrapper)`
  @media screen and (min-width: 994px) {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ maxWidth }) => maxWidth};
  flex-basis: ${({ maxWidth }) => maxWidth};
  margin: 2.5%;
  @media screen and (max-width: 994px) {
    width: 100%;
    max-width: 100%;
    flex-basis: 100%;
  }
`;

export const Title = styled.p`
  font-size: 36px;
  line-height: 1.48;
  margin-bottom: 70px;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1em;
  margin-bottom: 15px;
  color: rgb(26, 22, 49);
`;

export const List = styled.ul``;

export const ItemList = styled.li``;

export const Form = styled.form``;

export const InputContainer = styled.div`
  position: relative;
  height: 48px;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: 1rem;
  padding: 0 0.25rem;
  background-color: #fff;
  color: #80868b;
  font-size: 1rem;
  transition: 0.3s;
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  border: 1px solid #dadce0;
  border-radius: 0.5rem;
  outline: none;
  padding: 1rem;
  background: none;
  z-index: 1;
  :focus {
    border: 1.5px solid #1a73e8;
  }
  :focus + Label {
    top: -0.5rem;
    left: 0.8rem;
    color: #1a73e8;
    font-size: 0.75rem;
    font-weight: 500;
    z-index: 10;
  }
  :not(:placeholder-shown) {
    :not(:focus) + Label {
      top: -0.5rem;
      left: 0.8rem;
      font-size: 0.75rem;
      font-weight: 500;
      z-index: 10;
    }
  }
`;

export const InputButton = styled.input`
  display: block;
  margin: 0 auto;
  padding: 0.75rem 5rem;
  outline: none;
  border: none;
  background-color: #1a73e8;
  color: #fff;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    box-shadow: 0 10px 36px rgba(0, 0, 0, 0.15);
  }
`;

export const TextAreaContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  height: 128px;
`;

export const TextArea = styled.textarea`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  border: 1px solid #dadce0;
  border-radius: 0.5rem;
  outline: none;
  padding: 1rem;
  background: none;
  z-index: 1;
  :focus {
    border: 1.5px solid #1a73e8;
  }
  :focus + Label {
    top: -0.5rem;
    left: 0.8rem;
    color: #1a73e8;
    font-size: 0.75rem;
    font-weight: 500;
    z-index: 10;
  }
  :not(:placeholder-shown) {
    :not(:focus) + Label {
      top: -0.5rem;
      left: 0.8rem;
      font-size: 0.75rem;
      font-weight: 500;
      z-index: 10;
    }
  }
`;
