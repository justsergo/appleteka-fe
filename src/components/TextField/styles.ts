import styled from "styled-components";

export const Input = styled.input`
  background-color: #ffffff;
  color: #000;
  height: 2.5rem;
  border: 1px solid #c5bdbd;
  transition: border-radius 0.2s, outline 0.2s;
  padding: 0 1rem;

  &:focus-visible {
    outline: 1px solid #7a59f0;
    border-radius: 5px;
  }
`;
