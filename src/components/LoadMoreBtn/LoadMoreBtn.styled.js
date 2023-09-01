import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  margin: 0 auto;
  padding: 8px 16px;
  min-width: 160px;

  border: 0;
  border-radius: ${p => p.theme.radii.sm};

  transition: all ${p => p.theme.transition};
  color: ${p => p.theme.colors.light};
  background-color: ${p => p.theme.colors.accent};
  cursor: pointer;

  text-align: center;
  font-family: inherit;
  font-size: 18px;
  line-height: 1.33;
  font-weight: 500;

  box-shadow: ${p => p.theme.shadow};

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
