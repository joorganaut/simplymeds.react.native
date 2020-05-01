import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity  } from 'react-native';
import TabsBackground from '../components/TabsBackground';
import Logo from '../components/Logo';
import PatientImage from '../components/PatientImage';
import HintBox from '../components/HintBox'
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import DrawerIcon from '../components/DrawerIcon'
import Button from '../components/Button';
import MiddlewareManager from '../../master/MiddlewareManager'
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen, LoginScreen, RegisterScreen, ForgotPasswordScreen} from './index'
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();
const manager = new MiddlewareManager();
const GetPatientDetails= async (id, callback)=>{
  var data = {
    UserID : id
  }
  await manager.PostData(data, '/api/RetrievePatientDetails', x=>{
    callback(x)   
  })
}
class DashboardScreen extends Component{
    constructor(props)
    {
        
        super(props)
        this.state={
            navigation : this.props.navigation,
            UserID : this.props.route.params.UserID,
            Patient: {},
            image: '/'
        }
    }
    
    
    componentDidMount(){
        GetPatientDetails(this.state.UserID, x => {
            if (x.data.Code == '00') {
              Patient = x.data.record
              this.setState({
                Patient: Patient
              })
              this.setState({image:x.data.image})
              //alert('success ' + this.state.Patient.FirstName)
            } else {
              alert('Unable to get patients details')
            }
          }).done()
    }
    ShowDrawerIcon=()=>{
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            <Image
              source={require('../assets/navigation-drawer-icon-png-5.png')}
              // source={require('../assets/navigation-drawer-icon-png-5.png')}              
              style={{ width: 25, height: 25, marginRight: 200 }}
            />
          </TouchableOpacity>
        </View>
      );
    }
    toggleDrawer = () => {
      //Props to open/close the drawer
      this.state.navigation.toggleDrawer()
    };
    render(){
        return(<> 
        <DrawerIcon navigation={this.state.navigation} onPress={this.toggleDrawer}></DrawerIcon> 
        <TabsBackground>
        {/* {this.ShowDrawerIcon()}          */}
        {this.PatientImage(this.state.image)}
          
    <Paragraph>
      Welcome {this.state.Patient.FirstName+' '+this.state.Patient.LastName}
    </Paragraph>
    <HintBox message='Did you know?...   Rats carry lassa fever' hint='kill all rats'>
    </HintBox>
    </TabsBackground> 
        </>)
    }
    PatientImage = (source) => {
        return (<Image source={{uri: source}} style={this.styles.image} onPress={()=>{this.state.navigation.navigate('TabMenu')}}/>)
    };
    styles = StyleSheet.create({
      image: {
        width: 120,
        height: 120,
        marginBottom: 12,
        borderRadius:100
      },
    });

}
export default DashboardScreen