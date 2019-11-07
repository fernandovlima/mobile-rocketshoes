import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Rocketshoes,
  Wrapper,
  CartContainer,
  ItemCount,
} from './styles';

Icon.loadFont();

function Header({ navigation, cartSize }) {
  console.tron.log('NAVIGATION', navigation);
  return (
    <Wrapper>
      <Container>
        <Rocketshoes />
        <CartContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={24} color="#fff" />
          <ItemCount>{cartSize || 0}</ItemCount>
        </CartContainer>
      </Container>
    </Wrapper>
  );
}

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);
