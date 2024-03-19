import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
  flex: 1 1 auto;
  overflow: hidden;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 15px;
  }

  button {
    width: 100%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    /* display: none; */
  }

  &:hover {
    img {
      opacity: 0.8;
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    width: 40vw;

    button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;

      & hover {
        img {
          opacity: unset;
        }
        button {
          opacity: unset;
        }
      }
    }
  }
  @media screen and (max-width: 400px) {
    width: 80vw;

    button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;

      & hover {
        img {
          opacity: unset;
        }
        button {
          opacity: unset;
        }
      }
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;
