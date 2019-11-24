import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import { addToCart, removeFromCart, removeLineFromCart } from '../../redux/reducers/cart';
import { primaryTextColor, backgroundColor, borderColor } from '../common/colors';

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 1,
    borderColor,
    padding: 15,
    backgroundColor,
  },
  lastItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    padding: 15,
    backgroundColor,
  },
  name: {
    color: primaryTextColor,
    flex: 2,
  },
  price: {
    width: 40,
    textAlign: 'right',
    marginRight: 12,
    borderRadius: 3,
    fontSize: 12,
  },
  counter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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

class CartItem extends PureComponent {
  handlePressMinus = () => {
    const { item, removeFromCart, cartCount } = this.props;
    if (cartCount > 1) {
      removeFromCart(item.sku);
    }
  }

  handlePressPlus = () => {
    const { item, addToCart } = this.props;
    addToCart(item.sku);
  }

  handlePressRemove = () => {
    const { item, removeLineFromCart } = this.props;
    removeLineFromCart(item.sku);
  }

  render() {
    const { item, isLast, cartCount } = this.props;
    return (
      <View style={isLast ? styles.lastItem : styles.container}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.counter}>
          <TouchableOpacity onPress={this.handlePressMinus} style={styles.button}>
            <Ionicons name="ios-remove" size={25} color="#fff" />
          </TouchableOpacity>
          <Text>{cartCount}</Text>
          <TouchableOpacity onPress={this.handlePressPlus} style={styles.button}>
            <Ionicons name="ios-add" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.price}>
          $
          {item.price}
        </Text>
        <TouchableOpacity onPress={this.handlePressRemove} style={styles.button}>
          <Ionicons name="ios-close" size={25} color="#000" />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { item } = ownProps;
  if (!item) {
    return {};
  }

  return {
    cartCount: state.cart[ownProps.item.sku] || 0,
  };
};

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
  removeLineFromCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartItem);
