import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import Routes from './routes';
import './config/ReactotronConfig';

import store from './store';

import Header from './components/Header/index';

function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#45B39D" />
      <Header />
      <Routes />
    </Provider>
  );
}

export default App;
