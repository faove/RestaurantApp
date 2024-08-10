import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Icon } from '@rneui/base';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { screen } from '../../../utils'
import { styles } from "./RestaurantScreen.styles";

export function RestaurantScreen(props) {
    const { navigation } = props;
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });
    }, []);
    

    const gotoRestaurant = () => {
        navigation.navigate(screen.restaurant.tab, {
            screen: screen.restaurant.addRestaurant,
        })
    }

    return (
        <View style={styles.content}>
            <Text>Estamos en RestaurantScreen</Text>
            {currentUser && (
                <Icon
                    reverse
                    type="material-community"
                    name="plus"
                    color="#00a680"
                    containerStyle={styles.btnContainer}
                    onPress={gotoRestaurant}
                />
            )}
        </View>       
    )
}