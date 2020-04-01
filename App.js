import React from 'react';
import HomeScreen from './src/Screens/HomeScreen';
import AccountScreen from './src/Screens/AccountScreen';
import { createAppContainer} from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


// const DrawerNavigator = createDrawerNavigator({
//   Home: HomeScreen
// });

const tabsNavigator = createBottomTabNavigator({
  Home : HomeScreen,
  Account: AccountScreen,

},
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(tabsNavigator);