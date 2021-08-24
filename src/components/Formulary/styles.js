import styled from "styled-components";

import { colors } from "styles/colors";

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
  color: ${colors["gray"]};
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
  border: 1px solid ${colors["gray-light"]};
  border-radius: 0.5rem;
  outline: none;
  padding: 1rem;
  background: none;
  z-index: 1;
  :focus {
    border: 1.5px solid ${colors["primary-purple"]};
  }
  :focus + Label {
    top: -0.5rem;
    left: 0.8rem;
    color: ${colors["primary-purple"]};
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
  background-color: ${colors["primary-purple"]};
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
  border: 1px solid ${colors["gray-light"]};
  border-radius: 0.5rem;
  outline: none;
  padding: 1rem;
  background: none;
  z-index: 1;
  :focus {
    border: 1.5px solid ${colors["primary-purple"]};
  }
  :focus + Label {
    top: -0.5rem;
    left: 0.8rem;
    color: ${colors["primary-purple"]};
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

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
