import React, { PureComponent } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { brandColor, borderColor } from '../components/common/colors';
import Header from '../components/common/Header';
import FullButton from '../components/common/FullButton';
import NavCartButton from '../components/common/NavCartButton';
import { fetchProducts } from '../redux/reducers/product';
import { screenStyles } from './styles';
import ProductItem from '../components/product/ProductItem';

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

class Products extends PureComponent {
  componentDidMount() {
    this.props.fetchProducts();
  }

  handleGoToCheckout = () => {
    this.props.navigation.navigate('Checkout');
  }

  handleRefresh = () => {
    this.props.fetchProducts();
  }

  renderEmpty = () => {
    return (
      <View style={styles.emptyWrapper}>
        <Ionicons name="ios-information-circle-outline" size={64} style={styles.emptyIcon} color={brandColor} />
        <Text style={styles.emptyText}>
          No products yet!
        </Text>
        <FullButton title="Refresh" onPress={this.handleRefresh} />
      </View>
    );
  }

  renderItem = ({ item, index }) => {
    const { products } = this.props;
    return <ProductItem item={item} index={index} isLast={index === products.length - 1} />;
  }

  keyExtractor = (item, index) => `product_item_${index}`

  render() {
    const { products, navigation } = this.props;

    return (
      <View style={screenStyles.wrapper}>
        <Header
          title="Products"
          navigation={navigation}
          right={<NavCartButton color={brandColor} />}
          onRight={this.handleGoToCheckout}
        />
        {products.length === 0 ? (
          this.renderEmpty()
        ) : (
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={styles.contentContainer}
            data={products}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.items,
});

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
