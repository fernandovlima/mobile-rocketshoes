import styled from 'styled-components/native';

export const Container = styled.View``;

export const ProductList = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
})``;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 10px;
  background: #eee;
  margin-left: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
`;

export const AddToCartButton = styled.TouchableOpacity`
  background: #45b39d;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View``;

export const ProductAmountText = styled.Text``;
