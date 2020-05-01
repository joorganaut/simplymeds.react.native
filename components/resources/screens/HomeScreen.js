import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { theme } from '../core/theme';

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>RX 3.0</Header>

    <Paragraph>
    Effective Medicine, New Medicine Everyday
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('Login')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('Register')}>
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);
