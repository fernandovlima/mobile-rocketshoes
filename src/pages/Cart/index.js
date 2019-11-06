import React, { Component } from 'react';

import { View } from 'react-native';

import { Container } from './styles';

export default class Cart extends Component {
  static navigationOptions = {
    title: 'Cart',
  };
  render() {
    return <Container />;
  }
}
