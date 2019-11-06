import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  background: #45b39d;
`;

export const ProductList = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const ProductImage = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 10px;
  background: #eee;
`;
