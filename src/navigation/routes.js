import { createAppContainer } from 'react-navigation';
import { createStackNavigator, StackViewStyleInterpolator } from 'react-navigation-stack';

import Products from '../screens/Products';
import Checkout from '../screens/Checkout';

const MainNavigator = createStackNavigator(
  {
    Products: { screen: Products },
    Checkout: { screen: Checkout },
  },
  {
    cardStyle: {
      shadowColor: 'transparent',
    },
    headerMode: 'none',
    transitionConfig: () => ({
      screenInterpolator: (sceneProps) => {
        if (sceneProps.scene.route.routeName === 'ScreenWithoutAnimation') {
          return null;
        } else {
          return StackViewStyleInterpolator.forHorizontal(sceneProps);
        }
      },
    }),
  },
);

export default createAppContainer(MainNavigator);
