import React from 'react'
import { View, Text } from 'react-native'
import { Button } from '@rneui/themed'
import { screen } from '../../utils'

export function RestaurantScreen(props) {
    const { navigation } = props;

    const gotoRestaurant = () => {
        //navigation.navigate(screen.restaurant.addRestaurant)
        //console.log(navigation.navigate)
        navigation.navigate(screen.account.tab, screen.account.account)
    }

    return (
        <View>
            <Text>Estamos en RestaurantScreen</Text>
            <Button title="Crear Restaurante" onPress={gotoRestaurant}/>
        </View>       
    )
}