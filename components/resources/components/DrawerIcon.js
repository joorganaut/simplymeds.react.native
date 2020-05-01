import React, { Component } from 'react';
import {
  ImageBackground,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { theme } from '../core/theme';

class DrawerIcon extends Component {
        constructor(props)
        {
            super(props)
            this.state = {
                navigation : this.props.navigation,
                onPress : this.props.onPress.bind(this)
            }
        }
        toggleDrawer = (navigation) => {
            //Props to open/close the drawer
            navigation.toggleDrawer()
          };
    render(){
        return(<>
            <ImageBackground
                source={require('../assets/bg_1.jpg')}
                resizeMode="stretch"
                style={styles.background}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={this.state.onPress}>
                        <Image
                        source={require('../assets/navigation-drawer-icon-png-5.png')}
                        // source={require('../assets/navigation-drawer-icon-png-5.png')}              
                        style={{ width: 25, height: 25, marginRight: 250 }}
                        />
                    </TouchableOpacity>
                    </View>
            </ImageBackground>
        </>)
    }
}
  

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    maxHeight: 25,
    backgroundColor : theme.colors.brand
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
     justifyContent: 'center',
  },
});

export default DrawerIcon;
