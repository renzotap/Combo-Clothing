import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 155px;
  /* width: auto; */
  height: 50px;
  letter-spacing: 0.1px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 10px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  font-size: small;
  background-color: white;
  color: black;
  border: 1px solid black;
  display: flex;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
