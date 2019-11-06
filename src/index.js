import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import Routes from './routes';
import './config/ReactotronConfig';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#45B39D" />

      <Routes />
    </Provider>
  );
}

export default App;
