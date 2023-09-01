import styled from 'styled-components';
export const Button = styled.button`
  z-index: 99;
  position: fixed;
  bottom: 20px;
  right: 20px;

  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;
  cursor: pointer;
  color: ${p => p.theme.colors.light};
  background-color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.circle};
  transition: all ${p => p.theme.transition};

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
