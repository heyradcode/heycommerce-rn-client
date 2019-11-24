import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';

import { primaryTextColor, borderColor } from './colors';
import StatusBarWrapper from './StatusBar';

const navHeightStyle = Platform.select({
  ios: {
    height: 44,
  },
  android: {
    height: 56,
  },
});

const styles = {
  wrapper: {
    alignSelf: 'stretch',
  },
  contentWrapper: {
    paddingLeft: 6,
    paddingRight: 6,
    ...navHeightStyle,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor,
  },
  left: {
    width: 80,
    alignItems: 'flex-start',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
  },
  right: {
    width: 80,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: primaryTextColor,
  },
};

export default ({
  title, left, right, onLeft, onRight, modal, backgroundColor,
}) => (
  <View style={styles.wrapper}>
    {!modal && (
      <StatusBarWrapper
        backgroundColor="transparent"
        barStyle="light-content"
      />
    )}
    <View style={[styles.contentWrapper, { borderBottomWidth: 0, backgroundColor }]}>
      <View style={styles.left}>
        <TouchableOpacity onPress={onLeft}>{left}</TouchableOpacity>
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity onPress={onRight}>{right}</TouchableOpacity>
      </View>
    </View>
  </View>
);
