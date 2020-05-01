import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';
import MiddlewareManager from '../../master/MiddlewareManager'

const LoginScreen = ({ navigation }) => {
  const manager = new MiddlewareManager();
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [showActivity, setShowActivity] = useState({value:false})

  const _onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });      
      return;
    }
    //perform authentication method here
      var data = {
        Username : email.value,
        Password : password.value
      }
      setShowActivity({value : true})
      await manager.PostData(data, '/api/Login', x=>{
        if(x.data.Code === '00')
        {
            setShowActivity({value : false})
            //alert('Welcome '+x.data.record.Name)            
            navigation.replace('Dash board', {ID : x.data.record.ID, navigation : navigation});
        }
        else{
          setShowActivity({value : false})
          alert('Invalid login details')          
        }        
    })
  };

  return (
    <Background>
      {/* <BackButton goBack={() => navigation.navigate('Home')} /> */}
     
      <Logo />

      <Header>Welcome back.</Header>
      <View style={[styles2.container, styles2.horizontal]}>
      <ActivityIndicator size="large" color="#3dace3" animating={showActivity.value} style={[styles2.loading]} />
      </View>
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
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button 
      loading={showActivity.value}
      disabled={showActivity.value}
      title='Login' mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.brand,
  },
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
export default memo(LoginScreen);
