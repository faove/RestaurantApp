import React from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from "@rneui/base"
import { styles } from './ChangeDisplayNameForm.styles'

export function ChangeDisplayNameForm() {
  return (
    <View style={styles.content}>
      <Input 
        placeholder ="Nombre y apellidos" 
        rightIcon={{ 
          type: "material-community", 
          name: "account-circle-outline",
          color: "#C2C2C2",
          }} />
      <Button 
        title="Cambiar Nombre y apellidos"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
     
    </View>
  )
} 