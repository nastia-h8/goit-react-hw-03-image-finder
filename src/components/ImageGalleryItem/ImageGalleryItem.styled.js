import styled from 'styled-components';

export const Item = styled.li`
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: ${p => p.theme.shadow};
`;

export const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform ${p => p.theme.transition};

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
