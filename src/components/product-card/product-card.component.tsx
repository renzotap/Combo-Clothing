import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";

import { selectCartItems } from "../../store/cart/cart.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ProductCartContainer,
  ImageAndFooterContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import { FC, Fragment } from "react";
import { CategoryItem } from "../../store/categories/category.types";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ImageAndFooterContainer>
      <ProductCartContainer>
        <img 
        src={imageUrl} 
        alt={`${name}`} />
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addProductToCart}
        >
          Add to card
        </Button>
      </ProductCartContainer>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
    </ImageAndFooterContainer>
  );
};

export default ProductCard;
