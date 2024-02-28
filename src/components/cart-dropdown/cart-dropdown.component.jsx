import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component';
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";
import { useNavigate } from 'react-router-dom';



const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCkecoutHandler = () => {
      navigate('/checkout')
    }

    return (
      <CartDropdownContainer>
        <CartItems>
          {cartItems.length ? (
            cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </CartItems>
        <Button onClick={goToCkecoutHandler}>CHECKOUT</Button>
      </CartDropdownContainer>
    );
}
export default CartDropdown;