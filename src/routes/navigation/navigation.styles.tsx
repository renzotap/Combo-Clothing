import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;


`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 80px;
  padding-left: 10px;
  text-align: center;
  align-items: center;
  /* padding: 25px; */
  h2 {
    font-weight: bold;
    /* padding-right: 32px; */
    font-size: 12px;
    width: 70px;
    color: #4a4a4a;
    align-items: center;
    text-align: center;
  }
`;

export const NavLinks = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

