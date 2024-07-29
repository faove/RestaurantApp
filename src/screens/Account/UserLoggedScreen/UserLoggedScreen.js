import React from 'react'
import { View } from 'react-native'
import { Button } from '@rneui/base'
import { getAuth, signOut } from 'firebase/auth'
import { InfoUser } from '../../../components/Account'
import { styles } from './UserLoggedScreen.styles'


export function UserLoggedScreen() {

  const logout = async() => {
    const auth = getAuth();
    await signOut(auth);
  }
  return (
    <View>
      <InfoUser />
      <Button 
        title="Cerrar Sesión" 
        buttonStyle={styles.btnStyles} 
        titleStyle={styles.btnTextStyle}
        onPress={logout}
        >Cerrar Sesión</Button>
    </View>
  )
}