import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from '@rneui/base'
import { getAuth } from 'firebase/auth'
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import * as ImagePicker from "expo-image-picker"
import { styles } from './InfoUser.styles'

export function InfoUser() {
  const { uid, photoURL, displayName, email } = getAuth().currentUser;
  
  const changeAvatar = async() => {
    console.log('changeAvatar');

    // Request permission to access media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }
    
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      aspect: [4, 3],
    });

    if (!result.canceled) uploadImage(result.uri);
  };

  const uploadImage = async(uri) => {
    console.log('uri');

    const response = await fetch(uri);
    const blob = await response.blob();

    const storage = getStorage();
    const storageRef = ref(storage, 'avatar/avatar_test');
    // const storageRef = ref(storage, `avatar/avatar_test`);

    uploadBytes(storageRef, blob).then((snapshot) => {
      console.log(snapshot.metadata);
    });
  };
  return (
    <View style={styles.content}>
      <Avatar 
        size="large" 
        rounded 
        containerStyle={styles.avatar}
        icon={{ type: "material", name: "person"}}
        source={{ uri: photoURL }}
        >
        <Avatar.Accessory size={24} onPress={changeAvatar} />

      </Avatar>
      <View>
        <Text style={styles.displayName}>{ displayName || "Anonimo" }</Text>
        <Text>{ email}</Text>
      </View>
    </View>
  );
}