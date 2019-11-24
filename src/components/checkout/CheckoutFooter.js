import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';

import { applyPromo } from '../../redux/reducers/promo';
import { checkout } from '../../redux/reducers/checkout';
import { primaryTextColor, backgroundColor, brandColor, borderColor } from '../common/colors';
import { subTotalSelector } from '../../redux/selectors';
import FullButton from '../common/FullButton';

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    padding: 15,
    backgroundColor,
  },
  label: {
    color: primaryTextColor,
  },
  input: {
    marginLeft: 8,
    marginRight: 16,
    flex: 1,
    fontSize: 15,
    color: primaryTextColor,
    padding: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor,
  },
  button: {
    borderRadius: 8,
    backgroundColor: brandColor,
    height: 30,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: backgroundColor,
  },
};

class CheckoutFooter extends PureComponent {
  state = {
    promo: '',
  }

  handlePressApply = () => {
    const { applyPromo } = this.props;
    const { promo } = this.state;
    if (promo.length === 0) {
      Alert.alert('Enter promo code!');
      return;
    }
    applyPromo(promo);
  }

  handleChangePromo = (text) => {
    this.setState({ promo: text });
  }

  handleCheckout = () => {
    this.props.checkout({
      success: this.handleCheckoutSuccess,
      failure: this.handleCheckoutFailure,
    });
  }

  handleCheckoutSuccess = () => {
    Alert.alert('Success!');
  }

  handleCheckoutFailure = () => {
    Alert.alert('Failed!');
  }

  render() {
    const { subTotal, promoAmount } = this.props;
    const { promo } = this.state;
    const subTotalAmount = subTotal * promoAmount;
    const totalAmount = subTotal * (1 - promoAmount);
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.label}>Promo Code: </Text>
          <TextInput
            style={styles.input}
            value={promo}
            onChangeText={this.handleChangePromo}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity onPress={this.handlePressApply} style={styles.button}>
            <Text style={styles.buttonText}>Apply</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Sub Total: </Text>
          <Text style={styles.label}>
            $
            {subTotal.toFixed(2)}
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Promo Amount: </Text>
          <Text style={styles.label}>
            $
            {subTotalAmount.toFixed(2)}
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Basket Total: </Text>
          <Text style={styles.label}>
            $
            {totalAmount.toFixed(2)}
          </Text>
        </View>
        <View style={styles.container}>
          <FullButton title="Checkout" onPress={this.handleCheckout} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  promoAmount: state.promo.discount,
  subTotal: subTotalSelector(state),
});

const mapDispatchToProps = {
  applyPromo,
  checkout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckoutFooter);
