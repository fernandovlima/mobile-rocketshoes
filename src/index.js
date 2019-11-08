import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import Routes from './routes';
import './config/ReactotronConfig';

import store from './store';
import NavigationService from './services/navigation';

function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#45B39D" />

      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}

export default App;
