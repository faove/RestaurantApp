import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Button } from "@rneui/base"
import { styles } from './ChangeEmailForm.styles'

export function ChangeEmailForm(props) {
    const { onclose, onReload } = props;
    const [showPassword, setShowPassword] = useState(false)

    const onShowPassword = () => setShowPassword((prevState) => !prevState);
  return (
    <View style={styles.content}>
      <Input 
        placeholder='Nuevo email'
        containerStyle={styles.input}     
      />
      <Input 
        placeholder='Contreseña'
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true} 
        rightIcon= {{
            type: "material-community",
            name: showPassword ? "eye-off-outline" : "eye-outline",
            color: "#c2c2c2",
            onPress: () => onShowPassword,
        }}
       />
       <Button title="Cambiar email" containerStyle={styles.btnContainer} buttonStyle={styles.btn}/>
    </View>
  )
}