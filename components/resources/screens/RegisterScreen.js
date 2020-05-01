import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
  mobileValidator,
} from '../core/utils';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [mobile, setMobile] = useState({ value: '', error: '' });
  const [showActivity, setShowActivity] = useState({value:false})

  const _onSignUpPressed = async () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const mobileError = mobileValidator(mobile.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setMobile({ ...mobile, error: mobileError });
      return;
    }
     //perform authentication method here
     var data = {
      Username : email.value,
      Password : password.value
    }
    setShowActivity({value : true})
    await manager.PostData(data, '/api/RegisterUser', x=>{
      if(x.data.Code === '00')
      {
          setShowActivity({value : false})
          alert('Welcome')            
          navigation.navigate('Dashboard');
      }
      else{
        setShowActivity({value : false})
        alert(x.data.Message)         
      }        
  })
  };

  return (
    <Background>
      {/* <BackButton goBack={() => navigation.navigate('Home')} /> */}
      <View style={[styles2.container, styles2.horizontal]}>
      <ActivityIndicator size="large" color="#3dace3" animating={showActivity.value} style={[styles.loading]} />
      </View>
      <Logo />

      <Header>Register</Header>

      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Mobile"
        returnKeyType="next"
        value={mobile.value}
        onChangeText={text => setMobile({ value: text, error: '' })}
        error={!!mobile.error}
        errorText={mobile.error}
        autoCorrect={true}
        textContentType="telephoneNumber"
        keyboardType={(Platform.OS === 'ios') ? "numbers-and-punctuation" : 'phone-pad'}
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button 
      loading={showActivity.value}
      disabled={showActivity.value}
      mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  loading:{
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    // backgroundColor: '#F5FCFF88',
  }
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',    
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  loading:{
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    // backgroundColor: '#F5FCFF88',
  }
});

export default memo(RegisterScreen);
