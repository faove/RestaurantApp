import React from 'react'
import { View } from 'react-native'
import { Image } from '@rneui/base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { RegisterForm } from "../../../components/Auth"
import { styles } from "../RegisterScreen/RegisterScreen.styles";

export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
      <Image 
        source={require('../../../../assets/img/restaurantapp.png')}
        style={styles.image}
      />  
      <View style={styles.content}>
        <RegisterForm />
      </View>  
    </KeyboardAwareScrollView>
  )
}