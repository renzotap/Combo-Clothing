import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  padding: 10px 2px;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 80px;
  padding: 10px;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 9px;
    width: 65px;
    height: 20px;
    color: #4a4a4a;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 800px) {
      width: 55px;
      align-items: center;
      text-align: center;
    }
  }

  @media screen and (max-width: 800px) {
    text-align: center;
    align-items: center;
    width: 65px;
    padding: 5px;
  }
`;

export const NavLinks = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0px;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 12px;
  cursor: pointer;
`;

