import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  flex-direction: column;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const Title = styled(Link)`
  font-size: 28px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 25px;
  row-gap: 40px;
  /* border: 1px solid blue; */

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;
