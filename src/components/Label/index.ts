import styled from "styled-components";

export const Label = styled.label<{ required: boolean; for?: string }>`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  transition: color 0.3s;

  &:has(+ input:focus-visible) {
    color: #7a59f0;
  }

  &::after {
    content: ${({ required }) => required && "'*'"};
    color: red;
  }
`;
