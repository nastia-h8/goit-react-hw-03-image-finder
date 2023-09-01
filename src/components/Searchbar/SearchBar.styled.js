import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 64px;
  padding: 12px 24px;

  color: ${p => p.theme.colors.light};
  background-color: ${p => p.theme.colors.accent};
  box-shadow: ${p => p.theme.shadow};
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;

  background-color: ${p => p.theme.colors.light};
  border-radius: 3px;
  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 4px 8px;

  font: inherit;
  font-size: 20px;
  color: ${p => p.theme.colors.tertiary};
  border: none;
  outline: none;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  transition: all ${p => p.theme.transition};
  cursor: pointer;
  outline: none;
  color: ${p => p.theme.colors.secondary};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.tertiary};
  }
`;
