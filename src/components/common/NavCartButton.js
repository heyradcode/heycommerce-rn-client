import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { primaryTextColor } from './colors';
import { cartTotalCount } from '../../redux/selectors';

const styles = {
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: primaryTextColor,
    padding: 10,
  },
};

const NavCartButton = ({
  style, color, fontSize, cartTotalCount,
}) => (
  <Text
    style={[
      styles.text,
      fontSize ? { fontSize } : {},
      color ? { color } : {},
      style,
    ]}
  >
    Cart
    {' '}
    {cartTotalCount}
  </Text>
);

const mapStateToProps = (state) => ({
  cartTotalCount: cartTotalCount(state),
});

export default connect(mapStateToProps)(NavCartButton);
