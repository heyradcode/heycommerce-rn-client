import React, { PureComponent } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { brandColor, borderColor } from '../components/common/colors';
import Header from '../components/common/Header';
import FullButton from '../components/common/FullButton';
import NavCartButton from '../components/common/NavCartButton';
import NavBackButton from '../components/common/NavBackButton';
import { screenStyles } from './styles';
import { productsInCart } from '../redux/selectors';
import CartItem from '../components/checkout/CartItem';
import CheckoutFooter from '../components/checkout/CheckoutFooter';

const styles = {
  contentContainer: {
    backgroundColor: borderColor,
  },
  emptyWrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 160,
  },
  emptyIcon: {
    marginBottom: 10,
  },
  emptyText: {
    color: '#8a8a8f',
    fontSize: 16,
    width: 312,
    textAlign: 'center',
    marginHorizontal: 12,
  },
};

class Checkout extends PureComponent {
  handleGoBack = () => {
    this.props.navigation.goBack();
  };

  handleGoToCart = () => {
    this.props.navigation.navigate('SearchResults');
  }

  renderEmpty = () => {
    return (
      <View style={styles.emptyWrapper}>
        <Ionicons name="ios-information-circle-outline" size={64} style={styles.emptyIcon} color={brandColor} />
        <Text style={styles.emptyText}>
          Cart is empty!
        </Text>
        <FullButton title="Go To Products" onPress={this.handleGoBack} />
      </View>
    );
  }

  renderItem = ({ item, index }) => {
    const { cartItems } = this.props;
    return <CartItem item={item} index={index} isLast={index === cartItems.length - 1} />;
  }

  keyExtractor = (item, index) => `product_item_${index}`

  render() {
    const { cartItems, navigation } = this.props;

    return (
      <View style={screenStyles.wrapper}>
        <Header
          left={<NavBackButton black />}
          onLeft={this.handleGoBack}
          title="Checkout"
          navigation={navigation}
          right={<NavCartButton color={brandColor} />}
        />
        {cartItems.length === 0 ? (
          this.renderEmpty()
        ) : (
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={styles.contentContainer}
            data={cartItems}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            ListFooterComponent={<CheckoutFooter />}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: productsInCart(state),
});

export default connect(mapStateToProps)(Checkout);
