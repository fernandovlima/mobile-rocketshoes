import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Cart from './pages/Cart';
import OrderComplete from './pages/OrderComplete';

import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home,
        defaultNavigationOptions: {
          title: 'Products',
        },
      },
      Cart: {
        screen: Cart,
        defaultNavigationOptions: {
          title: 'Cart',
        },
      },
      OrderComplete: {
        screen: OrderComplete,
        defaultNavigationOptions: {
          title: 'Order Complete',
        },
      },
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
    }
  )
);

export default Routes;
