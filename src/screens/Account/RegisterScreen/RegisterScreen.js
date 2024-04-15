import React from 'react'
import { View } from 'react-native'
import { Image } from '@rneui/base'
import { RegisterForm } from "../../../components/Auth"
import { styles } from "../RegisterScreen/RegisterScreen.styles";

export function RegisterScreen() {
  return (
    <View>
      <Image 
        source={require('../../../../assets/img/restaurantapp.png')}
        style={styles.image}
      />  
      <View style={styles.content}>
        <RegisterForm />
      </View>  
    </View>
  )
}