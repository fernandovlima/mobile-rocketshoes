import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ProductList = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
})``;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 5px auto;
  border-radius: 4px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 10px;
  background: #eee;
  margin-left: 10px;
  margin-bottom: 15px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;

  margin-bottom: 15px;
`;

export const AddToCartButton = styled.TouchableOpacity`
  background: #45b39d;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.1, '#45b39d')};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
