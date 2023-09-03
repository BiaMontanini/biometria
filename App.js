import { styles } from './styles';
import {View, Text} from "react-native"
import { useEffect, useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';

export default function App() {
  const [isAunthenticated, setIsAuthenticated ] = useState(false);

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

    </View>
  );
}


