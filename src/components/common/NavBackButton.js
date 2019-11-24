import React from 'react';
import { Platform, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { backgroundColor, primaryTextColor } from './colors';

const styles = {
  container: {
    width: 32,
    height: 32,
    justifyContent: 'center',
  },
  iosStyle: {
    paddingHorizontal: 10,
  },
  androidStyle: {
    textAlign: 'center',
  },
};

const NavBackButton = ({ white }) => (Platform.OS === 'ios' ? (
  <View style={styles.container}>
    <Ionicons
      name="ios-arrow-back"
      size={32}
      color={white ? backgroundColor : primaryTextColor}
      style={styles.iosStyle}
    />
  </View>
) : (
  <View style={styles.container}>
    <Ionicons
      name="md-arrow-back"
      size={24}
      color={white ? backgroundColor : primaryTextColor}
      style={styles.androidStyle}
    />
  </View>
));

export default NavBackButton;
