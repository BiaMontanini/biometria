import { styles } from './styles';
import {View, Text, Button, Alert} from "react-native"
import { useEffect, useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';

export default function App() {
  const [isAunthenticated, setIsAuthenticated ] = useState(false);

  async function handleAuthentication(){

const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();

console.log(isBiometricEnrolled)
if(!isBiometricEnrolled){
  return Alert.alert('Biometria não encontrada.', 'Por favor, cadastre sua digital no dispositivo!');
}

const auth = await LocalAuthentication.authenticateAsync({
  promptMessage: 'Login com Biometria',
  fallbackLabel: 'Biometria não reconhecida'
});

setIsAuthenticated(auth.success)

  }

  async function verifyAvaiableAuthentication(){
    const compatible = await LocalAuthentication.hasHardwareAsync();
    console.log(compatible)

    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    console.log(types.map(type=> LocalAuthentication.AuthenticationType[type]))
  }

  useEffect(() =>{
    verifyAvaiableAuthentication();}, []);

  return (
    <View style={styles.container}>
      <Text>Usuario conectado: {isAunthenticated ? 'Sim': 'Não'}</Text>

<Button 
title='Entrar'
onPress={handleAuthentication}
/>
    </View>
  );
}


