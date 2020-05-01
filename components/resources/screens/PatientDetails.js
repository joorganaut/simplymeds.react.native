import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity  } from 'react-native';
import TabsBackground from '../components/TabsBackground';
import Logo from '../components/Logo';
import DrawerIcon from '../components/DrawerIcon'
import PatientImage from '../components/PatientImage';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import MiddlewareManager from '../../master/MiddlewareManager'

class PatientDetails extends Component{
    constructor(props){
        debugger
        super(props)
        //var UserID = this.props.navigation.getParam('UserID')
        this.state = {
            navigation : this.props.navigation,
            UserID : this.props.route.params.UserID,        }
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
       
        {/* {this.ShowDrawerIcon()}    */}
        <Header>Hello Patient</Header>
        <Header>Hello Patient</Header>
        <Header>Hello Patient</Header>
        <Header>Hello Patient</Header>
        <Header>Hello Patient</Header>
        <Header>Hello Patient</Header>
        </TabsBackground>
        </>)
    }
}
export default PatientDetails