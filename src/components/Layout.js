import styled from 'styled-components';

export const Layout = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(8)};
  margin: 10px auto;
  max-width: 1200px;
  padding: 0 15px; */

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;
