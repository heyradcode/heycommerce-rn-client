import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import { addToCart, removeFromCart } from '../../redux/reducers/cart';
import { primaryTextColor, backgroundColor, borderColor } from '../common/colors';

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor,
    padding: 15,
    backgroundColor,
  },
  lastItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor,
  },
  name: {
    color: primaryTextColor,
    flex: 2,
  },
  price: {
    flex: 1,
    width: 40,
    textAlign: 'right',
    marginRight: 12,
    borderRadius: 3,
    fontSize: 12,
  },
  button: {
    borderRadius: 15,
    backgroundColor: '#bbb',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class ProductItem extends PureComponent {
  handlePressPlus = () => {
    const { item, addToCart } = this.props;
    addToCart(item.sku);
  }

  render() {
    const { item, isLast } = this.props;
    return (
      <View style={isLast ? styles.lastItem : styles.container}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>
          $
          {item.price}
        </Text>
        <TouchableOpacity onPress={this.handlePressPlus} style={styles.button}>
          <Ionicons name="ios-add" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
};

export default connect(
  null,
  mapDispatchToProps,
)(ProductItem);
