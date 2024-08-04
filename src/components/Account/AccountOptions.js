import React, { useState } from 'react'
import { View } from 'react-native'
import { ListItem, Icon, Text } from '@rneui/base'
import { map } from "lodash";
import { Modal } from "../../components"
import { ChangeDisplayNameForm } from "./ChangeDisplayNameForm";

export function AccountOptions(props) {
    const { onReload } = props;

    const [showModal, setShowModal] = useState(false);
    const [renderComponent, setRenderComponent] = useState(null);

    const onCloseOpenModel = () => setShowModal((prevState) => !prevState);
    
    const selectedComponet = (key) => {

        if (key === "displayName") {
            setRenderComponent(<ChangeDisplayNameForm onClose={ onCloseOpenModel } onReload={ onReload } />);
        }

        if (key === "email") {
            setRenderComponent(<Text>Cambiar email</Text>);
        }

        if (key === "password") {
            setRenderComponent(<Text>Cambiar password</Text>);
        }
        onCloseOpenModel();
    }

    const menuOptions = getMenuOptions(selectedComponet);

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

      <Modal show={showModal} close={ onCloseOpenModel }>
        {renderComponent}
      </Modal>
    </View>
  )
}

function getMenuOptions(selectedComponet) {
    return [
        {
            title: "Cambiar Nombre y Apellidos",
            iconType: "material-community",
            iconNameLeft: "account-circle",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight:"#ccc",
            onPress: () => selectedComponet("displayName"),
        },
        {
            title: "Cambiar Email",
            iconType: "material-community",
            iconNameLeft: "at",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight:"#ccc",
            onPress: () => selectedComponet("email"),
        },
        {
            title: "Cambiar contraseña",
            iconType: "material-community",
            iconNameLeft: "lock-reset",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight:"#ccc",
            onPress: () => selectedComponet("password"),
        }
    ]
}