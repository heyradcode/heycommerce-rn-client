/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import './ReactotronConfig';
import store, { persistor } from './src/redux/store';
import AppNavigator from './src/navigation/routes';

const ignorableWarnings = [
  'Can only update a mounted or mounting component.',
  'Module RNToastNative requires',
];
YellowBox.ignoreWarnings(ignorableWarnings);

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
