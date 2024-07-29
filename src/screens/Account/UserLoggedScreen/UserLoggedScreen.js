import React, { useState } from 'react'
import { View } from 'react-native'
import { Button } from '@rneui/base'
import { getAuth, signOut } from 'firebase/auth'
import { LoadingModal } from '../../../components'
import { InfoUser } from '../../../components/Account'
import { styles } from './UserLoggedScreen.styles'


export function UserLoggedScreen() {

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const logout = async() => {
    const auth = getAuth();
    await signOut(auth);
  }
  return (
    <View>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />
      <Button 
        title="Cerrar Sesión" 
        buttonStyle={styles.btnStyles} 
        titleStyle={styles.btnTextStyle}
        onPress={logout}
        >Cerrar Sesión</Button>

        <LoadingModal show={loading} text={loadingText}/>
    </View>
  )
}