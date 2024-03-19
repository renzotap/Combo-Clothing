import styled from "styled-components";

export const ShoppingIcon = styled.div`
  width: 30px;
  height: 30px;
`;
export const CartIconContainer = styled.div`
  width: 30px;
  height: 45px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;
export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
