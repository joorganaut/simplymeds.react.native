import React, { memo } from 'react';
import {
    View,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

const TabsBackground = ({ children }) => (
  <View
    // source={require('../assets/bg_1.jpg')}
    // resizeMode="stretch"
    style={styles.background}
  >
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor:'white'
  },
  container: {
    flex: 1,
    padding: 0,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
     alignItems: 'center',
     justifyContent: 'center',
  },
});

export default memo(TabsBackground);
