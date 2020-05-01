/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import {HomeScreen, LoginScreen, RegisterScreen, ForgotPasswordScreen, DashboardScreen, TabMenu} from './components/resources/screens/index'

const App = () => {
  console.disableYellowBox = true;
  return (
    <>
    <AppContainer>
      <StatusBar barStyle="dark-content" />
      <HomeScreen navigation={AppNavigator}></HomeScreen>
      </AppContainer>
    </>
  );
};
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Login: {
    screen: LoginScreen
  },
  Register:{
    screen : RegisterScreen
  },
  ForgotPassword:{
    screen: ForgotPasswordScreen
  },
  Dashboard_old:{
    screen: DashboardScreen
  },
  'Dash board':{
    screen: TabMenu
  }
}, {defaultNavigationOptions:{
  headerShown : false,
  headerLeft : ()=>{null}
}});

const AppContainer = createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
