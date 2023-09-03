import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import {View, Text} from "react-native"
import { useState } from 'react';

export default function App() {
  const [isAunthenticate ] = useState();

  return (
    <View style={styles.container}>
      <Text>Usuario conectado:</Text>
      <StatusBar style="auto" />
    </View>
  );
}


