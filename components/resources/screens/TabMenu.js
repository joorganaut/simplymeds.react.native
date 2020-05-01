import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity  } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import MiddlewareManager from '../../master/MiddlewareManager'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {PatientDetails, DashboardScreen} from './index'
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

class TabMenu extends Component{
    constructor(props){
        debugger
        super(props)
        var navigation = this.props.navigation.getParam('Navigation')
        var UserID = this.props.navigation.getParam('ID')
        this.state = {
            navigation : navigation,
            UserID : UserID
        }
    }
    render(){
        return(<>
        
    <NavigationContainer independent={true}>
    {/* {this.ShowDrawerIcon()}    */}
        <Drawer.Navigator initialRouteName="TabMenu">
        <Drawer.Screen name="Dashboard" component={DashboardScreen} initialParams={{UserID : this.state.UserID}} />
        <Drawer.Screen name="personal details" component={PatientDetails} initialParams={{UserID : this.state.UserID}} />
        <Drawer.Screen name="medical history" component={PatientDetails} initialParams={{UserID : this.state.UserID}} />
        <Drawer.Screen name="Store" component={PatientDetails} initialParams={{UserID : this.state.UserID}} />
        <Drawer.Screen name="my orders" component={PatientDetails} initialParams={{UserID : this.state.UserID}}/>
      </Drawer.Navigator>
        </NavigationContainer>
        </>)
    }
}
export default TabMenu