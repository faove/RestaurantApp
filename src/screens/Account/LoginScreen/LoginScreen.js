import React from 'react'
import { ScrollView, View } from 'react-native'
import { Text, Image } from '@rneui/base'
import { useNavigation } from "@react-navigation/native"
import { LoginForm } from '../../../components/Auth/LoginForm/LoginForm'
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
        <LoginForm />
        
        <Text styles={styles.textRegister}>
          Aún no tienes cuenta {" "}
          <Text styles={styles.btnRegister} onPress={goToRegister}> Regístrarse </Text>
        </Text>
      </View>
    </ScrollView>
  )
}