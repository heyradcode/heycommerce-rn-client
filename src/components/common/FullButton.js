import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { brandColor, backgroundColor } from './colors';

const styles = {
  wrapper: {
    width: 240,
    height: 48,
    backgroundColor,
    margin: 15,
    paddingHorizontal: 12,
    justifyContent: 'center',
    borderRadius: 2,
    borderColor: brandColor,
    borderWidth: 2,
  },
  text: {
    color: brandColor,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
  },
};

export default ({
  title, onPress, wrapperStyle, textStyle, disabled,
}) => (
  <TouchableOpacity
    style={[styles.wrapper, wrapperStyle]}
    onPress={onPress}
    disabled={disabled}
  >
    {typeof title === 'string' ? (
      <Text style={[[styles.text, textStyle]]}>
        {title}
      </Text>
    ) : (
      title
    )}
  </TouchableOpacity>
);
