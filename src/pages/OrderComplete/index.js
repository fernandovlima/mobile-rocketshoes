import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import LottieView from 'lottie-react-native';
import { Container, EmptyText, BackToShop, BackToShopText } from './styles';

function OrderComplete({ navigation }) {
  return (
    <Container>
      <Icon name="done" size={60} color="#45b39d" />
      <LottieView
        source={require('../../assets/lotties/success-indicator.json')}
        autoplay
      />
      <EmptyText>Your order has been complete</EmptyText>
      <BackToShop onPress={() => navigation.navigate('Home')}>
        <Icon name="arrow-back" size={20} color="#FFF" />
        <BackToShopText>Back to Shop</BackToShopText>
      </BackToShop>
    </Container>
  );
}

export default connect()(OrderComplete);
