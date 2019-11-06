import React from 'react';
import { StatusBar, SafeAreaView, Text } from 'react-native';

import Routes from './routes';
import './config/ReactotronConfig';

export default function App() {
  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor="#45B39D" />
        <Routes />
      </SafeAreaView>
    </>
  );
}
