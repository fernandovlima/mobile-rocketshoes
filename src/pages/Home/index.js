import React, { Component } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <Container>
        <Text>HOME</Text>
      </Container>
    );
  }
}
