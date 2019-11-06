import React, { Component } from 'react';
import { connect } from 'react-redux';

import api from '../../services/api';
import formatPrice from '../../util/format';

import { Container, ProductList, ProductImage } from './styles';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      // priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  render() {
    const { products } = this.state;
    // const { amount } = this.ptops;
    return (
      <Container>
        <ProductList
          data={products}
          keyExtractor={product => product.id}
          renderItem={({ item }) => (
            <ProductImage source={{ uri: item.image }} />
          )}
        />
      </Container>
    );
  }
}

// const mapStateToProps = state => ({
//   amount: state.cart.reduce((amount, product) => {
//     amount[product.id] = product.amount;

//     return amount;
//   }, {}),
// });
// const mapDispatchToProps = dispatch =>
//   bindActionCreators(CartActions, dispatch);

export default connect()(Home);

// mapDispatchToProps
