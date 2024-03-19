import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  /* border: 1px solid green; */

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
