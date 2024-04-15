import React from 'react'
import { ScrollView, View } from 'react-native'
import { Text, Image } from '@rneui/base'
import { useNavigation } from "@react-navigation/native"
import { screen } from "../../../utils"
import { styles } from "./LoginScreen.styles"

export function LoginScreen() {

  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };

  return (
    <ScrollView>
      <Image 
        source={require("../../../../assets/img/restaurantapp.png")}  
        style={styles.image}
      />
      <View style={styles.content}>
        <Text>Estamos en el login</Text>
        <Text onPress={goToRegister}>Registrarse</Text>
      </View>
    </ScrollView>
  )
}