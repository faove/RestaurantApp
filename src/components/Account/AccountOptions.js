import React from 'react'
import { View } from 'react-native'
import { ListItem, Icon } from '@rneui/base'
import { map } from "lodash"

export function AccountOptions() {
    const menuOptions = getMenuOptions();
  return (
    <View>
      {
      map(menuOptions, (menu, index) => (
        <ListItem 
            key={index} 
            bottomDivider 
            onPress={menu.onPress}
        >
            <Icon 
                type={menu.iconType}
                name={menu.iconNameLeft}
                color={menu.iconColorLeft} 
            />

            <ListItem.Content>
                <ListItem.Title>{menu.title}</ListItem.Title>
            </ListItem.Content>

            <Icon 
                type={menu.iconType} 
                name={menu.iconNameRight} 
                color={menu.iconColorRight}
            />
        </ListItem>
      ))}
    </View>
  )
}

function getMenuOptions() {
    return [
        {
            title: "Cambiar Nombre y Apellidos",
            iconType: "material-community",
            iconNameLeft: "account-circle",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight:"#ccc",
            onPress: () => console.log("Cambiar nombre y apellidos")
        },
        {
            title: "Cambiar Email",
            iconType: "material-community",
            iconNameLeft: "at",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight:"#ccc",
            onPress: () => console.log("Cambiar email")
        },
        {
            title: "Cambiar contraseña",
            iconType: "material-community",
            iconNameLeft: "lock-reset",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight:"#ccc",
            onPress: () => console.log("Cambiar contraseña")
        }
    ]
}