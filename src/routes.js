import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home/index';
import Cart from './pages/Cart/index';

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
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#45B39D',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
