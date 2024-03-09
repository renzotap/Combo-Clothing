import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px auto 0;
`;

export const FormContainer = styled.form`
height: 100px;
min-width: 300px;
`
export const PaymentButton = styled(Button)`
margin-left: auto;
margin-top: 30px;
`
