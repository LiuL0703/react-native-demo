import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './Home/index';
import BindPhoneScreen from './BindPhone/index';
import SuccessScreen from './Success/index';
import AddAddressScreen from './AddAddress/index';



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    BindPhone: BindPhoneScreen,
    AddAddress: AddAddressScreen,
    Success: SuccessScreen,
  },
  {
    initialRouteName: 'AddAddress',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
