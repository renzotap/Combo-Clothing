import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;

  justify-content: space-between;
  /* margin-bottom: 30px; */

  @media screen and (max-width: 800px) {
    height: 100px;
    padding: 2px 2px;
    /* margin-bottom: 50px; */
  }
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 80px;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  h1 {
    flex-direction: column;
    /* display: flex; */
    flex: auto;
    font-size: 9px;
    width: 50px;
    height: 20px;
    color: #4a4a4a;
    align-items: center;
    text-align: center;
    @media screen and (max-width: 800px) {
      align-items: center;
      text-align: center;
    }
  }
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px;
  }
`;

export const NavLinks = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
    padding: 0px;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

