import React from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, Image } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";
import { screen } from '../../../utils';
import { styles } from './UserGuestScreen.styles' 

export function UserGuestScreen() {

  const navigation = useNavigation();

  const gotoLogin = () => {
    navigation.navigate(screen.account.login);
  }

  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image 
        source={require('../../../../assets/img/user-guest.png')} 
        style={styles.images} 
      />
      <Text style={styles.title}>Consultar tu perfil</Text>
      <Text style={styles.description}>
        ¿Cómo explicar el concepto de un restaurante? es un establecimiento de servicio, en el mayor de los casos públicos, donde se paga por la comida y bebida para ser consumidas en el mismo local o para llevarla.
      </Text>
      <Button 
        title="Ver tu perfil" 
        onPress={gotoLogin}
        buttonStyle={styles.btnstyle}
      />
    </ScrollView>
  )
}